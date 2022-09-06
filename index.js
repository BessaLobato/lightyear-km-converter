function converte(){
    let valorElemento = document.getElementById("valor")
    let valor = valorElemento.value
    let valorAnoLuz = parseFloat(valor)
    let valorKm = valorAnoLuz * 9460536068.016
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = `${valor} anos-luz são aproximadamente ${parseInt(valorKm)} kilometros`
    elementoValorConvertido.innerHTML = valorConvertido
}