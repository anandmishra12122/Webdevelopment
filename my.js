let btn = document.querySelector("#btn")
let box = document.querySelector("#msg")
btn.addEventListener("click", function(e){
    let name1 = document.querySelector("#name").value
    let gmail1 = document.querySelector("#gmail").value
    let pass1 = document.querySelector("#password").value
    let pass2 = document.querySelector("#cnfpassword").value
    
    if(!name1 || !gmail1 || !pass1 || !pass2 )
    {
        box.innerHTML = "⚠️ All fields are required"
        box.style.color = "red"
        
    }
    else if(pass1 != pass2)
    {
        box.innerHTML = "⚠️ Password are same"
        box.style.color = "red"
    }
    else
    {
        box.innerHTML = "✅ Signup successful"
        box.style.color = "yellow"
    }


    setTimeout(function(){
        box.innerHTML =""
    },2000)
})
