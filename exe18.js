    let num= document.querySelector('input#num');
    let lista_num = document.querySelector('select#lista_num');
    let fin = document.querySelector('div#fin');
    let valores_dig =[];

    // Função responsável por saber se o número está vazio.
function Numvazio(nn) {
    if(Number(nn)>=1 && Number(nn)<=100){
    // Caso tenha algum número.
        return true;
    }else {
    // Caso  não tenha algum número.
        return false;
    }
}
    // Função responsável por saber se a lista  está vazia.
function ListaVazio(nn,l) {
    // Caso não esteja vazia .
    if(l.indexOf(Number(nn)) != -1){
        return true;
    }else{
     // Caso esteja vazia .
         return false;
    }
}
function envia() {
    // Se for digitado algum valor  ele será salvo.
    //alert(' Ta indo');
    if (Numvazio(num.value) && !ListaVazio(num.value,valores_dig)) {
    // Adiciona informação ao objeto. 
      valores_dig.push(Number(num.value));
       let item = document.createElement('option');
       item.text =`Valor ${num.value} foi adicionado.`
      lista_num.appendChild(item);
    // Se for colocado outro número ele irá limpar o total de números cadastrados.
      fin.innerHTML= '';
    }else{
    // Caso clicado na opção Enviar sem ter digitado nada.
        alert(' O valor já foi digitado ou foi superior há 100.');
    }
    // Usado para apagar automáticamento o valor digitado 
    num.value= '';
    num.focus()
}
function finaliza() {
   if(valores_dig.length ==0){
    alert('Digite valores antes de fechar ');
   }else{
    let total_de_elementos = valores_dig.length;
    let numero_maior= valores_dig[0];
    let numero_menor= valores_dig[0];
    let soma = 0;
    let media =0;


        //For usado para saber a soma , média , maior número e menor número digitado .
        for(let poss in valores_dig){

        // Condição para saber a soma total dos valores digitados .
        soma+= valores_dig[poss];

        // Condição para saber a média total dos valores digitados .
        media = soma/total_de_elementos;

        // Condição para saber o maior número digitado .      
        if(valores_dig[poss]>numero_maior){
            numero_maior = valores_dig[poss];

        // Condição para saber o menor número digitado .
        }if(valores_dig[poss]<numero_menor){
            numero_menor = valores_dig[poss];
        }
    }

    fin.innerHTML ='';
    fin.innerHTML += `<p>Ao todo foram cadastrados  ${total_de_elementos} números.</p>`
    fin.innerHTML += `<p>O maior número digitado foi ${numero_maior} .</p>`
    fin.innerHTML += `<p>O menor número digitado foi ${numero_menor} .`
    fin.innerHTML +=`<p> A soma de todos os valores cadastrados foi ${soma} . `;
    fin.innerHTML +=`<p> A  média de todos os valores cadastrados foi de ${media} .`;
   }
}






















































// num -> número.
// lista_num -> Números Digitados.
// fin -> Números que irão aparecer.
// valores_dig -> Vetor responsável por quardar os números digitados.
// Numvazio ->  Variável responsável por saber se o número está vazio.
// ListaVazio -> Variável responsável por saber se a lista está vazia.
// nn -> Recebe o número.
// numero_maior -> Variável responsável por saber qual vai ser o maior número perante aos números já digitados.
// numero_menor -> Variável responsável por saber qual vai ser o menor número perante aos números já digitados.
// soma -> Variável responsável por saber a soma de todos os números digitados.
// media -> Variável responsável por saber a média geral de todos os números já digitados.
// poss -> Váriável responsável pelo vetor.











                    