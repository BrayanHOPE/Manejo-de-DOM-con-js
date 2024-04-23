// const product = [
//     {imagen: "./assets/mock1.jpg", title: "macbook Pro 15'4", subtitle: "Space gray", price: "$750.000", descuento: "%50 Off", afip: "Incluye impuestos Pais y percepcion AFIP"}
// ]
class product {
constructor(id,imagen,title,subtitle,price,descuento,afip){
    this.id=id;
    this.imagen = imagen;
    this.title = title;
    this.subtitle = subtitle;
    this. price = price;
    this.descuento = descuento;
    this.afip = afip;
}
}

const products = [
    new product(
        "1",
        "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
        "macbook Pro 15'4",
        "Space gray",
        "$750.000",
        "%50 Off",
        "Incluye impuestos Pais y percepcion AFIP"
    )
];
const products2 = [
    new product(
        "2",
        "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
        "macbook Pro 15'4",
        "Space gray",
        "$750.000",
        "%50 Off",
        "Incluye impuestos Pais y percepcion AFIP"
    )
];
const products3 = [
    new product(
        "1",
        "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
        "macbook Pro 15'4",
        "Space gray",
        "$750.000",
        "%50 Off",
        "Incluye impuestos Pais y percepcion AFIP"
    )
];

console.log(products);
