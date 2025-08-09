import pygame
import sys
import random
import time

# Configurações do tabuleiro
TAMANHO = 20  # Tamanho dos quadrados
LINHAS, COLUNAS = 10, 10  # Tamanho do tabuleiro

# Cores
COR_FUNDO = (0, 0, 0)
COR_COBRINHA = (0, 255, 0)
COR_COMIDA = (255, 0, 0)

# Inicialização do Pygame
pygame.init()
tela = pygame.display.set_mode((COLUNAS * TAMANHO, LINHAS * TAMANHO))
pygame.display.set_caption('Jogo da Cobrinha com Ciclo Hamiltoniano')

# Função para desenhar um retângulo na tela
def desenha_retangulo(cor, posicao):
    pygame.draw.rect(tela, cor, (posicao[0] * TAMANHO, posicao[1] * TAMANHO, TAMANHO, TAMANHO))

# Configurações iniciais
cobrinha = [(0, 0)]
direcao = (1, 0)  # Começa indo para a direita
comida = (random.randint(0, COLUNAS - 1), random.randint(0, LINHAS - 1))
pontos = 0

# Ciclo Hamiltoniano representado pelas direções (direita, baixo, esquerda, cima) baseado na imagem
ciclo_hamiltoniano = [
    (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (0, 1),
    (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (0, 1),
    (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (0, 1),
    (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (0, 1),
    (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (0, 1),
    (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (0, 1),
    (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (0, 1),
    (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (-1, 0), (0, 1),
    (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0), (1, 0)
]
ciclo_indice = 0  # Para acompanhar onde estamos no ciclo

# Função principal do jogo
def jogo():
    global direcao, comida, pontos, ciclo_indice

    # Loop principal do jogo
    while True:
        tela.fill(COR_FUNDO)

        # Seguir o ciclo Hamiltoniano
        direcao = ciclo_hamiltoniano[ciclo_indice]
        ciclo_indice = (ciclo_indice + 1) % len(ciclo_hamiltoniano)

        # Movimentar a cobrinha
        nova_cabeca = (cobrinha[0][0] + direcao[0], cobrinha[0][1] + direcao[1])
        cobrinha.insert(0, nova_cabeca)

        # Verificar se comeu a comida
        if cobrinha[0] == comida:
            pontos += 1
            comida = (random.randint(0, COLUNAS - 1), random.randint(0, LINHAS - 1))
        else:
            cobrinha.pop()

        # Verificar colisão com as bordas
        if (nova_cabeca[0] < 0 or nova_cabeca[0] >= COLUNAS or
            nova_cabeca[1] < 0 or nova_cabeca[1] >= LINHAS):
            break

        # Verificar colisão com si mesma
        if cobrinha[0] in cobrinha[1:]:
            break

        # Desenhar comida e cobrinha
        desenha_retangulo(COR_COMIDA, comida)
        for parte in cobrinha:
            desenha_retangulo(COR_COBRINHA, parte)

        # Atualizar tela e controlar velocidade
        pygame.display.flip()
        pygame.time.delay(300)  # Ajuste da velocidade da cobrinha

        # Eventos para fechar o jogo
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

    print("Fim de jogo! Pontuação:", pontos)
    time.sleep(2)
    pygame.quit()
    sys.exit()

jogo()