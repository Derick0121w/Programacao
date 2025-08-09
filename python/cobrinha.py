import pygame
import random
import sys

# Configurações do Jogo
TAMANHO_TELA = 400  # Tamanho da janela em pixels
TAMANHO_CELULA = TAMANHO_TELA // 10  # Cada célula será 40x40 pixels (para um tabuleiro 10x10)
FPS = 5  # Velocidade reduzida da cobra

# Cores
VERDE = (0, 255, 0)
VERMELHO = (255, 0, 0)
BRANCO = (255, 255, 255)
PRETO = (0, 0, 0)

# Inicialização do Pygame
pygame.init()
tela = pygame.display.set_mode((TAMANHO_TELA, TAMANHO_TELA))
pygame.display.set_caption("Jogo da Cobrinha 10x10")
clock = pygame.time.Clock()


# Função para desenhar a grade
def desenha_grade():
    for x in range(0, TAMANHO_TELA, TAMANHO_CELULA):
        pygame.draw.line(tela, PRETO, (x, 0), (x, TAMANHO_TELA))
        pygame.draw.line(tela, PRETO, (0, x), (TAMANHO_TELA, x))


# Função para gerar uma nova posição de comida
def nova_comida(cobra):
    while True:
        comida = [random.randint(0, 9), random.randint(0, 9)]
        if comida not in cobra:  # Garantir que a comida não caia na posição da cobra
            return comida


# Função para desenhar a tela de vitória
def desenha_vitoria():
    tela.fill(BRANCO)
    fonte = pygame.font.SysFont('Arial', 36)
    texto = fonte.render('Você venceu! Parabéns!', True, (0, 128, 0))
    tela.blit(texto, (30, TAMANHO_TELA // 2 - 20))
    pygame.display.flip()
    pygame.time.wait(2000)  # Espera 2 segundos antes de fechar o jogo


# Função principal do jogo
def jogo():
    # Posições iniciais
    cobra = [[5, 5]]  # Começa com 1 célula
    direcao = [0, -1]  # Começa movendo-se para cima
    comida = nova_comida(cobra)
    total_celulas = 10 * 10  # Total de células no tabuleiro (10x10)

    while True:
        # Checa eventos (teclas e saída)
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif evento.type == pygame.KEYDOWN:
                if evento.key == pygame.K_UP and direcao != [0, 1]:
                    direcao = [0, -1]
                elif evento.key == pygame.K_DOWN and direcao != [0, -1]:
                    direcao = [0, 1]
                elif evento.key == pygame.K_LEFT and direcao != [1, 0]:
                    direcao = [-1, 0]
                elif evento.key == pygame.K_RIGHT and direcao != [-1, 0]:
                    direcao = [1, 0]

        # Atualiza a posição da cobra
        nova_cabeca = [cobra[0][0] + direcao[0], cobra[0][1] + direcao[1]]

        # Checa colisões com as bordas ou com ela mesma
        if (
                nova_cabeca in cobra or
                nova_cabeca[0] < 0 or nova_cabeca[0] > 9 or
                nova_cabeca[1] < 0 or nova_cabeca[1] > 9
        ):
            print("Fim de jogo!")
            pygame.quit()
            sys.exit()

        # Adiciona a nova posição da cabeça
        cobra.insert(0, nova_cabeca)

        # Checa se a cobra comeu a comida
        if nova_cabeca == comida:
            comida = nova_comida(cobra)  # Nova comida
            # Se a cobra comer a comida, ela cresce (não remove a cauda)
        else:
            cobra.pop()  # Remove o último pedaço da cauda

        # Verifica se a cobrinha preencheu todas as células do tabuleiro
        if len(cobra) == total_celulas:
            desenha_vitoria()  # Exibe a tela de vitória
            pygame.quit()
            sys.exit()

        # Desenha tudo na tela
        tela.fill(BRANCO)
        desenha_grade()

        # Desenha a comida
        pygame.draw.rect(
            tela,
            VERMELHO,
            (comida[0] * TAMANHO_CELULA, comida[1] * TAMANHO_CELULA, TAMANHO_CELULA, TAMANHO_CELULA),
        )

        # Desenha a cobra
        for pos in cobra:
            pygame.draw.rect(
                tela,
                VERDE,
                (pos[0] * TAMANHO_CELULA, pos[1] * TAMANHO_CELULA, TAMANHO_CELULA, TAMANHO_CELULA),
            )

        pygame.display.flip()
        clock.tick(FPS)


# Função para desenhar a tela inicial
def desenha_tela_inicial():
    tela.fill(BRANCO)
    fonte = pygame.font.SysFont('Arial', 36)
    texto = fonte.render('Clique para Jogar', True, PRETO)
    tela.blit(texto, (50, TAMANHO_TELA // 2 - 20))
    pygame.display.flip()


# Função para aguardar o clique do jogador
def aguardar_inicio():
    esperando_inicio = True
    while esperando_inicio:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif evento.type == pygame.MOUSEBUTTONDOWN:
                if evento.button == 1:  # Clique do mouse para iniciar
                    esperando_inicio = False

        desenha_tela_inicial()


# Inicia o jogo
aguardar_inicio()
jogo()
