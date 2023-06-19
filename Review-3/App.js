const reviews = [
    {
        id: 1,
        name: "Pedro Oliveira",
        job: "Desenvolvedor",
        img: "images/me.png",
        text: "Possui 19 anos e muita vontade de aprender, iniciou os seus estudos na área da progranação em 2019 e desde então não parou mais! Atualmente está focado em aprender JavaScript e está usando este projeto para que possa colocar em prática o que já sabe, e aprender cada vez mais e ser mais capaz de elaborar sistemas com um pouco menos de ajuda do stack overflow (e quem sabe conseguir ajudar também!)."
    },
    {
        id: 2,
        name: "Lucas",
        job: "Engenheiro de Software",
        img: "images/lucas.jpg",
        text: "Lucas, um engenheiro de software de 27 anos, é apaixonado por tecnologia e inovação. Com sua mente curiosa e habilidades técnicas excepcionais, ele cria aplicativos e soluções digitais que tornam a vida das pessoas mais fácil. Além de sua expertise em programação, Lucas é um aventureiro e fotógrafo entusiasta, trazendo uma perspectiva única para suas análises."
    },
    {
        id: 3,
        name: "Clara",
        job: "Arquiteta",
        img: "images/clara.jpg",
        text: "Clara, uma arquiteta de 34 anos, é uma mulher apaixonada por design e construção. Com sua expertise em arquitetura e sua visão criativa, ela transforma espaços em ambientes funcionais e esteticamente agradáveis. Clara está sempre em busca das últimas tendências em design e materiais sustentáveis para incorporar em seus projetos. Além de sua dedicação à arquitetura, ela é uma entusiasta da arte e adora explorar galerias e exposições. Sua sensibilidade estética e paixão por beleza refletem-se em suas análises de produtos e serviços relacionados à arquitetura, design de interiores e estilo de vida."
    },
    {
        id: 4,
        name: "Sophia",
        job: "Bióloga",
        img: "images/sophia.jpg",
        text: "Sophia, uma bióloga de 30 anos, é uma mulher apaixonada por rios e pela natureza. Ela passa seus dias estudando a vida aquática e preservando os ecossistemas fluviais. Com um profundo conhecimento sobre a importância dos rios e seu impacto na biodiversidade, Sophia tem uma conexão íntima com a natureza e está constantemente em busca de maneiras de promover a conservação ambiental. Nos momentos de lazer, ela desfruta de momentos tranquilos nas margens dos rios, absorvendo a serenidade e a beleza natural ao seu redor. Sua dedicação em compartilhar seu conhecimento e amor pela natureza em nossas análises é uma fonte de inspiração para todos aqueles que também desejam proteger e apreciar os recursos naturais"
    }
]

const img = document.querySelector('#person-img')
const author = document.querySelector('#person-name')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const randomBtn = document.querySelector('.random-btn')

var currentItem = 0

window.addEventListener('DOMContentLoaded', showPerson(currentItem))

nextBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})

function showPerson(){
    const Item = reviews[currentItem]
    img.src = Item.img
    author.innerHTML = Item.name
    job.innerHTML = Item.job
    info.innerHTML = Item.text
}
