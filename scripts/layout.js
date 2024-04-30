const navSelector = document.getElementById("nav");
const options = [
    {title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"]},
    {title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envíos", "Devoluciones"]},
    {title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturacion"]},
    {title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"]},
    {title: "Garantía", linkTo: "./warranty.html", opts: [""]},
]

for (let option of options) {
    const anchor = document.createElement("a")
    anchor.className = "nav-a"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)
    }

    const footerSelector = document.querySelector("#footer");

    //iteracion con un for of
    for (let option of options) {
        //crear un elemento
        let anchor = document.createElement("ul");
        //asignarle un nombre de clase
        anchor.className = "footer-ul";
        //agregar un il
        let li = document.createElement("li");
        //asignarle una clase
        li.className = "footer-main-item";
        //crear una etiqueta a
        let a = document.createElement("a");
        //asignarle un nombre de clase
        a.className = "footer-a";
        //asignarle un texto
        a.textContent = option.title;
        //asignarle un href
        a.href = option.linkTo;
    
        //agregar al li
        li.appendChild(a);
        //agregar a la ul
        anchor.appendChild(li);
    
        //iteracion con un for of
        for (let opt of option.opts) {
            //crear un li
            let li = document.createElement("li");
            //asignarle una clase
            li.className = "footer-li";
            //crear una etiqueta a
            let a = document.createElement("a");
            //asignarle un nombre de clase
            a.className = "footer-a";
            //asignarle un texto
            a.textContent = opt;
            //agregar al li
            li.appendChild(a);
            //agregar a la ul
            anchor.appendChild(li);
        }
    
        //agregar un hijo
        footerSelector.appendChild(anchor);
    }