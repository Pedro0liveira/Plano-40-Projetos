let counter = 0

const btns = document.querySelectorAll(".btn")
const num = document.querySelector("#num")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            counter--
        } else if(styles.contains('increase')){
            counter++
        } else{
            counter = 0
        }

        if (counter > 0) {
            num.style.color = "green"
        } else if (counter < 0) {
            num.style.color = "red"
        } else {
            num.style.color = "black"
        }
        num.textContent = counter
        console.log(num);
    })
})
