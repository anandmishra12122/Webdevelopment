const btn = document.querySelectorAll('.btn')
const input = document.querySelector("#display")
isSecond = false
console.log(input)
btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if(e.target.id === "btn-1")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-2")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-3")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-4")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-5")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-6")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-7")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-8")
        {
            input.value += btn.innerHTML;
        }
        if(e.target.id === "btn-9")
        {
            input.value += btn.innerHTML;
        }
        


        
    })
})