// Datos de propiedades
const properties = [
    {
        id:'1',
        title: 'Calzada Desierto de los Leones 4790',
        type: 'penthouse',
        price: 1881352,
        location: 'Alvaro Obregon, CDMX',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 3,
        car: 1,
        area: 210,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZQsAmvI28NgzPNEZq-VF3wUdgc5A006w6Q&s',
        description: 'Bonito y amplio departamento en Calzada Desierto de los Leones, cerca de San Angel Inn',  
    },
    {
        id:'2',
        title: 'Departamento en Col. Del Valle',
        type: 'departamento',
        price: 3500000,
        location: 'Benito Juarez, CDMX',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 2,
        car: 2,
        area: 120,
        image: 'https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTlmOGMwLTU4MjktNzdkYy1hYzA3LTAxZTU3MmI1MTUwZS8wMTk5ZjhjMy00YTBhLTczZmUtYWU3NC1mYjUzYjVjNjA1YjEucG5nIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo4NDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=',
        description: 'Bonito departamento en una de las mejores colonias de alta plusvalia que es la Del Valle Centro',  
    },
    {
        id: '3',
        title: 'Conjunto Habitacional Sta. Cruz',
        type: 'casa',
        price: 665000,
        location: 'Santa Cruz Atizapan, Edo. Mex',
        city: 'Estado de México',
        bedrooms: 2,
        bathrooms: 1,
        car: 1,
        area: 53,
        image: 'https://imgmx.waa2.com/home/290924/casa-en-condominio-en-venta-afirme-calle-carlos-silva-atizapan-centro-atizapan-mexico-52500-4d3198935a4fcd748c491e716ff5245f_thumb.jpg',
        description: 'Casa en condominio cerrado en el conjunto habitacional Santa Cruz Atizapan.',
    },
    {
        id: '4',
        title: 'Bosque de Arrayan S/N',
        type: 'departamento',
        price: 1315000,
        location: 'Atizapan de Zaragoza, Edo. Mex',
        city: 'Estado de México',
        bedrooms: 2,
        bathrooms: 2,
        car: 2,
        area: 73,
        image: 'https://s1.rea.global/img/raw/realtor_global/mx/a91d4361a59f340ae66c0c459183785b.jpg',
        description: 'Departamento moderno en la colonia La Estadia en Atizapan de Zaragoza, muy cerca de Zona Esmeralda.',
    },
    {
        id: '5',
        title: 'Av. Cuitlahuac 495',
        type: 'departamento',
        price: 825000,
        location: 'Azcapotzalco, CDMX',
        city: 'Ciudad de México',
        bedrooms: 2,
        bathrooms: 1,
        car: 1,
        area: 65,
        image: 'https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMTlhMGMxMS1iMjUwLTdjOWUtYjViZS0zNjhlOWIwY2EyM2MvODlhNzEyMzI1MTUwZDFkNTE1OWQzODYzMWUzYTQxYzM1YmVhOWZiNjQwYjI1Mzk3MDhkZGQxNjE2ODc2YWM3NC5qcGVnIiwiYnJhbmQiOiJ0cm92aXQiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjI3MCwiZml0IjoiY292ZXIifX19',
        description: 'Departamento en colonia Cosmopolita en la delegación Azcapotzalco.',
    },
    {
        id: '6',
        title: 'Tiepolo 15',
        type: 'departamento',
        price: 3220000,
        location: 'Ciudad de los Deportes, CDMX',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 2,
        car: 2,
        area: 149,
        image: 'https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTllZjUxLWJjNWMtNzVkYi05Yzk1LTc5OGYzNzAxMDM4MC8wMTk5ZWY1NS00ZGI0LTcwMGQtOGE2Yy0wZjkzN2IzYzc3ZjkucG5nIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo4NDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=',
        description: 'Departamento en una de las colonias de alta plusvalia en CDMX, con gran seguridad y conectividad con las avenidas mas importantes de la ciudad.',
    },
    {
        id: '7',
        title: 'Carr. México-Toluca 5238',
        type: 'departamento',
        price: 4950000,
        location: 'Cuajimalpa, CDMX',
        city: 'Ciudad de México',
        bedrooms: 4,
        bathrooms: 3.5,
        car: 3,
        area: 284,
        image: 'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk3ZDU2LWQ0OWQtNzcyNi04NDNlLTI0Mzg5OTBiYjI0ZS8wMTk5N2Q2Ni0zNzQ4LTcwMDctOGUxNS1lYTI4Y2E3MjQ1OTUucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzgyLCJoZWlnaHQiOjMwMCwiZml0IjoiY292ZXIifX19',
        description: 'Hermoso departamento en el Yaqui, Cuajimalpa, a un excelente precio de oportunidad',
    },
    {
        id: '8',
        title: 'Dr. Olvera 71',
        type: 'departamento',
        price: 785000,
        location: 'Doctores, CDMX',
        city: 'Ciudad de México',
        bedrooms: 2,
        bathrooms: 1,
        car: 1,
        area: 67,
        image: 'https://img10.naventcdn.com/avisos/18/01/47/35/93/84/720x532/1554399416.jpg?isFirstImage=true',
        description: 'Bonito departamento cerca del centro historico de la CDMX',
    },
    {
        id: '9',
        title: 'Schuman 117, Fracc. Occidente Nte.',
        type: 'departamento',
        price: 680000,
        location: 'Gustavo A. Madero, CDMX',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 1.5,
        car: 1,
        area: 86,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_626584-MLM90176758606_082025-N-gran-oferta-de-venta-de-departamento-en-cdmx-gustavo-a-madero-vallejo-calzada-de-los-misterias-excelente-ubicacion-zona-comercial-ams3.webp',
        description: 'Excelente departamento en el corazon de Vallejo con excelente conectividad a principales avenidas.',
    },
    {
        id: '10',
        title: 'Hacienda del Ciervo 8',
        type: 'departamento',
        price: 3320000,
        location: 'Huixquilucan, Estado de México',
        city: 'Estado de México',
        bedrooms: 4,
        bathrooms: 3.5,
        car: 3,
        area: 285,
        image: 'https://propiedadescom.s3.amazonaws.com/files/600x400/hacienda-el-ciervo-8-hacienda-de-las-palmas-huixquilucan-mexico-3987577-foto-01.jpg',
        description: 'Departamento de lujo con excelentes vista de huixquilucan',
    },
    {
        id: '11',
        title: 'Penthouse en Huixquilucan',
        type: 'penthouse',
        price: 2820000,
        location: 'Huixquilucan, Edo. Mex.',
        city: 'Estado de México',
        bedrooms: 3,
        bathrooms: 2.5,
        car: 2,
        area: 210,
        image: 'https://http2.mlstatic.com/D_NQ_NP_729955-MLM96958260519_112025-O-gran-casa-lujosa-en-venta-en-economia-63-lomas-anahuac-naucalpan-de-juarez-edomex.webp',
        description: 'Amplio y hermoso departamento Penthouse con bodega y 2 lugares de estacionamiento',
    },
    {
        id: '12',
        title: 'Calzada México-Tacuba 94',
        type: 'departamento',
        price: 1225000,
        location: 'Miguel Hidalgo, CDMX',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 1.5,
        car: 1,
        area: 82,
        image: 'https://img10.naventcdn.com/avisos/18/01/48/15/04/17/1200x1200/1571378715.jpg?isFirstImage=true',
        description: 'Bonito departamento muy cerca de zona Polanco',
    },
    {
        id:'13',
        title: 'Cto. Hacienda las Carretas Lt 94 Mz48',
        type: 'casa',
        price: 915000,
        location: 'Toluca, Edo. Mex.',
        city: 'Estado de México',
        bedrooms: 3,
        bathrooms: 1.5,
        car: 1,
        area: 90,
        image: 'https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTQ4ZjlhLTZmZWQtNzExZi1iNTVlLWQyZjgxNzM3NjNmNC8wMTk0OGY5YS05ZTk1LTcxOTYtODFiMy00MWY2ODljNDdhNWQucG5nIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=',
        description: 'Bonita casa en el gran Fraccionamiento Hacienda Del Valle',  
    },
     {
        id:'14',
        title: 'Encinos 124',
        type: 'casa',
        price: 1945000,
        location: 'Tlalpan, CDMX.',
        city: 'Ciudad de México',
        bedrooms: 4,
        bathrooms: 3,
        car: 3,
        area: 250,
        image: 'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTlmOGUyLWZmODAtNzdiNS05ZjI3LWUyZDRhZmI3ZGM5NC8wMTk5ZjhlNC1hMDFjLTcyMjYtYjM2Mi1jM2JiZWM3NmVlMjEucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIzMCwiZml0IjoiY292ZXIifX19',
        description: 'Bonita casa en el gran Fraccionamiento Paseos del Ajusco',  
    },
     {
        id:'15',
        title: 'Gral. Chiladi 30',
        type: 'departamento',
        price: 2131000,
        location: 'Miguel Hidalgo, CDMX.',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 1.5,
        car: 1,
        area: 84,
        image: 'https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NhZGMxNDVhLTVlYzEtNDMxNy1hNTY3LWU4NDAwZDQ0NzM0OC9hNzAxNjU4Yi01ZDJkLTRmZjEtOGI0My03OThkYzYxMDVlZDcucG5nIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo4NDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=',
        description: 'Excelente departamento en la colonia Observatorio',  
    },
       {
        id:'16',
        title: 'Joaquin Garcia Icazbalceta 66',
        type: 'departamento',
        price: 872000,
        location: 'Cuauhtemoc, CDMX.',
        city: 'Ciudad de México',
        bedrooms: 2,
        bathrooms: 1.5,
        car: 1,
        area: 77,
        image: 'https://img10.naventcdn.com/avisos/resize/18/01/46/73/19/67/720x532/1539126561.jpg?isFirstImage=true',
        description: 'Excelente departamento en la colonia Observatorio',  
    },
];

// Variables de filtro
let currentFilters = {
    city: 'all',
    type: 'all',
    priceRange: 'all'
};

// Formatear precio en pesos mexicanos
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    }).format(price);
}

// Obtener etiqueta del tipo de propiedad
function getTypeLabel(type) {
    const labels = {
        departamento: 'Departamento',
        casa: 'Casa',
        local: 'Local',
        edificio: 'Edificio',
        penthouse: 'Penthouse',
    };
    return labels[type] || type;
}

// Crear tarjeta de propiedad
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    
    const bedroomsHTML = property.bedrooms > 0 ? `
        <div class="property-feature">
            <i class="fa-solid fa-bed"></i>
            <span>${property.bedrooms}</span>
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="property-image-container">
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <div class="property-badges">
                <span class="badge badge-primary">${getTypeLabel(property.type)}</span>
                <span class="badge badge-secondary">
                    <i class="fa-solid fa-gavel"></i>
                    Recuperación
                </span>
            </div>
        </div>
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <div class="property-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${property.location}</span>
            </div>
            <div class="property-price">${formatPrice(property.price)}</div>
            <div class="property-features">
                ${bedroomsHTML}

                <div class="property-feature">
                    <i class="fa-solid fa-toilet"></i>
                    <span>${property.bathrooms}</span>
                </div>

                <div class="property-feature">
                    <i class="fa-solid fa-car"></i>
                    <span>${property.car}</span>
                </div>

                <div class="property-feature">
                     <i class="fa-solid fa-expand"></i>
                    <span>${property.area} m²</span>
                </div>
            </div>
            <p class="property-description">${property.description}</p>
            <a href="https://maps.app.goo.gl/9L79jYpYWi1SfFY98">
            <button class="btn btn-primary btn-full">Ver detalles</button>
            </a>
        </div>
    `;
    
    return card;
}

// Filtrar propiedades
function filterProperties() {
    let filtered = [...properties];
    
    // Filtrar por ciudad
    if (currentFilters.city !== 'all') {
        filtered = filtered.filter(p => p.city === currentFilters.city);
    }
    
    // Filtrar por tipo
    if (currentFilters.type !== 'all') {
        filtered = filtered.filter(p => p.type === currentFilters.type);
    }
    
    // Filtrar por precio
    if (currentFilters.priceRange !== 'all') {
        const [min, max] = currentFilters.priceRange.split('-').map(Number);
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            }
            return p.price >= min;
        });
    }
    
    return filtered;
}

// Renderizar propiedades
function renderProperties() {
    const grid = document.getElementById('propertyGrid');
    const noResults = document.getElementById('noResults');
    const countElement = document.querySelector('.count-number');
    
    const filtered = filterProperties();
    
    // Actualizar contador
    countElement.textContent = filtered.length;
    
    // Limpiar grid
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        filtered.forEach(property => {
            const card = createPropertyCard(property);
            grid.appendChild(card);
        });
    }
}

// Poblar filtro de ciudades
function populateCityFilter() {
    const cityFilter = document.getElementById('cityFilter');
    const cities = [...new Set(properties.map(p => p.city))].sort();
    
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

// Inicializar event listeners
function initEventListeners() {
    const cityFilter = document.getElementById('cityFilter');
    const typeFilter = document.getElementById('typeFilter');
    const priceFilter = document.getElementById('priceFilter');
    const resetBtn = document.getElementById('resetBtn');
    
    cityFilter.addEventListener('change', (e) => {
        currentFilters.city = e.target.value;
        renderProperties();
    });
    
    typeFilter.addEventListener('change', (e) => {
        currentFilters.type = e.target.value;
        renderProperties();
    });
    
    priceFilter.addEventListener('change', (e) => {
        currentFilters.priceRange = e.target.value;
        renderProperties();
    });
    
    resetBtn.addEventListener('click', () => {
        currentFilters = {
            city: 'all',
            type: 'all',
            priceRange: 'all'
        };
        cityFilter.value = 'all';
        typeFilter.value = 'all';
        priceFilter.value = 'all';
        renderProperties();
    });
}

// Inicializar aplicación
function init() {
    populateCityFilter();
    initEventListeners();
    renderProperties();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
