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

let contadorId = 0
let comidas = []
let comidaGatos = []
let comidaPerros = []
let busqueda = []

calcularGato.addEventListener('click', (e) => {
  e.preventDefault()
  let nombre = nombreGato.value
  let tipo = tipoGato.value
  let peso = pesoGato.value
  let edad = edadGato.value

  let pesoKilos = peso / 1000

  if (edad < 6) {
    alert(
      nombre +
        ` Necesita una racion de ${parseInt(pesoKilos * 0.1 * 1000)} gr/dia`,
    )
  } else {
    switch (tipo) {
      case 'casero':
        alert(
          nombre + ` Necesita una racion de ${pesoKilos * 0.03 * 1000} gr/dia`,
        )

        break
      case 'explorador':
        alert(
          nombre + ` Necesita una racion de ${pesoKilos * 0.06 * 1000} gr/dia`,
        )

        break

      default:
        alert(nombre + ' Tipo ingresado incorrecto')
        break
    }
  }
})

calcularPerro.addEventListener('click', (e) => {
  e.preventDefault()
  let nombre = nombrePerro.value
  let peso = pesoPerro.value
  let edad = edadPerro.value
  if (peso <= 1200) {
    if (edad <= 3) {
      alert(
        nombre +
          ' Necesita una racion de entre 25 a 240 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        nombre +
          ' Necesita una racion de entre 40 a 280 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        nombre +
          ' Necesita una racion de entre 45 a 290 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
      alert(
        nombre +
          ' Necesita una racion de entre 40 a 130 gr de racion de adulto por dia',
      )
    } else {
      alert(
        nombre +
          ' Necesita una racion de entre 100 a 180 gr de racion de adulto por dia',
      )
    }
  } else if (peso <= 4500) {
    if (edad <= 3) {
      alert(
        nombre +
          ' Necesita una racion de entre 130 a 590 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        nombre +
          ' Necesita una racion de entre 240 a 760 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        nombre +
          ' Necesita una racion de entre 280 a 840 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
      alert(
        nombre +
          ' Necesita una racion de entre 290 a 700 gr de racion de cachorro por dia',
      )
    } else {
      alert(
        nombre +
          ' Necesita una racion de entre 320 a 500 gr de racion de adulto por dia',
      )
    }
  } else {
    if (edad <= 3) {
      alert(
        nombre +
          ' Necesita una racion de entre 280 a 700 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        nombre +
          ' Necesita una racion de entre 590 a 1020 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        nombre +
          ' Necesita una racion de entre 760 a 1100 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
      alert(
        nombre +
          ' Necesita una racion de entre 840 a 1100 gr de racion de cachorro por dia',
      )
    } else {
      alert(
        nombre +
          ' Necesita una racion de entre 500 a 700 gr de racion de adulto por dia',
      )
    }
  }
})

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

const plantillaComida = (comida) => {
  let elemento = document.createElement('div')
  elemento.className = 'card col-4'
  elemento.setAttribute('id', `${comida.id}`)
  elemento.innerHTML = `<img src="${comida.img}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${comida.nombre}</h5>
                            <p class="card-text">
                                ${comida.descripcion}
                            </p>
                            <p class="card-text">
                                $${comida.precio}
                            </p>
                            <a href="#" class="btn btn-primary">
                            Añadir al carrito
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

comidas = comidaGatos.concat(comidaPerros)

contenedorPerro.innerHTML = ''
comidaPerros.forEach((comida) => {
  contenedorPerro.appendChild(plantillaComida(comida))
})

contenedorGato.innerHTML = ''
comidaGatos.forEach((comida) => {
  contenedorGato.appendChild(plantillaComida(comida))
})
