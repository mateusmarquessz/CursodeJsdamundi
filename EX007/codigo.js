/*/ 
FUNÇÕES E STRINGS

De modo geral, função é um "subprograma" que pode ser chamado por um codigo externo á função;
Uma função é composta por um conjunto de instruções que executa uma tarefa ou calcula um valor;
Valores podem ser passados para uma função, que por sua vez retorna um valor resposta.

A montagem de uma função consiste no uso da palavra function, seguida por:

NOME DA FUNÇÃO
Lista de argumentos para a função, entre parenteses e separados por virgulas.
Conjunto de instruções que definem a função entre chaves{}

function NomeDafuncao(arg1, arg2, arg3, ...){
    conjunto de instruções 


    return variavel;
}
/*/

/*/ Exemplo /*/ 

function quadrado(n){
    quad = n*n; // valores que fazem a função funcionarem
    return quad;
}

var valor = 5;
result = quadrado(valor);
alert(result);


function teste(){
    const var1 = "Valor";
    function teste2() {
        document.write("Funcao Interna");
    }
    teste2();
}

teste();
document.write(var1); // não será executado pois a variazel var 1 é declarada para uso interno da função teste()

/*/ Função que retorna /*/

function criarProduto(nome, quantidade){
    return {nome: nome, quantidade: quantidade}
}

var produto = criarProduto("Martelo", 30);
console.log(produto);

/*/ 
Strings 

String é um conjunto de caracteres, geralmente utilizada para representar palavras, frases ou textos;
Stings são palavras, frases, textos, etc;
Em Javascript, strings nada mais são do que um vetor em caracteres.

Exemplo: var str ="BOM DIA!"; B=str[0] O=str [1] !=str[7]
/*/

/*/ Funcoes utilizadas em vetores também funciona com strings, como por exemplo/*/

var str = "Curso Fic de Javascript!";
var l = str.length;
// Retorna 23

var str = "Aula de Javascript";
var result = str.search("Javascript"); // search indentifica a posição aonde começa o valor da posição
// Retorna 8

var str = "Curso de javascript!";
var result = srt.replace("Curso", "Aula");// serve para trocar o nome dentro da string como no exemplo trocamos de curso para aula
//Aula de javascript

var str = "Curso de javascript";
var result = srt.toUpperCase(); // serve para passarmos todas as letras para maisculla
//CURSO DE JAVASCRIPT!
var result2 = str.toLowerCase();// serve para passarmos todas as letras para minuscula
//curso de javascript
