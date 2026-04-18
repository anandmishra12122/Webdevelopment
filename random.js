const btn = document.querySelector("#generateBtn")
let div = document.querySelector("#number")
btn.addEventListener("click",function (){
    let num = Math.floor(Math.random() * 100) + 1;
    div.innerHTML = num
})