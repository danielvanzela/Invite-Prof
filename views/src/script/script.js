// pagina Escolha simou não
//Botão em novas coordernadas ao passar o mouse em cima
// Se você preferir, também pode usar JavaScript para adicionar estilos dinamicamente
document.querySelector('.negativo').addEventListener('mouseenter', function() {
    // Defina as posições x e y para que o botão se mova aleatoriamente
    var randomX = Math.random() * (window.innerWidth - this.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});