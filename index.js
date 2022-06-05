function imc() {
    // Variaveis para calculo do IMC
    let nomeSobrenome = document.querySelector('#nomeSobrenome').value
    let peso = parseInt(document.querySelector('#peso').value)
    let altura = parseFloat(document.querySelector('#altura').value)

    // Calculo do IMC
    let imc = peso / (altura * altura)

    // Define e mostra nivel de IMC de acordo com o resultado do calculo.
    if(imc < 16){
        return alert(nomeSobrenome + " Seu nivel de IMC é: Magreza Grave, Seu IMC é: " + imc.toFixed(2))
    } 
    else if ( imc > 16 && imc < 17) {
        return alert(nomeSobrenome + " Seu nivel de IMC é: Mogreza Moderado, Seu IMC é: " + imc.toFixed(2))
    } 
    else if(imc > 17 && imc < 18.5) {
        return alert(nomeSobrenome + " Seu nivel de IMC é: Magreza leve, Seu IMC é: " + imc.toFixed(2))
    }
    else if (imc > 18.5 && imc < 25) {
        return alert(nomeSobrenome+ " Seu nivel de IMC é: Saudável, Seu IMC é: " + imc.toFixed(2))
    }
    else if ( imc > 25 && imc < 30) {
        return alert(nomeSobrenome + " Seu nivel de IMC é: Sobrepeso, Seu IMC é: " + imc.toFixed(2))
    }
    else if (imc > 30 && imc < 35) {
        return alert(nomeSobrenome + " Seu nível de IMC é: Obesidade I, Seu IMC é: " + imc.toFixed(2))
    }
    else if (imc > 35 && imc < 40) {
        return alert(nomeSobrenome + " Seu nível de IMC é: Obesidade II, Seu IMC é: " + imc.toFixed(2))
    }
    else {
        return alert(nomeSobrenome + " Seu nivel de IMC é: Obesidade III, Seu IMC é: " + imc.toFixed(2))
    }
}
