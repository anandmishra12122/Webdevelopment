let num = Math.floor(Math.random() * 100) + 1;
const result = document.querySelector("#message")
console.log(num)
const check = document.getElementById("checkBtn")

const reset = document.getElementById("resetBtn")




check.addEventListener("click" ,function(e){
    const value1 = parseInt(document.querySelector("#guessInput").value)
    
    if(value1 == num)
    {
        result.innerHTML = "Win !!"
    }else if(value1 > num)
    {
        result.innerHTML = "To Low "
    }
    else if(value1 < num)
    {
        result.innerHTML = "To High"
    }
})

reset.addEventListener("click",function(e){
    document.querySelector("#guessInput").value = ""
    result.innerHTML = ""
})
