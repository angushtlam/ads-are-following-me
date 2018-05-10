var rand = Math.floor(Math.random() * 7)

var filename = 'candy' 

switch (rand) {
  case 0: {
    filename = 'apple'
    break
  }
  case 1: {
    filename = 'candy'
    break
  }
  case 2: {
    filename = 'cap'
    break
  }
  case 3: {
    filename = 'cookies'
    break
  }
  case 4: {
    filename = 'flower'
    break
  }
  case 5: {
    filename = 'phone'
    break
  }
  case 6: {
    filename = 'shoe'
    break
  }
}

document.getElementById('fixed_item').src = 'assets/' + filename + '.svg'
