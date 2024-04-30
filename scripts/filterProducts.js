
const $productList = document.getElementById("products")
const $inputSearch = document.getElementById('search')

class Product {
  //constructor
  constructor(id, title, price, stock, photo, onsale, supplier, colors, description, taxPolicy) {
      this.id = id;
      this.title = title ;
      this.price = price;
      this.stock = stock;
      this.photo = photo;
      this.onsale = onsale;
      //Atributo privado
      this._supplier = supplier;
      //Array de colores
      this.colors = colors;
      //Descripción
      this.description = description;
      //Política de impuestos
      this.taxPolicy = taxPolicy;
  }


  //metodos getter y setter del atributo privado
  get supplier() {
      return this._supplier;
  }

  set supplier(newSupplier) {
      this._supplier = newSupplier;
  }

}

const card = (product) => {
  const { id,photo, title, colors, price, onsale, taxPolicy } = product
  return `
    <a class="product-card" href="./details.html?id=${id}">
          <img
            class="product-img"
            src="${photo[0]}"
            alt="${title.toUpperCase()}"
          />
          <div class="product-info">
            <span class="product-title">${title}</span>
            <span class="product-description">${colors}</span>
            <div class="product-price-block">
              <span class="product-price">${price}</span>
              <span class="product-discount">${onsale}% Off</span>
            </div>
            <div class="product-tax-policy">
            ${taxPolicy}
            </div>
          </div>
        </a>
  `
}

const handleSearchProduct = (event, productsList) => {
  const valueInputSearch = event.target.value
  const filterProducts = productsList.filter((product) => {
    return product.title.toLowerCase().includes(valueInputSearch.toLowerCase())
  })
  return filterProducts
}

let products = [
  new Product("001", "Macbook Pro 15'4", 750000, 20, ["./assets/mock2.jpg", "./assets/mock1.jpg", "./assets/mock2.jpg"], "50% Off", "Mac", ["black","white"], "Space Gray", "Incluye impuesto País y percepción AFIP"),
  new Product("002", "Havit HV-MS801", 30, 20, ["./assets/mock1.jpg", "./assets/MouseGaming2.jpeg", "./assets/MouseGaming3.jpeg"], "50% Off", "Havit", ["black","white"], "Havit Computer and Laptop accessories brings to you the world of computing at your fingertips. Browse through our huge collection and add that elusive item to your PC unit that you have been searching for long. Interface Type: USB Product size?123*76*40MM net weight?115g The Number of Key:6 keys Image processing: 3000 FPS Resolutin: 800-1200-1600-2400DPI Key Life:3,000,000 Cable Length:1.6m Operating Voltage: 5V", "Incluye impuesto País y percepción AFIP"),
  new Product("003", "K616 Fizz Rgb Pro", 99, 20, ["./assets/mock1.jpg", "./assets/teclado2.jpeg", "./assets/3teclado2.jpeg"], "50% Off", "Redragon", ["Blanco","Rosado", "Lila"], "El K616-RGB FIZZ PRO te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico de 2,4 GHz, 0 latencia y 0 input lag. Además, permite conexión a través de Bluetooth 5.0 con una velocidad de transmisión de hasta 2 Mbps, manteniendo siempre al mínimo las pérdidas. Gracias a su diseño compacto 60% y a su práctico cable desmontable, el K616-RGB FIZZ PRO te permitirá ganar más espacio para el mouse en donde quiera que decidas iniciar tus partidas. Prepárate para ser invencible, a tu estilo", "Incluye impuesto País y percepción AFIP"),
  new Product("004", "Macbook Pro 15'4", 15000, 20, ["./assets/mock2.jpg", "./assets/mock2.jpg", "./assets/mock2.jpg"], "50% Off", "Mac", ["black","white"], "Space Gray", "Incluye impuesto País y percepción AFIP"),
  new Product("005", "Macbook Pro 15'4", 15, 20, ["./assets/mock2.jpg", "./assets/mock2.jpg", "./assets/mock2.jpg"], "50% Off", "Mac", ["black","white"], "Space Gray", "Incluye impuesto País y percepción AFIP"),
  new Product("006", "Macbook Pro 15'4", 55, 20, ["./assets/mock2.jpg", "./assets/mock2.jpg" , "./assets/mock2.jpg"], "50% Off", "Mac", ["black","white"], "Space Gray", "Incluye impuesto País y percepción AFIP"),
  
]

const loadProducts = (productsList) => {
  for (const product of productsList) {
    $productList.innerHTML += card(product)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts(products)
})

$inputSearch.addEventListener('keyup', (event) => {
  $productList.innerHTML = ''
  const filteredProductList = handleSearchProduct(event, products)
  loadProducts(filteredProductList)
})
