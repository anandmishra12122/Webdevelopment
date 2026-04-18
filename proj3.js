const div = document.getElementById("div")

setInterval(function(){
    let date = new Date();
    div.innerHTML = date.toLocaleTimeString();
    
} , 1000)