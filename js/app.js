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

let contadorId = 0
let comidaGatos = []
let comidaPerros = []

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

const plantillaComida = (comida) => {
  let elemento = document.createElement('div')
  elemento.className = 'card col-4'
  elemento.setAttribute = ('style', 'width: 18rem')
  elemento.innerHTML = `<img src="https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/10/Alimento-para-Gato-Frost-Cat-Indoor-7.5Kg.png" class="card-img-top" alt="..." />
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
  constructor(nombre, descripcion, precio) {
    this.id = contadorId++
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
  }
}

comidaPerros.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para perros adultos de 15 kilos',
    '2000',
  ),
)
comidaPerros.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para perros adultos de 15 kilos',
    '2000',
  ),
)
comidaPerros.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para perros adultos de 15 kilos',
    '2000',
  ),
)

comidaGatos.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para gatos adultos de 15 kilos',
    '2000',
  ),
)
comidaGatos.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para gatos adultos de 15 kilos',
    '2000',
  ),
)
comidaGatos.push(
  new Comida(
    'Frost adultos 15kg',
    'Racion de Frost para gatos adultos de 15 kilos',
    '2000',
  ),
)

contenedorPerro.innerHTML = ''
comidaPerros.forEach((comida) => {
  console.log(comida)
  contenedorPerro.appendChild(plantillaComida(comida))
})

contenedorGato.innerHTML = ''
comidaGatos.forEach((comida) => {
  console.log(comida)
  contenedorGato.appendChild(plantillaComida(comida))
})
