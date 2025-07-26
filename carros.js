const carro = {
   marca: "Toyota",
   modelo: "Corolla",
   ano: 2020
 };

 const filme = {
   titulo: "Matrix",
   diretor: "Wachowski",
   ano: 1999
 };

// Imprima: "O carro é da marca Toyota."
console.log(`O carro é da marca {carro.marca}.`)
// Imprima: "O modelo do carro é Corolla, fabricado em 2020."
console.log(`O modelo do carro é ${carro.modelo}, fabricado em ${carro.ano}.`)
// Imprima: "Matrix foi dirigido por Wachowski em 1999."
console.log(`${filme.titulo} foi dirigido por ${filme.diretor} em ${filme.ano}.`)
// Crie uma frase completa com todos os dados do carro.
console.log(`O ${carro.modelo} da ${carro.marca} é um carro de modinha apesar de ser de ${carro.ano}.`)
