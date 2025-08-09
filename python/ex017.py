from math import hypot
ca = float(input('Qual a medida do cateto adjacente? '))
co = float(input('Qual a medida do cateto oposto? '))
h = hypot(ca, co)
print(f'O valor da hipotenusa será de {h :.2f}')