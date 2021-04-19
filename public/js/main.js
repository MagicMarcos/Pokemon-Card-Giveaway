const deleteButton = document.querySelectorAll('.del')
const upButton = document.querySelectorAll('.fa-arrow-up')
const downButton = document.querySelectorAll('.fa-arrow-down')
 

Array.from(deleteButton).forEach((el)=>{
    el.addEventListener('click', deleteCard)
})

Array.from(upButton).forEach((el)=>{
    el.addEventListener('click', addOneCard)
})

Array.from(downButton).forEach((el) =>{
    el.addEventListener('click', removeOneCard)
})


//delete a card from list
async function deleteCard(){
    const cardId = this.parentNode.dataset.id
    try{
        const res = await fetch('giveaway/deleteCard', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'cardIdFromJsFile': cardId
            })
          })
        const data = await res.json()
        console.log(data) 
        location.reload()

    }catch(err){
        console.log(err)
    }
}


//add one to card count up arrow
async function addOneCard(){
    const cardId = this.parentNode.dataset.id
    const tUp = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('giveaway/addOneCard', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'cardIdFromJsFile': cardId,
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
async function removeOneCard(){
    const cardId = this.parentNode.dataset.id
    const tDown = Number(this.parentNode.childNodes[5].innerText)

    if(tDown <= 0){
        return false
    } 
    else{
         try{
        const response = await fetch('giveaway/removeOneCard', {
            method: 'put', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJsFile': cardId,
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

            document.querySelector('.resultingNum').innerHTML = cardNum + cardResult
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

