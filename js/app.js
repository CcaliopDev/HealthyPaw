const nombrePerro = document.getElementById('perro__nombre')
const pesoPerro = document.getElementById('perro__peso')
const edadPerro = document.getElementById('perro__edad')
const calcularPerro = document.getElementById('perro__calcular')

const nombreGato = document.getElementById('gato__nombre')
const tipoGato = document.getElementById('gato__tipo')
const pesoGato = document.getElementById('gato__peso')
const edadGato = document.getElementById('gato__edad')
const calcularGato = document.getElementById('gato__calcular')

const contenedorPerro = document.getElementById('productos__perros')
const contenedorGato = document.getElementById('productos__gatos')

const ordenPerro = document.getElementById('orden__perro')
const filtroPerro = document.getElementById('filtrar__perros')
const ordenGato = document.getElementById('orden__gato')
const filtroGato = document.getElementById('filtrar__gatos')

const searchField = document.querySelector('#search')
const searchButton = document.querySelector('#searchButton')
const buscadoContenedor = document.getElementById('buscadosContenido')
const buscadosArticle = document.getElementById('buscados')

const carritoContenedor = document.getElementById('carrito__contenedor')
const mainTag = document.getElementById('main')

let contadorId = 0
let comidas = []
let comidaGatos = []
let comidaPerros = []
let busqueda = []
let carrito = []
carrito = JSON.parse(localStorage.getItem('carrito')) || []

calcularGato.addEventListener('click', (e) => {
  e.preventDefault()
  const mensaje = funcionGato()
  Swal.fire({
    title: mensaje,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  })
})

const funcionGato = () => {
  let nombre = nombreGato.value
  let tipo = tipoGato.value
  let peso = pesoGato.value
  let edad = edadGato.value
  let mensaje = ''
  let pesoKilos = peso / 1000

  if (edad < 6) {
    mensaje =
      nombre +
      ` Necesita una racion de ${parseInt(pesoKilos * 0.1 * 1000)} gr/dia`
  } else {
    switch (tipo) {
      case 'casero':
        mensaje =
          nombre + ` Necesita una racion de ${pesoKilos * 0.03 * 1000} gr/dia`

        break
      case 'explorador':
        mensaje =
          nombre + ` Necesita una racion de ${pesoKilos * 0.06 * 1000} gr/dia`

        break

      default:
        mensaje = nombre + ' Tipo ingresado incorrecto'
        break
    }
  }
  return mensaje
}

calcularPerro.addEventListener('click', (e) => {
  e.preventDefault()
  const mensaje = funcionPerro()
  Swal.fire({
    title: mensaje,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  })
})

const funcionPerro = () => {
  let nombre = nombrePerro.value
  let peso = pesoPerro.value
  let edad = edadPerro.value
  let mensaje = ''
  if (peso <= 1200) {
    if (edad <= 3) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 25 a 240 gr de racion de cachorro por dia'
    } else if (edad <= 5) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 40 a 280 gr de racion de cachorro por dia'
    } else if (edad <= 8) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 45 a 290 gr de racion de cachorro por dia'
    } else if (edad <= 12) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 40 a 130 gr de racion de adulto por dia'
    } else {
      mensaje =
        nombre +
        ' Necesita una racion de entre 100 a 180 gr de racion de adulto por dia'
    }
  } else if (peso <= 4500) {
    if (edad <= 3) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 130 a 590 gr de racion de cachorro por dia'
    } else if (edad <= 5) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 240 a 760 gr de racion de cachorro por dia'
    } else if (edad <= 8) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 280 a 840 gr de racion de cachorro por dia'
    } else if (edad <= 12) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 290 a 700 gr de racion de cachorro por dia'
    } else {
      mensaje =
        nombre +
        ' Necesita una racion de entre 320 a 500 gr de racion de adulto por dia'
    }
  } else {
    if (edad <= 3) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 280 a 700 gr de racion de cachorro por dia'
    } else if (edad <= 5) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 590 a 1020 gr de racion de cachorro por dia'
    } else if (edad <= 8) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 760 a 1100 gr de racion de cachorro por dia'
    } else if (edad <= 12) {
      mensaje =
        nombre +
        ' Necesita una racion de entre 840 a 1100 gr de racion de cachorro por dia'
    } else {
      mensaje =
        nombre +
        ' Necesita una racion de entre 500 a 700 gr de racion de adulto por dia'
    }
  }
  return mensaje
}

filtroPerro.addEventListener('click', (e) => {
  e.preventDefault()
  let orden = ordenPerro.value
  const filtrado = comidaPerros.sort((a, b) =>
    orden == 'menor' ? a.precio - b.precio : b.precio - a.precio,
  )
  contenedorPerro.innerHTML = ''
  filtrado.forEach((comida) => {
    contenedorPerro.appendChild(plantillaComida(comida))
  })
})

filtroGato.addEventListener('click', (e) => {
  e.preventDefault()
  let orden = ordenGato.value
  const filtrado = comidaGatos.sort((a, b) =>
    orden == 'menor' ? a.precio - b.precio : b.precio - a.precio,
  )
  contenedorGato.innerHTML = ''
  filtrado.forEach((comida) => {
    contenedorGato.appendChild(plantillaComida(comida))
  })
})

searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  const name = searchField.value
  busqueda = []
  comidas.forEach((e) => {
    if (e.nombre.toLowerCase().includes(name.toLowerCase()) && name != '') {
      busqueda.push(e)
    }
  })
  buscadoContenedor.innerHTML = ''
  buscadosArticle.classList.remove('hidden')
  if (busqueda.length >= 1) {
    busqueda.forEach((e) => {
      buscadoContenedor.appendChild(plantillaComida(e))
    })
  } else {
    buscadoContenedor.innerText = 'No existe'
  }
  location.hash = '#' + 'buscados'
})

mainTag.addEventListener('click', (event) => {
  event.preventDefault()

  if (
    event.target &&
    event.target.tagName === 'A' &&
    event.target.classList.contains('card__link')
  ) {
    const element = event.target.getAttribute('data-id')
    if (!carrito.find((el) => el.id == element)) {
      console.log(element)
      carrito.push(comidas.find((el) => el.id == element))
      localStorage.setItem('carrito', JSON.stringify(carrito))
      carritoContenedor.innerHTML = ''
      for (const prop of carrito) {
        carritoContenedor.appendChild(plantillaCarrito(prop))
      }
      Toastify({
        text: 'Articulo añadido al carrito',
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    } else {
      Toastify({
        text: 'Articulo ya esta en el carrito',
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    }
  }
})

carritoContenedor.addEventListener('click', (event) => {
  event.preventDefault()

  if (
    event.target &&
    event.target.tagName === 'A' &&
    event.target.classList.contains('carrito__link')
  ) {
    const element = event.target.getAttribute('data-id')
    carrito = carrito.filter((e) => e.id != element)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    carritoContenedor.innerHTML = ''
    for (const prop of carrito) {
      carritoContenedor.appendChild(plantillaCarrito(prop))
    }
    Toastify({
      text: 'Articulo eliminado del carrito',
      duration: 3000,
      destination: 'https://github.com/apvarun/toastify-js',
      newWindow: true,
      close: true,
      gravity: 'bottom', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
      onClick: function () {}, // Callback after click
    }).showToast()
  }
})

const plantillaComida = ({ id, img, nombre, descripcion, precio }) => {
  let elemento = document.createElement('div')
  elemento.className = 'card col-4'
  elemento.setAttribute('id', `${id}`)
  elemento.innerHTML = `<img src="${img}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">
                                ${descripcion}
                            </p>
                            <p class="card-text">
                                $${precio}
                            </p>
                            <a href="#" data-id=${id} class="card__link btn btn-primary">
                            Añadir al carrito
                            </a>
                        </div>
                        `
  return elemento
}

const plantillaCarrito = ({ id, img, nombre, descripcion, precio }) => {
  let elemento = document.createElement('div')
  elemento.className = 'card col-4'
  elemento.setAttribute('id', `${id}`)
  elemento.innerHTML = `<img src="${img}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">
                                ${descripcion}
                            </p>
                            <p class="card-text">
                                $${precio}
                            </p>
                            <a href="#" data-id=${id} class="carrito__link btn btn-primary">
                            Eliminar
                            </a>
                        </div>
                        `
  return elemento
}

class Comida {
  constructor(nombre, descripcion, precio, img) {
    this.id = contadorId++
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
    this.img = img
  }
}

comidaPerros.push(
  new Comida(
    'Dog Chow cachorro 3kg',
    'Dog Chow cachorro Raza Pequeña 3kg',
    '490',
    'https://ccaliopdev.github.io/HealthyPaw/img/perro_dog-chow-cachorro-raza-pequena-3kg_600.jpeg',
  ),
)
comidaPerros.push(
  new Comida(
    'Dogui Carne Con Cereales & Aarroz 3KG.',
    'Alimento para perros adultos, formulado con carne , cereales y arroz.',
    '400',
    'https://ccaliopdev.github.io/HealthyPaw/img/perro_dogui-carne-con-cereales-arroz-3kg.jpeg',
  ),
)
comidaPerros.push(
  new Comida(
    'Nutrique Medium Young Adult Dog 3 KG',
    'Alimento preium para perros de raza mediana',
    '1315',
    'https://ccaliopdev.github.io/HealthyPaw/img/perro_nutrique-medium-young-adult-dog-3-kg_600.png',
  ),
)

comidaGatos.push(
  new Comida(
    'BALANCED ADULT EXCLUSIVE RECIPE CHICKEN AND RICE 9 KG',
    'Fórmula de gran palatabilidad con 37% de proteína de alta calidad que refuerza la vitalidad del gato adulto.',
    '1875',
    'https://ccaliopdev.github.io/HealthyPaw/img/gato_balanced-adult-exclusive-recipe-chicken-and-rice-9-kg.png',
  ),
)
comidaGatos.push(
  new Comida(
    'Equilibrio Gatos Adultos 1.5KG',
    'Alimento completo para gatos adultos',
    '550',
    'https://ccaliopdev.github.io/HealthyPaw/img/gato_equilibrio-gatos-adultos-15kg.jpeg',
  ),
)
comidaGatos.push(
  new Comida(
    'MAX Cat Buffet 1kg',
    ' Con MAX CAT BUFFET POLLO & VEGETALES, tu gato estará bien nutrido, feliz y lleno de energía.',
    '350',
    'https://ccaliopdev.github.io/HealthyPaw/img/gato_max-cat-buffet-1kg.jpeg',
  ),
)

comidas = [...comidaGatos, ...comidaPerros]
console.log(comidas)

contenedorPerro.innerHTML = ''
comidaPerros.forEach((comida) => {
  contenedorPerro.appendChild(plantillaComida(comida))
})

contenedorGato.innerHTML = ''
comidaGatos.forEach((comida) => {
  contenedorGato.appendChild(plantillaComida(comida))
})

carritoContenedor.innerHTML = ''
carrito.forEach((comida) => {
  carritoContenedor.appendChild(plantillaCarrito(comida))
})
