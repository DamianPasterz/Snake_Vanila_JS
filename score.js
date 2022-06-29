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
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),

            })
            items = items.sort((a, b) => b["value"] - a["value"])
        })

        console.log(items);

        setTimeout(() => {
            generateItems(items);

        }, 200)




    })

    return

}



export function generateItems(items) {


    items.forEach((item, index) => {
        console.log(item);
        console.log(index);


        for (let i = 0; i < 10; i++) {




        }







    })



}













