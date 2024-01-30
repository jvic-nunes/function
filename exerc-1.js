const objeto = {
    nome : "johnny",
    idade : "23",
    profissao : "estudante",
    altura : "190"
}
function apresentacao(objeto){
   return console.log({...objeto})
    console.log({...objeto});
}
apresentacao(objeto);

