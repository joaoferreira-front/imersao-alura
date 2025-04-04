// Função principal que controla todo o jogo
function iniciarJogo() {
    let rodada = 1;  // Começamos o jogo na primeira rodada
    let venceu = false; // Define que o jogador ainda não venceu

    // Este loop vai rodar enquanto o jogador estiver nas rodadas 1 até 5
    while (rodada <= 5) {
        console.log("Rodada: " + rodada); // Mostra a rodada no console (debug)

        // Pede a entrada do jogador e permite cancelar
        let escolhaJogador = prompt("Nível " + rodada + ", escolha um vidro (1, 2, 3, 4 ou 5):\n(Digite 'cancelar' para sair do jogo)");

        // Verifica se o jogador clicou em "Cancelar" ou digitou "cancelar"
        if (escolhaJogador === null || escolhaJogador.toLowerCase() === "cancelar") {
            Swal.fire({
                title: "⚠️ Jogo cancelado!", // Título do alerta
                text: "Volte quando quiser tentar novamente.", // Mensagem
                icon: "info", // Ícone de informação
                confirmButtonText: "OK" // Texto do botão
            });
            return; // Sai da função, encerrando o jogo
        }

        // Converte a escolha do jogador para um número inteiro
        escolhaJogador = parseInt(escolhaJogador);

        // Verifica se o número é inválido (não é número ou fora do intervalo 1–5)
        if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 5) {
            Swal.fire({
                title: "🚨 Escolha inválida!",
                text: "Digite um número entre 1 e 5.",
                icon: "warning", // Ícone de alerta
                confirmButtonText: "Tentar novamente"
            });
            continue; // Volta para o início do loop sem avançar a rodada
        }

        // Gera aleatoriamente qual vidro está quebrado (de 1 a 5)
        let pisoQuebrado = Math.floor(Math.random() * 5) + 1;

        // Verifica se o jogador escolheu o vidro quebrado
        if (escolhaJogador === pisoQuebrado) {
            Swal.fire({
                title: "💥 Vidro Quebrado!",
                text: "Você caiu! Fim de jogo!",
                icon: "error",
                confirmButtonText: "Tentar novamente"
            });
            break; // Sai do loop e encerra o jogo
        } else {
            // Se escolheu um vidro seguro, avança para próxima rodada
            Swal.fire({
                title: "✅ Passou!",
                text: "O vidro quebrado estava na ponte: " + pisoQuebrado,
                icon: "success",
                confirmButtonText: "Continuar"
            });
            rodada++; // Incrementa a rodada
        }
    }

    // Se o jogador chegou além da rodada 5, ele venceu
    if (rodada > 5) {
        venceu = true;
    }

    // Exibe mensagem final se o jogador venceu
    if (venceu) {
        Swal.fire({
            title: "🎉 Parabéns, você venceu!",
            text: "Sobreviveu à ponte de vidro!",
            icon: "success",
            confirmButtonText: "Jogar novamente"
        });
    }
}

// Essa função é chamada quando o botão "Bora jogar!" é clicado no HTML
function jogar() {
    iniciarJogo(); // Chama a função principal para começar o jogo
}
