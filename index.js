// Your code here
const dodger = document.getElementById('dodger')
dodger.style.left = '180px'
dodger.style.right = '0px'

 function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px', '') || '180'
        const left = parseInt(leftNumbers, 10)
if (left>0){
        dodger.style.left =`${left - 1}px`
 }
}

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
})

const moveDodgerRight = () =>{
    const leftNumbers = dodger.style.left.replace('px', '') || '180'
    const left = parseInt(leftNumbers, 10)
if (left < 360 ){
    dodger.style.left =`${left + 1}px`
}
}

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight()
    }
})