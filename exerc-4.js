/* Nesta sequência de exercícios criaremos um objeto carro que possuirá 6 membros, sendo 2 propriedades e pelo menos
4 métodos. As propriedades deverão ser um boolean chamado ligado e um number chamado velocidade. Além dos
indicadores de ligado/desligado e de velocidade, este carro deverá possuir métodos para ligar, desligar, acelerar
e desacelerar.

Vamos então aos passos para completar o exercício!!!
a) Criar o objeto carro com apenas as duas propriedades (neste primeiro passo não é necessário criar os métodos):

const carro = {

}

ligado (boolean) : que de deverá ser inicializada com valor false (desligado).
velocidade (number) : que deverá ser inicializada com valor 0 (zero).
b) Acrescentar neste objeto carro um membro chamado ligar que possuirá como valor uma função que implementará 
a seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro já estiver ligado, deverá imprimir uma mensagem no console 
dizendo: Este carro já está ligado. - Se não (se o carro não estiver ligado), deverá alterar a propriedade ligado 
para true.
c) Acrescentar neste objeto carro um membro chamado desligar que possuirá como valor uma função que implementará a 
seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro já estiver desligado, deverá imprimir uma mensagem no console
dizendo: Este carro já está desligado. - Se não (se o carro estiver ligado), deverá: - alterar a propriedade ligado
para false. - atribuir valor 0 (zero) à propriedade velocidade.

d) Acrescentar neste objeto carro um membro chamado acelerar que possuirá como valor uma função que implementará a 
seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro não estiver ligado, deverá imprimir uma mensagem no console 
dizendo: Não é possível acelerar um carro desligado. - Se não (se o carro estiver ligado), deverá: - aumentar em 10
o valor da propriedade velocidade
d) Acrescentar neste objeto carro um membro chamado desacelerar que possuirá como valor uma função que implementará 
a seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro não estiver ligado, deverá imprimir uma mensagem no console 
dizendo: Não é possível desacelerar um carro desligado. - Se não (se o carro estiver ligado), deverá: - diminuir 10 
do valor da propriedade velocidade
e) Em cada um dos 4 métodos (ligar, desligar, acelerar, desacelerar), quando e apenas quando alguma propriedade for 
alterada, imprimir no console uma mensagem mostrando o status atual do carro. Esta mensagem deverá seguir os 
seguinte formato: "Carro [ligado/desligado]. Velocidade: [velocidade].". Com isto, todos os métodos quando alterarem
 alguma das propriedades, imprimirá o status atual do carro. Exemplos de mensagens

Carro desligado. Velocidade: 0.
Carro ligado. Velocidade: 0.
Carro ligado. Velocidade: 30.
f) Após construir todo o objeto com suas propriedades e métodos, deveremos executar os métodos na seguinte ordem:

Desligar o carro
Ligar o carro
Ligar o carro
Acelerar o carro
Acelerar o carro
Desacelerar o carro
Desligar o carro
Acelerar o carro
Desacelerar o carro
As mensagens que deverão ser exibidas no console são: */


const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (carro.ligado){
            console.log("Este carro já está ligado")
        } else {
            this.ligado = true
        }
        console.log("carro " + (this.ligado ? "ligado" : "desligado") + ". velocidade é " + this.velocidade );
    },
    desligar: function () {
        if(!this.ligado) {
            console.log("Este carro já está desligado")
        } else {
            this.ligado = false
        }
        console.log("carro " + (this.ligado ? "ligado" : "desligado") + ". velocidade é " +  this.velocidade );
    },
    acelerar: function () {
        console.log("ligado", this.ligado);
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado");
        } else {
            this.velocidade += 10
        }
        console.log("carro " + (this.ligado ? "ligado" : "desligado") + ". velocidade é " + this.velocidade );
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possivel desacelerar um carro desligado");
        } else {
            this.velocidade -= 10
        }
        console.log("carro " + (this.ligado ? "ligado" : "desligado") + ". velocidade é " + this.velocidade );
    }
}

carro.desligar();
carro.ligar();   
carro.ligar();  
carro.acelerar();
carro.acelerar(); 
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar()






