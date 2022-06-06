import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeBody } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { addScore } from './score.js'












let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
export const initialUser = localStorage.getItem('user');


if (!initialUser) {
    let name = window.prompt("podaj swoje imię: ")
    localStorage.setItem('user', name)

}




function main(currentTime) {

    if (gameOver) {

        if (confirm(`Przegrałeś ${initialUser} twój wynik to: ${snakeBody.length}
        `)) {




            // setTimeout(() => {
            //     window.location = '/';
            // }, 10000);

            addScore()
        }

        return

    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()
    draw();

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()


}


