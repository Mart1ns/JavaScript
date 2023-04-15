// tipo number

const primeiro_numero = 3;
const segundo_numero = 2;

resultado  = primeiro_numero * segundo_numero;
//console.log(resultado)

// que massa

const zerin = .8;
const unzinho = 1.7;
resultado = zerin / unzinho;
resultado = resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
//console.log(resultado); // ele retorna uma string no toFixed

const cifrao = '\u0024' // u --> caracter de escape
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Math.round e toFixed()
//  nan --> NOT A NUMBER