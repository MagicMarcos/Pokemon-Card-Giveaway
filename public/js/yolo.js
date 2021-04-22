document.querySelector('h1').addEventListener('click', yolo)
const h2Selector = document.querySelector('h2')
function yolo() {
    const yoloNum = Math.ceil(Math.random() * 2)
    h2Selector.innerHTML = yoloNum
    h2Selector.style.visibility = 'visible'
    console.log(yoloNum)
}

// function display(){
//     h2Selector.display = 'block';
// }