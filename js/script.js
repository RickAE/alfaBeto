var message = [
    "A brincadeira faz parte da educação da criança. É quando ela desenvolve a imaginação e se abre para um novo mundo.",

    "A educação deve se adaptar às necessidades das crianças para que elas aprendam com melhor aproveitamento e facilidade.",

    "Na infância, a criatividade das crianças é uma ferramenta que devemos usar para educá-las.",

    "O brincar desenvolve também a aprendizagem da linguagem e a habilidade motora.",

    "É brincando que a criança compreende o mundo à sua volta, aprende, experimenta e se desenvolve."
]

var count = 1;

var intText = document.getElementById('intro_message');
intText.addEventListener('click', ()=> {
    
    if(count >= message.length) {
        count = 0;
    }

    //intText.classList.add('fade_out');
    
    intText.innerText = message[count];
    
    count++;
    // intText.classList.add('fade_in');
    
})

