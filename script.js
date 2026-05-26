document.addEventListener('DOMContentLoaded', () => {
    // Lista de productos de ejemplo. En una aplicación real, vendrían de una base de datos.
    const products = [
        // GNV/GLP
        { id: 31, name: 'Kit Conversión 5ta Generacion', price: 350.00, originalPrice: 450.00, sold: 500, rating: 4.9, category: 'gnv', image: 'kit%20de%20quinta%20generacion%20aeb.avif' },
        { id: 32, name: 'Tanque Toroidal', price: 120.00, originalPrice: 150.00, sold: 300, rating: 4.8, category: 'gnv', image: 'tanque%20toroidal.jpg' },
        { id: 33, name: 'Toma de Carga Interna', price: 25.00, originalPrice: 35.00, sold: 800, rating: 4.7, category: 'gnv', image: 'toma%20de%20carga%20especial.jpg' },
        { id: 34, name: 'Filtro de Gas GNV', price: 10.00, originalPrice: 15.00, sold: 2000, rating: 4.6, category: 'gnv', image: 'filtro%20de%20gas.avif' },
        { id: 35, name: 'Computadora AEB 48 Pines', price: 45.00, originalPrice: 60.00, sold: 400, rating: 4.8, category: 'gnv', image: 'computdora%20aeb%2048%20pines.webp' },
        { id: 36, name: 'Reductor de 5ta generacion GLP', price: 80.00, originalPrice: 110.00, sold: 600, rating: 4.7, category: 'gnv', image: 'gasificador%205ta%20glp.avif' },
        { id: 37, name: 'Multiválvula', price: 55.00, originalPrice: 70.00, sold: 350, rating: 4.5, category: 'gnv', image: 'multivalvula.jfif' },
        { id: 38, name: 'Manómetro Auge 806', price: 15.00, originalPrice: 22.00, sold: 900, rating: 4.6, category: 'gnv', image: 'manometro.png' },
        { id: 39, name: 'Riel de Inyectores IG07', price: 60.00, originalPrice: 85.00, sold: 450, rating: 4.8, category: 'gnv', image: 'riel%20de%20inyectores%20IG07.jfif' },
        { id: 40, name: 'Sensor Map AEB 5 Pines', price: 18.00, originalPrice: 25.00, sold: 1200, rating: 4.7, category: 'gnv', image: 'map%20aeb%205%20pines.webp' },
        { id: 52, name: 'Sensor de Temperatura GNV/GLP', price: 14.00, originalPrice: 20.00, sold: 1500, rating: 4.6, category: 'gnv', image: 'sensor%20de%20temperatura%20gas.jfif' },
        { id: 53, name: 'Conmutador GNV/GLP', price: 30.00, originalPrice: 40.00, sold: 700, rating: 4.7, category: 'gnv', image: 'conmutador%20gnv.jfif' },

        // Gasolina
        { id: 51, name: 'Bobina de Encendido Kia / Hyundai', price: 120.00, originalPrice: 40.00, sold: 500, rating: 4.7, category: 'gasolina', image: 'bobina%20de%20encendido%20kia%20carens.jfif' },
        { id: 41, name: 'Sensor Map chevrolet', price: 70.00, originalPrice: 20.00, sold: 5000, rating: 4.8, category: 'gasolina', image: 'map%20chevrolet%20n300.jpeg' },
        { id: 42, name: 'Conectores Automotriz', price: 22.00, originalPrice: 30.00, sold: 1500, rating: 4.7, category: 'gasolina', image: 'conectores%20automotrices.webp' },
        { id: 43, name: 'Orines de Inyectores y Microfiltros', price: 45.00, originalPrice: 60.00, sold: 2800, rating: 4.9, category: 'gasolina', image: 'orrines%20de%20inyectores%20y%20micro%20filtro.jpg' },
        { id: 44, name: 'Bomba de Gasolina', price: 12.99, originalPrice: 18.00, sold: 3200, rating: 4.6, category: 'gasolina', image: 'bomba%20de%20gasolina.jfif' },
        { id: 45, name: 'Inyectores de Gasolina', price: 18.00, originalPrice: 18.00, sold: 3200, rating: 4.7, category: 'gasolina', image: 'inyector%20de%20gasolina.webp' },
        { id: 46, name: 'Sensor TPS', price: 9.50, originalPrice: 14.00, sold: 6000, rating: 4.8, category: 'gasolina', image: 'sensor%20tps.png' },
        { id: 47, name: 'Bujias de Encendido', price: 35.00, originalPrice: 50.00, sold: 1100, rating: 4.7, category: 'gasolina', image: 'bujias%20de%20encendido.jpg' },
        { id: 48, name: 'Cables de Bujias', price: 40.00, originalPrice: 55.00, sold: 1900, rating: 4.9, category: 'gasolina', image: 'cables%20de%20bujias.jfif' },
        { id: 49, name: 'Sensor de Oxigeno', price: 13.00, originalPrice: 19.00, sold: 800, rating: 4.6, category: 'gasolina', image: 'sensor%20de%20oxigeno.webp' },
        { id: 50, name: 'Sensor de Cigueñal', price: 16.99, originalPrice: 24.00, sold: 2500, rating: 4.8, category: 'gasolina', image: 'sensor%20de%20cigueñal.jpg' },
        { id: 54, name: 'Sensor de eje de Levas', price: 15.00, originalPrice: 20.00, sold: 1800, rating: 4.7, category: 'gasolina', image: 'sensor%20de%20eje%20de%20levas.jpg' }
    ];

    const autosList = document.getElementById('autos-list');
    const gnvList = document.getElementById('gnv-list');
    const gasolinaList = document.getElementById('gasolina-list');
    const searchInput = document.getElementById('search-input');

    // Función para mostrar los productos en la página
    function renderProducts(productsToRender) {
        autosList.innerHTML = '';
        gnvList.innerHTML = '';
        gasolinaList.innerHTML = '';

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div style="text-align: center; margin-top: 10px;">
                    <a href="https://wa.me/51901939637?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.name)}" target="_blank" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Consulta</a>
                </div>
            `;
            
            if (product.category === 'autos') {
                autosList.appendChild(productCard);
            } else if (product.category === 'gnv') {
                gnvList.appendChild(productCard);
            } else if (product.category === 'gasolina') {
                gasolinaList.appendChild(productCard);
            }
        });
    }

    // Escuchar eventos en el input de búsqueda
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // Carga inicial de productos
    renderProducts(products);
});