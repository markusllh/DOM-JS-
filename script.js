let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorButton')


// console.log(squares[1].value)

// forEach 

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    console.log(square.value)
}                          
})

function clearScore() {
  squares.forEach(square => square.innerText = 0)
}

const cgBtn = document.getElementById('clearButton')

cgBtn.onclick = () => clearScore()

