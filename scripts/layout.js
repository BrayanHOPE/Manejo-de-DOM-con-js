const navSelector = document.getElementById("nav");
const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Cómo comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantía", linkTo: "./warranty.html" },
];

for (let option of options) {
    const anchor = document.createElement("a")
    anchor.className = "nav-a"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)
    }


// const footerSelector = document.querySelector("#footer");

// const columns = [
//     { title: "Ofertas", opts: ["Laptops", "Audio", "Auticulares"] },
//     { title: "Como comprar", opts: ["Formas de pago", "Envios", "Devoluciones"] },
//     { title: "Costos y tarifas", opts: ["Impuestos", "Facturacion"] },
//     { title: "Mis pedidos", opts: ["Perdir Nuevamente", "Lista de deseos"] },
//     { title: "Grarantia", opts: [] },
//     ];

//     for (let column of columns) {
//     // Crear un elemento de lista principal
//     const ulMain = document.createElement("ul");
//     ulMain.className = "footer-ul";
//     const liMain = document.createElement("li");
//     liMain.className = "footer-main-item";
    
//     // Crear el enlace principal con el título de la columna
//     const aMain = document.createElement("a");
//     aMain.className = "footer-a";
//     aMain.textContent = column.title;

//     liMain.appendChild(aMain);
//     ulMain.appendChild(liMain)

//     if (column.opts.length > 0) {
//         // Crear una lista desordenada para las opciones
//         const ulSub = document.createElement("ul");
//         ulSub.className = "footer-ul";

//         // Iterar sobre las opciones y crear elementos de lista secundarios con enlaces
//         for (let opt of column.opts) {
//             if (opt !== "") {
//                 const liSub = document.createElement("li");
//                 liSub.className = "footer-li";
                
//                 const aSub = document.createElement("a");
//                 aSub.className = "footer-a";
//                 aSub.textContent = opt;
                
//                 liSub.appendChild(aSub); // Agregar el enlace de opción al elemento de lista secundario
//                 ulSub.appendChild(liSub); // Agregar el elemento de lista secundario a la lista desordenada
//             }
//         }

//         // Agregar la lista desordenada de opciones como subelemento del elemento de lista principal
//         ulMain.appendChild(ulSub);
//     }
    
//     // Agregar el elemento de lista principal al pie de página
//     footerSelector.appendChild(ulMain);
// }

        
    