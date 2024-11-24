const productos = [
    {
        nombre: "iPhone 14",
        precio: 999,
        imagen: "https://phonebox.com.mt/wp-content/uploads/2022/10/0021391_iphone-14.jpeg"
    },
    {
        nombre: "Samsung Galaxy S22",
        precio: 799,
        imagen: "https://supercells.co.za/wp-content/uploads/2022/05/samsung-galaxy-S22-Pink-Gold.jpg"
    },
    {
        nombre: "Samsung Galaxy Z Flip",
        precio: 999,
        imagen: "https://www.trikart.com/media/catalog/product/cache/6cfda23da03ec60c960b8e742d529ef1/z/f/zflip4.jpg"
    },
    {
        nombre: "Xiaomi 12",
        precio: 649,
        imagen: "https://miro.medium.com/max/1000/1*t5nI4V-TwZjqLFTMYwFf5g.jpeg"
    },
    {
        nombre: "Oppo Find X5 Pro",
        precio: 899,
        imagen: "https://cdn.mos.cms.futurecdn.net/qntWRvncaVJFuX3T4rbngk-970-80.jpg"
    },
    {
        nombre: "Huawei P50 Pro",
        precio: 949,
        imagen: "https://consumer.huawei.com/en/phones/p50-pro/images/design.jpg"
    },
    {
        nombre: "Google Pixel 7",
        precio: 599,
        imagen: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2022/10/pixel-7-front.jpeg"
    }
];

const catalogo = document.getElementById('catalogo');

productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <div class="price">Precio: $${producto.precio}</div>
        <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
    `;
    catalogo.appendChild(div);
});

function agregarCarrito(nombre, precio, imagen) {
    // Obtiene el carrito actual desde localStorage, o crea un array vacío si no existe.
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agrega el producto al carrito
    carrito.push({ nombre, precio, imagen });

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Muestra un mensaje indicando que el producto se ha agregado
    alert(`El producto ${nombre} se ha agregado al carrito.`);
}
function mostrarCarrito() {
    // Recupera el carrito de localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Si el carrito está vacío
    if (carrito.length === 0) {
        document.getElementById('carrito').innerHTML = '<p>No tienes productos en el carrito.</p>';
    } else {
        let carritoHTML = '';
        
        // Recorre todos los productos del carrito y los muestra
        carrito.forEach(producto => {
            carritoHTML += `
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                </div>
            `;
        });

        // Inserta el HTML generado en el contenedor de carrito
        document.getElementById('carrito').innerHTML = carritoHTML;
    }
}

// Llama a la función para mostrar el carrito cuando se carga la página
window.onload = mostrarCarrito;
