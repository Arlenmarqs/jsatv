let livro = {
   titulo: "Dom Casmurro",
   autor: "Machado de Assis",
   ano: 1899,
   descricao: "Machado de Assis escreveu o livro Dom Casmurro no ano de 1899",
 };

// Imprima: "O livro se chama Dom Casmurro."
console.log(`O livro se chama ${livro.titulo}`)
// Imprima: "Machado de Assis escreveu Dom Casmurro em 1899."
console.log(`${livro.autor} escreveu ${livro.titulo} em ${livro.ano}`)
// Imprima: "Livro: ${titulo} (Autor: ${autor}, Ano: ${ano})"
console.log(`Livro: ${livro.titulo} (Autor: ${livro.autor}), Ano: ${livro.ano}`)
// Crie uma variável descricao com a frase completa e imprima.
console.log(livro.descricao)