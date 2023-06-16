const btn = document.querySelector('#btn')

btn.addEventListener("click", function(){
    console.log('1')
    cor = geraCor()
    document.body.style.background = cor
    document.querySelector('.color').innerHTML = cor
})

function geraCor(){
    console.log('2');
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}