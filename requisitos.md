## Requisitos Funcionais do Jogo da Forca

Estes são os requisitos funcionais do código do jogo da forca, detalhando o que o sistema deve fazer:

**1. Inicialização do Jogo:**

*   **RF.1.1:** O sistema deve selecionar aleatoriamente uma palavra secreta de uma lista predefinida de palavras.
*   **RF.1.2:** O sistema deve associar uma dica à palavra secreta selecionada.
*   **RF.1.3:** O sistema deve inicializar o estado do jogo, incluindo:
    *   O número de tentativas permitidas (definido como 6).
    *   Uma representação visual da palavra secreta, substituindo cada letra por um caractere de espaço reservado (por exemplo, "\_").
    *   Uma lista vazia de letras já tentadas pelo jogador.
*   **RF.1.4:** O sistema deve exibir a dica associada à palavra secreta.
*   **RF.1.5:** O sistema deve exibir a representação visual inicial da palavra secreta (com espaços reservados).
*   **RF.1.6:** O sistema deve gerar e exibir um teclado virtual contendo todas as letras do alfabeto.
*   **RF.1.7:** O sistema deve limpar qualquer estado de jogo anterior (por exemplo, partes do boneco desenhadas, mensagens).

**2. Tentativa do Jogador:**

*   **RF.2.1:** O sistema deve permitir que o jogador tente adivinhar uma letra de duas maneiras:
    *   Clicando em um botão de letra no teclado virtual.
    *   Pressionando uma tecla de letra no teclado físico.
*   **RF.2.2:** O sistema deve converter a letra inserida pelo jogador para maiúscula.
*   **RF.2.3:** O sistema deve ignorar tentativas de letras que não são letras do alfabeto (A-Z).
*   **RF.2.4:** O sistema deve impedir que o jogador tente a mesma letra mais de uma vez.

**3. Verificação da Letra:**

*   **RF.3.1:** O sistema deve verificar se a letra tentada pelo jogador está presente na palavra secreta.

**4. Atualização do Jogo (Letra Correta):**

*   **RF.4.1:** Se a letra estiver presente na palavra secreta, o sistema deve:
    *   Substituir os caracteres de espaço reservado correspondentes às posições da letra na palavra secreta pela letra correta.
    *   Atualizar a exibição visual da palavra secreta para refletir as letras reveladas.
*   **RF.4.2:** O sistema deve manter o número de tentativas restantes inalterado.

**5. Atualização do Jogo (Letra Incorreta):**

*   **RF.5.1:** Se a letra não estiver presente na palavra secreta, o sistema deve:
    *   Decrementar o número de tentativas restantes.
    *   Desenhar uma parte adicional do boneco na forca.

**6. Detecção de Fim de Jogo:**

*   **RF.6.1:** O sistema deve verificar se o jogador ganhou o jogo.
*   **RF.6.2:** O sistema deve considerar que o jogador ganhou o jogo se todas as letras da palavra secreta foram adivinhadas (ou seja, não há mais caracteres de espaço reservado na representação visual da palavra).
*   **RF.6.3:** Se o jogador ganhar o jogo, o sistema deve exibir uma mensagem de vitória e desabilitar o teclado virtual.
*   **RF.6.4:** O sistema deve verificar se o jogador perdeu o jogo.
*   **RF.6.5:** O sistema deve considerar que o jogador perdeu o jogo se o número de tentativas restantes chegar a zero.
*   **RF.6.6:** Se o jogador perder o jogo, o sistema deve exibir uma mensagem de derrota, revelar a palavra secreta e desabilitar o teclado virtual.

**7. Teclado Virtual:**

*   **RF.7.1:** O sistema deve exibir um teclado virtual contendo todas as letras do alfabeto.
*   **RF.7.2:** O sistema deve desabilitar um botão de letra no teclado virtual após o jogador tentar essa letra.
*   **RF.7.3:** O sistema deve fornecer feedback visual ao jogador sobre as letras já tentadas (por exemplo, alterando a cor do botão).
*   **RF.7.4:** O sistema deve desabilitar todo o teclado virtual ao final do jogo (vitória ou derrota).

**8. Reinício do Jogo:**

*   **RF.8.1:** O sistema deve fornecer um botão ou mecanismo para reiniciar o jogo.
*   **RF.8.2:** Ao reiniciar o jogo, o sistema deve voltar ao estado inicial (conforme descrito nos requisitos RF.1.1 a RF.1.7).

**9. Desenho da Forca:**

*   **RF.9.1:** O sistema deve exibir uma forca vazia no início do jogo.
*   **RF.9.2:** O sistema deve desenhar partes do boneco na forca (cabeça, corpo, braços, pernas) progressivamente, a cada tentativa incorreta do jogador.
*   **RF.9.3:** O sistema deve garantir que o desenho do boneco corresponda ao número de tentativas restantes.

**10. Feedback ao Usuário:**

*   **RF.10.1:** O sistema deve fornecer feedback visual claro ao usuário sobre o estado do jogo, incluindo:
    *   A palavra secreta (com letras reveladas e espaços reservados).
    *   O número de tentativas restantes.
    *   As letras já tentadas.
    *   Mensagens de vitória ou derrota.
    *   A dica.
*   **RF.10.2:** O sistema deve fornecer feedback visual sobre os botões do teclado virtual (habilitado, desabilitado, selecionado).