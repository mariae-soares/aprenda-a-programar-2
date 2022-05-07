const calculoIMC = (peso, altura) => {
    let imc = peso / (altura ** 2)
    
    return imc
    
}

const resultadoIMC = (indiceIMC) => {
    if (indiceIMC >= 18,5 && indiceIMC <= 24,9) {
      return "Normal"
    } else if (indiceIMC >= 25 && indiceIMC <= 29,9) {
      return "Sobrepeso"
    } else if (indiceIMC >= 30 && indiceIMC <= 39,9) {
      return "Obesidade"
    } else if (indiceIMC >= 40) {
      return "Obesidade grave"
    } else {
      return "Faixa não definida"
    }
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}
