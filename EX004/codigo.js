/*/ 
Extruturas de repetição

while
do- while
for


while (codicao) = verdadeira
declaracao
/*/ 

/*/ exemplo/*/

n = 0;
x = 0;
while (n<4) { // para a condiçaõ realizar o n tem que ser menor que 4, isso significa que tudo que estiver dentro do while sera executado
    n++;
    x += n; // x= x+n
    console.log(x);
}

/*/

    do
        decalracao
    while(codicao);

    executa até a codicao ser falsa

/*/

/*/ exemplo /*/

i = 0;

do {
    i= 1 +1
    console.log(i);
} while (i< 5);

/*/ 

for ([expressaoInicial]; [codicao]; [incremento])
    declaracao
    for usa um contador para executar um bloco de açoes uma determinada quantidade de vezes
/*/

/*/exemplo/*/

var cont;
for (cont = 0; cont<10; cont++)
{
    console.log("Jose da Silva");
}
// O nome Jose da Silva será mostrado 10 vezes no console