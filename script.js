// ======== ANIMAÇÃO DE TRANSIÇÃO ========
function trocarPasso(atual, proximo) {
    const passoAtual = document.getElementById(`passo-${atual}`);
    const passoProximo = document.getElementById(`passo-${proximo}`);

    // Fade-out no atual
    passoAtual.classList.remove("ativo");
    passoAtual.classList.add("fade-out");

    setTimeout(() => {
        passoAtual.style.display = "none";
        passoAtual.classList.remove("fade-out");

        // Exibe e ativa o próximo
        passoProximo.style.display = "block";
        passoProximo.classList.add("ativo");
        passoProximo.classList.add("fade-in");

        setTimeout(() => passoProximo.classList.remove("fade-in"), 400);

    }, 300);
}

// ======== EVENTOS DOS BOTÕES ========
document.querySelectorAll(".btn-proximo").forEach(botao => {
    botao.addEventListener("click", () => {
        const proximo = botao.getAttribute("data-proximo");

        // identifica qual passo está ativo agora
        const atual = document.querySelector(".passo.ativo").id.replace("passo-", "");

        trocarPasso(atual, proximo);
        tocarClique();
    });
});

// ======== SOM DE CLIQUE (opcional) ========
const cliqueAudio = new Audio("click.mp3"); // coloque um som na pasta do projeto

function tocarClique() {
    cliqueAudio.currentTime = 0;
    cliqueAudio.volume = 0.4;
    cliqueAudio.play().catch(() => {});
}
