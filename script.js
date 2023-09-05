// Exercicio 1

const hour = new Date().getHours();

if (hour >= 6 && hour <= 18) {
    console.log("Solzão na cara");

} else {
    console.log("Anoiteceu e ta frio");
}

// Exercicio 2

for (var a = 2; a <=20; a += 2) {
    console.log(a);
}

// Exercicio 3

function Olá() {
    console.log ("Olá, tudo bem?");
}

Olá();

// Exercicio 4

function meuNome(Sávio) {
    console.log ("Meu nome é " + Sávio);
}

meuNome("Sávio");

// Exercicio 5

function Eu(nome, idade, musica) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e meu estilo musical favorito é ${musica}`);
}

Eu("Sávio Lima", 28, "pop rock/forro");

// Exercicio 6

function Gostos(filme, musica) {
    console.log(`Meu filme é ${filme}, musica favorita é ${musica}`);
}

Gostos("Jogador nº1", "Poema");

//Exercicio 7

function number(triplo){
    return triplo*3;
}

    console.log(`O Triplo desse número é ${number(18)}`);

//Exercicio 8

