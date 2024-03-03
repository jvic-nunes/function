const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.reduce((acumulador, valorAtual, indice, arrayOriginal) => {
    // Exibindo o índice e o array original
    console.log(`Índice: ${indice}, Valor atual: ${valorAtual}, Array original: [${arrayOriginal}]`);

    // Somando todos os valores
    acumulador += valorAtual;

    // Retornando o acumulador
    return acumulador;
}, 0);

// Calculando a média
const media = resultado / numeros.length;

console.log(`Média: ${media}`);
