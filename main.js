document.addEventListener('DOMContentLoaded', function() {
  let colorArea = document.querySelector(".colorArea")

  //create class selector, default white, changes when color buttons selected
  let currentClass = 'white'

  //loop which creates the tile squares
  for (let x = 0; x < 1400; x++) {
    let tile = document.createElement('div')
    tile.style.width = '2%'
    tile.style.paddingBottom = '2%'
    tile.style.border = '1px solid black'
    tile.style.float = 'left'
    tile.setAttribute('id', x)
    tile.setAttribute('class', "white")
    colorArea.appendChild(tile)
  }

  //loop which creates an object with each tile as the key (tile0,tile1, etc..) and its location on the page as its value
  let varCreate = () => {
    let result = {}
    for (let x = 0; x < 1400; x++) {
        result["tile"+x] = document.getElementById(`${x}`)
    }
    return result
}

  //gives the object created above a name tiles, so that the object can be accessed by tiles[key]
  let tiles = varCreate()

  //eventListeners for each tile
  for (key in tiles) {
    tiles[key].addEventListener('click', function() {
      this.className = currentClass
    })
  }

  //Build colored button variables
  let redButton = document.getElementById('red')
  let orangeButton = document.getElementById('orange')
  let yellowButton = document.getElementById('yellow')
  let greenButton = document.getElementById('green')
  let blueButton = document.getElementById('blue')
  let indigoButton = document.getElementById('indigo')
  let violetButton = document.getElementById('violet')
  let whiteButton = document.getElementById('white')
  let blackButton = document.getElementById('black')

  //Event listeners for color buttons red, orange, yellow, green, blue, indigo, violet
  redButton.addEventListener('click', function() {
    currentClass = 'red'
  })
  orangeButton.addEventListener('click', function() {
    currentClass = 'orange'
  })
  yellowButton.addEventListener('click', function() {
    currentClass = 'yellow'
  })
  greenButton.addEventListener('click', function() {
    currentClass = 'green'
  })
  blueButton.addEventListener('click', function() {
    currentClass = 'blue'
  })
  indigoButton.addEventListener('click', function() {
    currentClass = 'indigo'
  })
  violetButton.addEventListener('click', function() {
    currentClass = 'violet'
  })
  whiteButton.addEventListener('click', function() {
    currentClass = 'white'
  })
  blackButton.addEventListener('click', function() {
    currentClass = 'black'
  })

})
