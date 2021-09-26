function calcularImc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let caixaResultado = document.getElementById('caixaResultado')
    let imc = (peso / (altura * altura)).toFixed(2)
    if (nome !== '' && altura !== '' && peso !== ''){
        if (imc < 18.5){
            caixaResultado.innerText = `${nome} seu IMC é de ${imc} e você está abaixo do peso.`
        } else if (imc >= 18.5 && imc < 25){
            caixaResultado.innerHTML = `${nome} seu IMC é de ${imc} e você está com o peso normal.`
        } else if (imc >=25 && imc < 30){
            caixaResultado.innerHTML = `${nome} seu IMC é de ${imc} e você está com sobrepeso.`
        } else if (imc >=30 && imc < 35){
            caixaResultado.innerHTML = `${nome} seu IMC é de ${imc} e você está com obesidade grau 1.`
        } else if (imc >=35 && imc < 40){
            caixaResultado.innerHTML = `${nome} seu IMC é de ${imc} e você está com obesidade grau 2.`
        } else {
            caixaResultado.innerHTML = `${nome} seu IMC é de ${imc} e você está com obesidade grau 3.`
        }
    } else {
        caixaResultado.textContent = 'Por favor, preencha todos os campos!'
    }        
}