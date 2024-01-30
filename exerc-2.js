let idadeDaPessoa = 27;


/* function age(idade){
    if (idade <= 21){
        return console.log("jovem");
    }else if (idade >= 22 && idade <= 65){
       return console.log("adulto");
    }else {
        return console.log("eduardo");
    }
}  */

const age = (idade) => {
    if (idade <= 21){
        return console.log("jovem");
    }else if (idade >= 22 && idade <= 65){
       return console.log("adulto");
    }else {
        return console.log("eduardo");
    }
}
age(idadeDaPessoa);
