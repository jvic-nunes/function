/* Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do 
aluno.

a) Declare uma função de nome corrigirProva que tenha apenas um parâmetro chamado prova. Faça commit do resultado.

b) Sabendo que o parâmetro prova será sempre um objeto com o seguinte formato:
 */
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova) {
    let acertos = 0;
    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    const nota = (acertos / prova.questoes.length) * prova.valor;
    console.log(`O aluno ${prova.aluno} acertou ${acertos} questões e obteve a nota ${nota}.`);
}

corrigirProva(prova)