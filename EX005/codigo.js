/*/
Vetores (arrays)
um vetor(array) é um tipo de dado estruturado onde se tem um numero fixo de componentes. Geralmente armazena várias variáveis do mesmo tipo, porém em javascript é possivel armazenar tipos diferentes em um mesmo vetor.
/*/

/*/ 
Exemplo de Vetores
/*/

var sul = new Array("RS", "SC", "PR");// "new Arrey = essa sintaxe faz que nos podemos alocar um novo vetor na lingaguem" por tanto o vetor sul é um vetor que ira ter 3 valores começando no 0
document.write("ESTADOS DA REGIAO SUL:");
document.write("<br>");
document.write(sul[0]);
document.write("<br>");
document.write(sul[1]);
document.write("<br>");
document.write(sul[2]);

var sudeste = new Array("SP", "RG", "MG", "ES"); // O resultado é o mesmo porém este é de 4 posições començando no 0 até 3

var tam = sudeste.length; //length é o tamanho do variavel amarzenado no TAM

document.write("<br>ESTADOS DA REGIAO SUDESTE:");

for(i=0; i<tam; i++){
    document.write("<br>");
    document.write(sudeste[i]);
}


var pessoa= [2088812332, "Marcos da Silva", 40, "M"];
document.write("<br> RG:" + pessoa[0] + "<br>");
document.write("NOME COMPLENTO:"+ pessoa[1] + "<br>");
document.write("IDADE:" + pessoa[2] + "<br>");
document.write("SEXO :" + pessoa[3] + "<br>");


var meses= ["jar", "fev", "mar", "abr", "mai", "jun", "jul"];
var dolar= [4.56, 4.89, 4.93, 5.23, 5.45, 5.75, 5.80]; // dois vetores

meses.push("ago"); // metodo push serve para colocar uma informação no final de um vetor
dolar.push(5.95);

document.write("<br> <u> VALOR DO DOLAR:<u> <br>");
for(i=0; i<dolar.length; i++){
    document.write("<br>");
    document.write(meses[i] + ": R$" + dolar[i]);
}

var frutas = ["banana", "laranja", "ameixa", "abacaxi"];
frutas.pop(); // pop remove o ultimo elemento do array
document.write(frutas);

var idades= [25, 30, 32, 37];
idades.unshift(42); // adiciona um ou mais elementos no começo do array
alert(idades);

/*/ 
Metodos imporantes
Shift: Remove o primeiro elemento do vetor;
Splice: Remove ou altera um ou mais elementos do vetor
Slice: Retorna uma faixa de elementos de um vetor
Sort: Ordena os dados em um vetor
Reverse: Inverte as posiçoes dos valores em um vetor
Concat: Junta um ou mais vetores
Join: Junta os valores de um vetor com um caractere de separador
/*/