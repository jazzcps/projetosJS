const form = document.querySelector('#formulario');

//impede o envio do formulário. Nós estamos trabalhando localmente, então não precisa fazer um envio real.

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //adquire valores a partir do ID do form

    const peso  = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //declara variáveis que serão utilizadas para o calculo

    if(!peso){
        setResultado('Peso inválido' , false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida' , false);
        return;
    }

    // verifica se os valores recebidos por peso e altura são válidos, ou seja, números reais;
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    //obtem o valor do IMC

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    
    // chama a função que será responsável por exibir resultado
    setResultado(msg, true);

});

//verifica o nível do IMC

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
     
}


// função que calcula o valor do IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

// Função cria paragrafo

function criaP(){
    const p = document.createElement('p');
    return p;
}

//Armazenadora de resultado.

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML= msg;
    resultado.appendChild(p);
}



