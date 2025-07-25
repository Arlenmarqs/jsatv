let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Imprima o número 5.
console.log(`Quero ver o número cinco ${matriz[1][1]}`)
// Imprima todos os números da primeira linha.
console.log(`Quero ver os números um, dois e três: (${matriz[0][0]}, ${matriz[0][1]}, ${matriz[0][2]})`)
// Imprima todos os números da segunda linha.
console.log(`Quero ver os números quatro, cinco e seis: (${matriz[1][0]}, ${matriz[1][1]}, ${matriz[1][2]})`)
// Imprima todos os números da terceira linha.
console.log(`Quero ver os números sete, oito e nove: (${matriz[2][0]}, ${matriz[2][1]}, ${matriz[2][2]})`)
// Imprimir todas as linhas (curiosidade só)
for (let i = 0; i < matriz.length; i++) {
  console.log(`matriz ${i + 1}: ${matriz[i].join(', ')}`);
}
// vai tomando 
// testando ele me mostrar na diagonal
for (let i = 0; i < matriz.length; i++) {
  console.log(`Número na diagonal (linha ${i + 1}, coluna ${i + 1}): ${matriz[i][i]}`);
}