$(document).ready(function() {
    // Inicializar tooltips
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Validación del formulario en submit
    (function() {
        'use strict';
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

    // Scroll automático al primer campo requerido vacío
    function scrollToNextField(currentField) {
        const form = document.querySelector('.form-container');
        const fields = Array.from(form.querySelectorAll('input[required], select[required]'));
        const calleIndex = fields.findIndex(field => field.id === 'calle');
        const relevantFields = fields.slice(calleIndex);
        const firstEmptyField = relevantFields.find(field =>
            !field.value ||
            (field.tagName === 'SELECT' && field.value === '') ||
            (field.type === 'number' && field.value <= 0)
        );

        if (firstEmptyField && firstEmptyField !== currentField) {
            setTimeout(() => {
                const offset = 20;
                const fieldPosition = firstEmptyField.getBoundingClientRect().top + form.scrollTop - form.getBoundingClientRect().top;
                form.scrollTo({
                    top: fieldPosition - offset,
                    behavior: 'smooth'
                });
                firstEmptyField.focus();
            }, 100);
        }
    }

    // Agregar eventos a los campos requeridos
    const finalFields = ['calle', 'recamaras', 'sanitarios', 'estacionamiento', 'terreno', 'construccion', 'estado_conservacion'];
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        field.addEventListener('change', function() {
            checkFormValidity();
            if (finalFields.includes(this.id)) {
                if (this.value && (this.type !== 'number' || this.value > 0)) {
                    scrollToNextField(this);
                }
            }
        });
    });

    // Evento change para el selector de estado
    $('#estado').on('change', function() {
        const estadoId = $(this).val();
        if (estadoId) {
            $('#municipio-spinner').show();
            $('#municipio').addClass('is-loading');

            $.ajax({
                url: '/obtener_municipios/',
                data: { 'estado_id': estadoId },
                success: function(data) {
                    $('#municipio').empty().append('<option selected disabled value="">Seleccionar...</option>');
                    $.each(data, function(index, municipio) {
                        $('#municipio').append(`<option value="${municipio.id_municipio}">${municipio.nombre}</option>`);
                    });
                    $('#colonia').empty().append('<option selected disabled value="">Seleccionar...</option>');
                    $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');

                    // Mostrar mapa del estado (sin cambiar el zoom)
                    mostrarMapaEstado($('#estado option:selected').text());
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener municipios:', status, error);
                },
                complete: function() {
                    $('#municipio-spinner').hide();
                    $('#municipio').removeClass('is-loading');
                }
            });
        } else {
            $('#municipio').empty().append('<option selected disabled value="">Seleccionar...</option>');
            $('#colonia').empty().append('<option selected disabled value="">Seleccionar...</option>');
            $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');
            // Volver al mapa de México si no hay estado seleccionado
            inicializarMapaMexico();
        }
    });

    // Evento change para el selector de municipio
    $('#municipio').on('change', function() {
        const municipioId = $(this).val();
        if (municipioId) {
            $('#colonia-spinner').show();
            $('#colonia').addClass('is-loading');

            $.ajax({
                url: '/obtener_colonias/',
                data: { 'municipio_id': municipioId },
                success: function(data) {
                    $('#colonia').empty().append('<option selected disabled value="">Seleccionar...</option>');
                    $.each(data, function(index, colonia) {
                        $('#colonia').append(`<option value="${colonia.id_colonia}">${colonia.nombre}</option>`);
                    });
                    $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');

                    // Mostrar mapa del municipio (sin cambiar el zoom)
                    mostrarMapaMunicipio($('#municipio option:selected').text(), $('#estado option:selected').text());
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener colonias:', status, error);
                    $('#colonia').empty().append('<option selected disabled value="">Error al cargar</option>');
                },
                complete: function() {
                    $('#colonia-spinner').hide();
                    $('#colonia').removeClass('is-loading');
                }
            });
        } else {
            $('#colonia').empty().append('<option selected disabled value="">Seleccionar...</option>');
            $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');
            // Volver al mapa del estado si no hay municipio seleccionado
            mostrarMapaEstado($('#estado option:selected').text());
        }
    });

    // Evento change para el selector de colonia
    $('#colonia').on('change', function() {
        const coloniaId = $(this).val();
        if (coloniaId) {
            // Actualizar el mapa automáticamente al seleccionar una colonia
            mostrarMapaColonia(
                $('#colonia option:selected').text(),
                $('#municipio option:selected').text(),
                $('#estado option:selected').text()
            );

            $.ajax({
                url: '/obtener_codigos_postales/',
                data: { 'colonia_id': coloniaId },
                success: function(data) {
                    $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');
                    $.each(data, function(index, cp) {
                        $('#cp').append(`<option value="${cp.id_codigo_postal}">${cp.codigo}</option>`);
                    });
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener códigos postales:', status, error);
                }
            });
        } else {
            $('#cp').empty().append('<option selected disabled value="">Seleccionar...</option>');
            // Volver al mapa del municipio si no hay colonia seleccionada
            mostrarMapaMunicipio($('#municipio option:selected').text(), $('#estado option:selected').text());
        }
    });

    // Evento change para el selector de código postal
    $('#cp').on('change', function() {
        const cpId = $(this).val();
        if (cpId) {
            $.ajax({
                url: '/obtener_datos_por_cp/',
                data: { 'codigo_postal': cpId },
                success: function(data) {
                    if (data) {
                        if (data.colonia && data.colonia.nombre) {
                            $('#colonia').val(data.colonia.id_colonia).trigger('change');
                        }
                        if (data.municipio && data.municipio.nombre) {
                            $('#municipio').val(data.municipio.id_municipio).trigger('change');
                        }
                        if (data.estado && data.estado.nombre) {
                            $('#estado').val(data.estado.id_estado).trigger('change');
                        }
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener datos por CP:', status, error);
                }
            });
        }
    });

    // Evento click para el botón "Ubicar en mapa"
    $('#btnUbicar').click(function() {
        const colonia = $('#colonia option:selected').text().trim();
        const municipio = $('#municipio option:selected').text().trim();
        const estado = $('#estado option:selected').text().trim();
        const calle = $('#calle').val().trim();

        if (colonia && colonia !== "Seleccionar...") {
            mostrarMapaColonia(colonia, municipio, estado);
        } else if (municipio && municipio !== "Seleccionar...") {
            mostrarMapaMunicipio(municipio, estado);
        } else if (estado && estado !== "Seleccionar...") {
            mostrarMapaEstado(estado);
        } else {
            inicializarMapaMexico();
        }
    });

    // Inicializar el mapa con México
    inicializarMapaMexico();

    // Función para inicializar el mapa mostrando la República Mexicana
    function inicializarMapaMexico() {
        const mapFrame = document.getElementById('map');
        const loadingMap = document.getElementById('loadingMap');

        loadingMap.style.display = 'flex';
        mapFrame.style.opacity = '0.5';

        const defaultUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8000000!2d-102.5528!3d23.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTcOpeGljbw!5e0!3m2!1ses!2smx!4v${Date.now()}&z=4`;

        mapFrame.src = defaultUrl;
        mapFrame.onload = () => {
            loadingMap.style.display = 'none';
            mapFrame.style.opacity = '1';
        };
        mapFrame.onerror = () => {
            console.error('Error al cargar el mapa:', defaultUrl);
            loadingMap.style.display = 'none';
            mapFrame.style.opacity = '1';
            document.getElementById('form-status').innerHTML = '<i class="fas fa-exclamation-circle me-1"></i> Error al cargar el mapa. Por favor, intenta de nuevo.';
        };
    }

    // Función para mostrar mapa de un estado (sin zoom cercano)
    function mostrarMapaEstado(estado) {
        const mapFrame = document.getElementById('map');
        const loadingMap = document.getElementById('loadingMap');

        loadingMap.style.display = 'flex';
        mapFrame.style.opacity = '0.5';

        const estadoCoords = {
            "Ciudad de México": "19.4326,-99.1332",
            "Estado de México": "19.2833,-99.6535",
            "Jalisco": "20.6668,-103.3918",
            // ... (otros estados)
        };

        const centerPoint = estadoCoords[estado] || '23.6345,-102.5528';
        const query = `${estado}, México`;
        const encodedQuery = encodeURIComponent(query);

        const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000000!2d${centerPoint.split(',')[1]}!3d${centerPoint.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedQuery}!5e0!3m2!1ses!2smx!4v${Date.now()}&z=6`;

        mapFrame.src = mapUrl;
        mapFrame.onload = () => {
            loadingMap.style.display = 'none';
            mapFrame.style.opacity = '1';
        };
    }

    // Función para mostrar mapa de un municipio (sin zoom cercano)
    function mostrarMapaMunicipio(municipio, estado) {
        const mapFrame = document.getElementById('map');
        const loadingMap = document.getElementById('loadingMap');

        loadingMap.style.display = 'flex';
        mapFrame.style.opacity = '0.5';

        const esCDMX = estado === "Ciudad de México";
        const prefijo = esCDMX ? "Alcaldía " : "Municipio ";

        const municipioCoords = {
            "Ciudad de México": {
                "Álvaro Obregón": "19.3589,-99.2036",
                "Azcapotzalco": "19.4872,-99.1854",
                // ... (otros municipios de CDMX)
            },
            "Estado de México": {
                "Toluca": "19.2925,-99.6569",
                // ... (otros municipios de EdoMex)
            }
            // ... (otros estados)
        };

        const centerPoint = (municipioCoords[estado] && municipioCoords[estado][municipio]) ?
            municipioCoords[estado][municipio] : '23.6345,-102.5528';
        const query = `${prefijo}${municipio}, ${estado}`;
        const encodedQuery = encodeURIComponent(query);

        const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000!2d${centerPoint.split(',')[1]}!3d${centerPoint.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedQuery}!5e0!3m2!1ses!2smx!4v${Date.now()}&z=11`;

        mapFrame.src = mapUrl;
        mapFrame.onload = () => {
            loadingMap.style.display = 'none';
            mapFrame.style.opacity = '1';
        };
    }

    // Función para mostrar mapa de una colonia (con zoom cercano)
    function mostrarMapaColonia(colonia, municipio, estado) {
        const mapFrame = document.getElementById('map');
        const loadingMap = document.getElementById('loadingMap');

        loadingMap.style.display = 'flex';
        mapFrame.style.opacity = '0.5';

        const esCDMX = estado === "Ciudad de México";
        const prefijo = esCDMX ? "Alcaldía " : "Municipio ";

        const coloniaCoords = {
            "Ciudad de México": {
                "Álvaro Obregón": {
                    "San Ángel": "19.3467,-99.1900",
                    "Jardines del Pedregal": "19.3308,-99.2100"
                },
                "Benito Juárez": {
                    "Del Valle": "19.3933,-99.1642"
                }
                // ... (otras colonias)
            }
            // ... (otros estados)
        };

        const centerPoint = (coloniaCoords[estado] && coloniaCoords[estado][municipio] && coloniaCoords[estado][municipio][colonia]) ?
            coloniaCoords[estado][municipio][colonia] : '23.6345,-102.5528';
        const query = `${colonia}, ${prefijo}${municipio}, ${estado}`;
        const encodedQuery = encodeURIComponent(query);

        const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d${centerPoint.split(',')[1]}!3d${centerPoint.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedQuery}!5e0!3m2!1ses!2smx!4v${Date.now()}&z=16`;

        mapFrame.src = mapUrl;
        mapFrame.onload = () => {
            loadingMap.style.display = 'none';
            mapFrame.style.opacity = '1';
        };
    }
});