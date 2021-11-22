var palabra = prompt("Escribe tu palabra y te indicaremos si es o no es palindromo.") 

var textoEnReversa = reversa(palabra);
var solucion = esPalindromo(palabra,textoEnReversa);
document.write(solucion);

function reversa(texto)
{
    textoEnReversa = texto.split("").reverse().join("");
    return textoEnReversa;
}

function esPalindromo(texto, texto1) 
{ 
    if (texto == texto1)
    {
        return texto + " es palindromo.";
    }
    else return texto + " No es palindromo."
    
}