var numero, contador = 0
numero = prompt ("Digite um numero qualquer entre 10 e 100: ")

if ((numero < 10) || (numero > 100))
{
    alert ("Valor fora do intervalo especificado!")
}
else
{
    while (contador <= numero)
    {
        document.write (contador + "<br/>")
        contador++
    }
}