let btn = document.getElementById("btn")

btn.addEventListener('click', function(){
    let counter = document.getElementById("counter")
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})