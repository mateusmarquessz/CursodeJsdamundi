/*/ 
Sintaxe basica
Extrutura de decisão (if else)
/*/
/*/
if(codicao) {
    declaracao_1;
} else {
    declaracao_2;
}

if(codicao) {
    declaracao_1;
} else if (codicao_2) {
    declaracao_2;
} else if (codicao_n) {
    declaracao_n;
} else {
    declaracao_final;
}
/*/

/*/ Exemplo /*/

/*/
var idade;
idade = prompt("digite sua idade: ");

if(idade >= 18){
    var maiorIdade = true;
} else {
    var maiorIdade = false;
}

if(maiorIdade){
    document.write("Maior de idade. Pode dirigir!");
} else{
    document.write("menor de idade. :(");
}
/*/ 

/*/ 
Declaração switch

switch(expressao) {
    case rotulo_1:
        declaracoes_1
        [break;]
    case rotulo_2:
        decaracoes_2
        [break;]
    ...
    default;
        decaracoes_padrao
        [break;]
}

/*/

cargo = prompt("Digite seu cargo:");
salario = 2000;

switch (cargo) {
    case "gerente":
        salario *= 1.15; //salario = salario *1.15
        break;
    case "supervisor":
        salario *= 1.10; //salario = salario *1.10
        break;
    default: 
        salario *= 1.05; //salario = salario *1.05
}

console.log("Salario do" + cargo +":" + salario);