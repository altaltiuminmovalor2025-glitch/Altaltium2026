<script>
                            const boton = document.getElementById("btn-calcular");

                            boton.addEventListener("mouseover", function() {
                                this.style.backgroundColor = "var(--estimaciones-secondary-color)";
                                this.style.transform = "scale(1.05)";
                            });

                            boton.addEventListener("mouseout", function() {
                                this.style.backgroundColor = "var(--estimaciones-primary-color)";
                                this.style.transform = "scale(1)";
                            });

                            boton.addEventListener("mousedown", function() {
                                this.style.backgroundColor = "#007777";
                                this.style.transform = "scale(0.95)";
                            });

                            boton.addEventListener("mouseup", function() {
                                this.style.backgroundColor = "var(--estimaciones-secondary-color)";
                                this.style.transform = "scale(1.05)";
                                setTimeout(() => {
                                    this.style.backgroundColor = "var(--estimaciones-primary-color)";
                                    this.style.transform = "scale(1)";
                                }, 200);
                            });

                            document.getElementById('tipo_propiedad').addEventListener('change', function() {
                                const propertyFields = document.querySelectorAll('.property-field');
                                const isTerreno = this.value === 'Terreno';
                                propertyFields.forEach(field => {
                                    if (isTerreno) {
                                        field.classList.add('hidden-field');
                                        field.querySelector('input, select').removeAttribute('required');
                                    } else {
                                        field.classList.remove('hidden-field');
                                        field.querySelector('input, select').setAttribute('required', '');
                                    }
                                });
                                checkFormValidity();
                            });

                            function validateSanitarios(input) {
                                let value = input.value.trim();

                                // Permitir campo vacío temporalmente durante la edición
                                if (value === '') {
                                    input.setCustomValidity('');
                                    return;
                                }

                                // Reemplazar comas por puntos para soportar diferentes formatos
                                value = value.replace(',', '.');

                                // Validar formato con expresión regular
                                const sanitariosRegex = /^[1-9]\d*(\.5)?$/;
                                if (!sanitariosRegex.test(value)) {
                                    input.setCustomValidity('Formato inválido. Use enteros o .5 (ej. 1, 1.5, 2)');
                                    return;
                                }

                                // Convertir a número para validaciones adicionales
                                const numValue = parseFloat(value);

                                // Validar mínimo 1 baño
                                if (numValue < 1) {
                                    input.setCustomValidity('Mínimo 1 baño completo');
                                    return;
                                }

                                // Validar parte decimal
                                const decimalPart = numValue % 1;
                                if (decimalPart !== 0 && decimalPart !== 0.5) {
                                    input.setCustomValidity('Solo se permiten medios baños (.5)');
                                    return;
                                }

                                // Formatear el valor (opcional)
                                input.value = value.includes('.') ? value : numValue.toString();

                                // Todo correcto
                                input.setCustomValidity('');
                                checkFormValidity();
                            }

                            function checkFormValidity() {
                                const form = document.querySelector('.needs-validation');
                                const requiredFields = form.querySelectorAll('[required]');
                                let allValid = true;

                                requiredFields.forEach(field => {
                                    if (!field.value || field.value === '' || (field.tagName === 'SELECT' && field.value === '')) {
                                        allValid = false;
                                    }
                                });

                                const statusDiv = document.getElementById('form-status');
                                if (allValid) {
                                    statusDiv.innerHTML = '<i class="fas fa-check-circle me-1"></i> ¡Todos los campos requeridos están completos!';
                                    statusDiv.classList.remove('error');
                                    statusDiv.classList.add('success');
                                } else {
                                    statusDiv.innerHTML = '<i class="fas fa-exclamation-circle me-1"></i> Falta completar uno o más campos requeridos.';
                                    statusDiv.classList.remove('success');
                                    statusDiv.classList.add('error');
                                }
                            }

</script>
