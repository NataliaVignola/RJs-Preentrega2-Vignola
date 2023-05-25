const products = [
    {
        id: '1',
        name: 'Recibidor Chapas',
        price: 3500,
        category: 'Muebles',
        img: "./components/Img/RecibidorChapa.jpg",
        stock: 10,
        description: 'Recibidor 3 estantes de chapa y estructura de caño'
    },
    { id: '2', name: 'Estantería Rejilla', price: 2800, category: 'Muebles', img: "./components/Img/EstanteriaRejilla.jpg", stock: 15, description: 'Estantería organizadora de caño y malla'},
    { id: '3', name: 'Espejo Formas', price: 2200, category: 'Deco', img: "./components/Img/EspejoFormas.jpg", stock: 5, description: 'Espejo de cuerpo entero fabricado en chapa plegada'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}