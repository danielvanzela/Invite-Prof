// pagina Escolha simou não
//Botão em novas coordernadas ao passar o mouse em cima
// Se você preferir, também pode usar JavaScript para adicionar estilos dinamicamente
document.querySelector('.negativo').addEventListener('mouseenter', function () {
    // Defina as posições x e y para que o botão se mova aleatoriamente
    var randomX = Math.random() * (window.innerWidth - this.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});


// Função para animar o primeiro elemento do segundo 1 ao segundo 5
function animateElemento1() {
    setTimeout(() => {
        elemento1.style.transform = 'translateX(0px)';

        // Após 10 segundos, muda novamente

        setTimeout(() => {
            h1_ele1.style.transform = 'translateY(130%)';
        }, 2900);
    }, 900);

}

// Função para animar o segundo elemento do segundo 6 ao segundo 45
function animateElemento2() {
    const elemento2 = document.getElementById('elemento2');
    elemento2.style.transform = 'translateY(-250%)'; // Exemplo de animação
    setTimeout(() => {
        elemento2.style.transform = 'translatex(100)'; // Reseta a transformação
    },); // Duração de 39 segundos
}

// Função para animar o terceiro elemento do segundo 46 ao segundo 55
function animateElemento3() {
    const elemento3 = document.getElementById('elemento3');
    setTimeout(() => {
        elemento3.style.top = '0px';
        setTimeout(() => {
            elemento3.style.transform = 'translateX(-100vw)';

        }, 2000);
    }, 7000);
    elemento3.style.top = '0px'; // Exemplo de animação
}

// Função para animar o quarto elemento do segundo 56 ao segundo 60
function animateElemento4() {
    const elemento4 = document.getElementById('elemento4');
    setTimeout(() => {
        elemento4.style.transform = 'translateX(0px)';
        setTimeout(() => {
            elemento4.style.transform = 'translateX(-100vw)';

        }, 2000);
    }, 7000);
    elemento4.style.top = '0px'; // Exemplo de animação
}
function animateElemento5() {
    const elemento5 = document.getElementById('elemento5');
    setTimeout(() => {
        elemento5.style.transform = 'translateX(-100vw)';
    }, 10000);
}

// Agendando as animações
setTimeout(animateElemento1, 0); // Inicia no segundo 1 (1000 ms)
setTimeout(animateElemento2, 6000); // Inicia no segundo 6 (6000 ms)
setTimeout(animateElemento3, 61000); // Inicia no segundo 46 (46000 ms)
setTimeout(animateElemento4, 65000); // Inicia no segundo 56 (56000 ms)
setTimeout(animateElemento5, 65000); // Inicia no segundo 56 (56000 ms)