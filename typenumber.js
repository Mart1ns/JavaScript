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

// temos 5 tipos primitivos no js, number, estring, boolean, undefined e null

//Math.round e toFixed()
//  nan --> NOT A NUMBER