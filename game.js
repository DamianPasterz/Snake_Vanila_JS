import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeBody } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { addScore } from './score.js'
import { getItems } from './score.js'












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




            setTimeout(() => {
                window.location = '/';
            }, 90000);

            addScore()
        }

        return

    }
    const new_user = document.querySelector('.btn1');

    function newUser(event) {
        event.preventDefault()
        let name = window.prompt("podaj nowe imie: ")
        localStorage.setItem('user', name)

    }
    new_user.onclick = newUser

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


// modal-window

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

getItems()