import { initialUser } from "./game.js";
import { snakeBody } from "./snake.js";


export function addScore() {

    db.collection("score").add({

        value: snakeBody.length,
        user: initialUser

    })
    getItems()

}

export function getItems() {
    db.collection("score").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),
            })
            items = items.sort((a, b) => b["value"] - a["value"])
        })

        setTimeout(() => {
            generateItems(items);
        }, 200)

    })
    return
}


export function generateItems(items) {

    const positions1 = document.querySelector('.positions1')
    const positions2 = document.querySelector('.positions2')
    const positions3 = document.querySelector('.positions3')

    positions1.innerHTML = `${items[0].user} pkt. ${items[0].value} `
    positions2.innerHTML = `${items[1].user} pkt. ${items[1].value} `
    positions3.innerHTML = `${items[2].user} pkt. ${items[2].value} `


}













