const div = document.querySelector("#displayTimer")
const btn = document.querySelector("#startBtn")
btn.addEventListener("click",function(){

    let time = parseInt(document.querySelector("#timeInput").value)

    if(time === "" || isNaN(time))
    {
        alert("Enter valid")
    }
    else
    {
        const count = setInterval(() => {
            div.innerHTML = time
            time--;

            if(time < 0)
            {
                alert("Time Over !")
                clearInterval(count)
            }
        }, 1000);
    }
})

