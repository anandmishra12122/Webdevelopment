const btn1 = document.querySelectorAll('.btn1')
const body = document.querySelector("body")

btn1.forEach(function(btn){
    btn.addEventListener( "click" , function (e){
        if(e.target.id === "blue")
        {
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === "red")
        {
            body.style.backgroundColor = 'red'
        }
        if(e.target.id === "yellow")
        {
            body.style.backgroundColor = 'yellow'
        }
        if(e.target.id === "green")
        {
            body.style.backgroundColor = 'green'
        }
    })
})