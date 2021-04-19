
document.querySelector('h1').addEventListener('click', yolo)

function yolo(){
    const yoloNum = Math.ceil(Math.random() * 2)
    document.querySelector('h2').innerHTML = yoloNum
    console.log(yoloNum)
}