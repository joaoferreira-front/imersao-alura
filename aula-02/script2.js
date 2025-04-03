// Pergunta a idade do jogador
let idade = prompt("Qual a sua idade?");

// Verifica se o jogador tem idade suficiente
if (idade < 18) {
    alert("Você NÃO pode jogar Jokenpô!");
} else {
    // Se a idade for 18 ou mais, começa o jogo
    let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // Verifica se houve empate
    if (escolhaJogador == escolhaComputador) {
        alert("Empate!");
    } else {
        // Lógica de vitória e derrota
        if (escolhaJogador == 1) { // Jogador escolheu Pedra
            if (escolhaComputador == 2) {
                alert("Computador venceu, escolheu papel!");
            } else if (escolhaComputador == 3) {
                alert("Jogador venceu, computador escolheu tesoura!");
            }
        }

        if (escolhaJogador == 2) { // Jogador escolheu Papel
            if (escolhaComputador == 1) {
                alert("Jogador venceu, computador escolheu pedra!");
            } else if (escolhaComputador == 3) {
                alert("Computador venceu, escolheu tesoura!");
            }
        }

        if (escolhaJogador == 3) { // Jogador escolheu Tesoura
            if (escolhaComputador == 1) {
                alert("Computador venceu, escolheu pedra!");
            } else if (escolhaComputador == 2) {
                alert("Jogador venceu, computador escolheu papel!");
            }
        }
    }

    // Exibe a escolha do computador para verificação
    alert("Escolha do computador: " + escolhaComputador);
}
