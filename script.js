const wrapper = document.getElementById('depoimentos-wrapper-xy12');
const depoimentos = document.querySelectorAll('.depoimento-item-xy12');
const totalDepoimentos = depoimentos.length;

let index = 0;

// Função para mover os depoimentos no carrossel
function scrollDepoimentos() {
    index += 2; // Avança 2 depoimentos por vez

    if (index >= totalDepoimentos) {
        index = 0; // Volta ao início
    }

    const deslocamento = -50 * (index); // Desloca 50% para mostrar 2 depoimentos por vez
    wrapper.style.transform = `translateX(${deslocamento}%)`;
}

// Ativa o carrossel apenas no mobile
if (window.innerWidth <= 768) {
    setInterval(scrollDepoimentos, 3000); // Rola a cada 3 segundos
}
