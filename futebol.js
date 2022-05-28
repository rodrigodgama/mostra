function pulaLinha () {
    document.write (' <br> ');
    document.write (' <br> ');  
}

function mostra (frase) {
    document.write (frase);
    pulaLinha();
} 

const numeroPensado = Math.round (Math.random ( )*10);
const chuteUmNumero = prompt( 'Digite o Número, Pastel !!!') 

if (numeroPensado==chuteUmNumero) {
    mostra ( 'Você acertou !!!')
} else {
    mostra ('Você Errou !!!. Número correto é ' + numeroPensado )
}