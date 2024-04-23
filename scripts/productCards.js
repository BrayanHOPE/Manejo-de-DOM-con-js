
function createCard(product) {
    return `<a class="product-card" href="./details.html"><img class="product-img" src="${product.imagen}" alt="${product.id}"/><div class="product-info"><span class="product-title">${product.title}</span><span class="product-description">${product.subtitle}</span><div class="product-price-block"><span class="product-price">${product.price}</span><span class="product-discount">${product.descuento}</span></div><div class="product-tax-policy">${product.afip}</div></div></a>`;
    }

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
    }
    printCards(products, "products");

    