const palavrasComDicas = [
    { palavra: "JAVASCRIPT", dica: "Linguagem de programação web" },
    { palavra: "PYTHON", dica: "Linguagem simples e popular" },
    { palavra: "COMPUTADOR", dica: "Máquina para programadores" },
    { palavra: "DESENVOLVEDOR", dica: "Cria softwares" },
    { palavra: "ALGORITMO", dica: "Regras para resolver problemas" },
    { palavra: "INTERFACE", dica: "Conexão entre sistemas" },
    { palavra: "PROGRAMACAO", dica: "Ato de criar software" },
    { palavra: "DEBUG", dica: "Remover erros de código" },
    { palavra: "SERVIDOR", dica: "Armazena dados e arquivos" },
    { palavra: "BANCODEDADOS", dica: "Organiza informações" },
    { palavra: "FRAMEWORK", dica: "Estrutura para desenvolvimento" },
    { palavra: "BIBLIOTECA", dica: "Coleção de código reutilizável" },
    { palavra: "CODIGO", dica: "Instruções para o computador" },
    { palavra: "SISTEMA", dica: "Conjunto de componentes interligados" },
    { palavra: "APLICATIVO", dica: "Software para tarefas específicas" }
];

let palavraEscolhida = "";
let dicaEscolhida = "";
let palavraEscondida = [];
let tentativas = 6;
let letrasUsadas = [];

const canvas = document.getElementById("forcaCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 250;

const wordDisplay = document.getElementById("wordDisplay");
const lettersContainer = document.getElementById("letters");
const message = document.getElementById("message");
const hintText = document.getElementById("hintText");
const restartBtn = document.getElementById("restartBtn");

function iniciarJogo() {
    const escolha = palavrasComDicas[Math.floor(Math.random() * palavrasComDicas.length)];
    palavraEscolhida = escolha.palavra;
    dicaEscolhida = escolha.dica;
    palavraEscondida = Array(palavraEscolhida.length).fill("_");
    tentativas = 6;
    letrasUsadas = [];

    wordDisplay.textContent = palavraEscondida.join(" ");
    hintText.textContent = dicaEscolhida;
    message.textContent = "";
    desenharForca();
    gerarBotoes();
}

function gerarBotoes() {
    lettersContainer.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letra;
        button.id = `btn-${letra}`;
        button.onclick = () => verificarLetra(letra);
        lettersContainer.appendChild(button);
    }
}

function verificarLetra(letra) {
    if (letrasUsadas.includes(letra)) return;
    letrasUsadas.push(letra);

    const button = document.getElementById(`btn-${letra}`);
    if (button) {
        button.disabled = true;
        button.classList.add("active");
    }

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) palavraEscondida[i] = letra;
        }
    } else {
        tentativas--;
        desenharParte();
    }

    wordDisplay.textContent = palavraEscondida.join(" ");

    if (!palavraEscondida.includes("_")) {
        message.textContent = "🎉 Você venceu!";
        desativarBotoes();
    } else if (tentativas === 0) {
        message.textContent = `☠️ Você perdeu! A palavra era "${palavraEscolhida}"`;
        desativarBotoes();
    }
}

function desativarBotoes() {
    document.querySelectorAll(".letters button").forEach(btn => btn.disabled = true);
}

function desenharForca() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(20, 230); ctx.lineTo(180, 230);
    ctx.moveTo(100, 230); ctx.lineTo(100, 30);
    ctx.lineTo(160, 30);
    ctx.lineTo(160, 60);
    ctx.stroke();
}

function desenharParte() {
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (tentativas === 5) ctx.arc(160, 80, 20, 0, Math.PI * 2);
    if (tentativas === 4) ctx.moveTo(160, 100), ctx.lineTo(160, 160);
    if (tentativas === 3) ctx.moveTo(160, 110), ctx.lineTo(130, 140);
    if (tentativas === 2) ctx.moveTo(160, 110), ctx.lineTo(190, 140);
    if (tentativas === 1) ctx.moveTo(160, 160), ctx.lineTo(130, 200);
    if (tentativas === 0) ctx.moveTo(160, 160), ctx.lineTo(190, 200);
    ctx.stroke();
}

function teclaPressionada(event) {
    const letra = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letra)) verificarLetra(letra);
}

document.addEventListener("keydown", teclaPressionada);
restartBtn.onclick = iniciarJogo;

iniciarJogo();