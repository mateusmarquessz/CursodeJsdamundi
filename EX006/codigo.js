/*/ 
Matrizes
uma matriz ou array didimensional é um tipo de dado estruturado onde se tem um número fixo de componentes em duas dimensões
uma matriz 3x3 é igual um jogo da velha
/*/

/*/EXEMPLOS DE MATRIZES/*/

var matint = [[3,6,9], [2,4,6], [1,2,3]]; // valor 3 está amarmazenado na coluna 0 e linha 0 desta matriz, o numero 6 está amarmazenado na coluna 1 linha 2, e o numero 2 está armazenado na coluna 2 linha 1

for(let lin=0 ; lin<3; lin++){ // let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada
    for(let col=0; col<3; col++)
        document.write(matint[lin] [col] + "");

    document.write("<br/>");
}

var notas = [[4.5, 6.5, 8.7],[8.5, 9.7, 9.9]]; // declara as matrizes

var colunas = notas[0].length; // length é um metodo que nos da um tamanho de uma matriz, significa que queremos só o numero de colunas dessa matriz

acu = 0;
for(let i=0; i<colunas; i++){
    acu= acu + notas [1] [i];  // notas da maria na matriz é 1 as de Joao é 0
}

var media = acu/colunas;
document.write("Media da Maria: " + media);

/*/JOGO DE XADREZ/*/

var tabuleiro = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']];

    console.log(tabuleiro.join('\n') + '\n\n');

    tabuleiro[4] [2] = tabuleiro [6] [2]; // peão p para campo [4,2]
    tabuleiro[6] [2] = '';
    console.log(tabuleiro.join('\n'));