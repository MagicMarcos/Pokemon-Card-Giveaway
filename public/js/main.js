const deleteButton = document.querySelectorAll('.fa-trash')
const upButton = document.querySelectorAll('.fa-arrow-up')
const downButton = document.querySelectorAll('.fa-arrow-down')
 

Array.from(deleteButton).forEach((element)=>{
    element.addEventListener('click', deleteCard)
})

Array.from(upButton).forEach((element)=>{
    element.addEventListener('click', addCard)
})

Array.from(downButton).forEach((element) =>{
    element.addEventListener('click', removeCard)
})


///////// FIGURE OUT THE PARENT NODES STUFF WITH EJS!
//delete a card from list
async function deleteCard(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteCard', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'cardNameS': sName,
              'cardValueS': bName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}


//add one to card count up arrow
async function addCard(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const tUp = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneCard', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'cardNameS': sName,
              'cardValueS': bName,
              'countS': tUp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

//remove one card from the list down arrow
async function removeCard(){
    const sCard = this.parentNode.childNodes[1].innerText
    const cValue = this.parentNode.childNodes[3].innerText
    const tDown = Number(this.parentNode.childNodes[5].innerText)

    if(tDown <= 0){
        return false
    } 
    else{ try{
        const response = await fetch('removeOneCard', {
            method: 'put', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'cardNameS': sCard,
                'cardValueS': cValue, 
                'countS': tDown 
            })
        })
    const data = await response.json()
    console.log(data)
    location.reload()
    }catch(err){
        console.log(err)
    }
}
}

//Randomize value based on length of list and return after audio plays
const cardCount = document.querySelectorAll('.cardName')
const audio = document.querySelector('audio')
const cardCountArr = Array.from(cardCount)
document.querySelector('button').addEventListener('click', getPokemon)

function randomizer(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("result")

            /////RANDOMIZING MATH/////
            
            const cardNum = Math.ceil(Math.random() * cardCountArr.length)
            const cardResult = cardCountArr[cardNum - 1].innerText

            document.querySelector('.resultingNum').innerHTML = cardResult.slice(2)
            document.querySelector('.resultingNum').style.display = "inherit"

            console.log(cardNum)
        }, 5500)})
}

async function getPokemon(){
    audio.currentTime = 0;
    audio.play();

    const result = await randomizer()

    return result
    
}

