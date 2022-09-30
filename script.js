// console.log('hello')

// let titleDiv = document.getElementById('title')

// console.log('before: ', titleDiv.innerText)

// let msg = 'Goodbye hala'

// titleDiv.innerText = msg
// console.log('after: ', titleDiv.innerText)

// titleDiv.innerHTML = msg
// titleDiv.style.color = 'red'
// titleDiv.style.backgroundColor = 'blue'


let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => {
//   console.log('User chose: Rock')
//   //get ComputerChoice
//   //userChoice vs computerChoice
//   //-1, 0, 1
//   //show everything on the screen (DOM)
// } 
// yellowDiv.onclick = () => console.log('You clicked Yellow')
// greenDiv.onclick = () => console.log('You clicked Green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

//forEach loop

const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    // console.log(square.value)
  }
})


function clearScore() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScore()