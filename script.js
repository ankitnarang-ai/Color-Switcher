const myContainer = document.querySelectorAll('.box')
const background = document.querySelector('body')
console.log(myContainer)
const allboxes= myContainer.forEach((boxes) =>{
    boxes.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id ==="Red"){
            document.body.style="background-color:red"
        }
        if(e.target.id ==="Blue"){
            document.body.style="background-color:blue"
        }
        if(e.target.id ==="Green"){
            document.body.style="background-color:green"
        }
        if(e.target.id ==="yellow"){
            document.body.style="background-color:yellow"
        }
    })
})
