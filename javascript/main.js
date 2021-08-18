let botaoCalcular = document.getElementById('clicar');
let botaoLimpar = document.getElementById('limp');

botaoLimpar.addEventListener('click', limpar);
botaoCalcular.onclick = function(){calcular()};

function limpar(){
    document.getElementById('inPeso').value = '';
    document.getElementById('inAltura').value = '';
    document.getElementById('inNome').value = '';
}

function calcular(){
    let inputPeso = document.getElementById('inPeso').value;
    let inputAltura = document.getElementById('inAltura').value;
    //let resultado = document.getElementById('result');
    let inNome = document.getElementById('inNome').value;

    if (inputPeso === '' || inputAltura === ''){
        alert('Preencha todos os campos')
    }else{
        let valor = (inputPeso / Math.pow(inputAltura, 2)).toFixed(2);

        let classificacao = '';

        if (valor < 19.10){
            classificacao = 'Abaixo do peso'
        }else if(valor < 25.90) {
            classificacao = 'Peso ideal'
        }else if(valor < 27.40){
            classificacao = 'Pouco acima do peso'
        }else if(valor < 32.40){
            classificacao = 'Acima do peso'
        }else if (valor >= 32.40){
            classificacao = 'Obesidade'
        };

        //resultado.textContent = `${inNome}, seu IMC é ${valor} e sua classificação é ${classificacao}!!!`;
        alert(`${inNome}, seu IMC é ${valor} e sua classificação é ${classificacao}!!!`);
    }
}

cl


