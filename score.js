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
        // setTimeout(() => {
        //     clearCompletedItems()
        // }, 2000)

        // generateItems(items);
        // showAllStatsTodo(items)

    })
    return
}


function clearCompletedItems() {



    let todoItems = db.collection("score");
    let todoCompleted = todoItems
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                let item = doc.id;
                console.log(item);
                db.collection("score").doc(item).delete();
            }


            )
        })

}