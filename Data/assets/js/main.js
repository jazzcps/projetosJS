const h1 = document.querySelector('.container h1');

function zeroAEsquerda (num) {
    return num >= 10? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


const data = new Date ();

//Os dias da semana poderiam ser um array.
// const diasSemana = ['Domingo', 'Segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
//return diasSemana[diaSemana];

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto
        case 4: diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        default:
            diaSemanaTexto:'';
            return diaSemanaTexto;
    }
}

//Aqui, também poderia ser criado um array, no lugar de utilizar uma função com swtich. 
// Ex: const meses = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//return meses[numeroMes];

function getNomeMes(numeroMes){
    let momeMes;

    switch (numeroMes){
        case 0:
            momeMes = 'janeiro';
            return momeMes;
        case 1:
            momeMes = 'fevereiro';
            return momeMes;
        case 2:
            momeMes = 'março';
            return momeMes;
        case 3:
            momeMes = 'abril';
            return momeMes;
        case 4:
            momeMes = 'maio';
            return momeMes;
        case 5:
            momeMes = 'junho';
            return momeMes;
        case 6:
            momeMes = 'julho';
            return momeMes;
        case 7:
            momeMes = 'agosto';
            return momeMes;
        case 8:
            momeMes = 'setembro';
            return momeMes;
        case 9:
            momeMes = 'outubro';
            return momeMes;
        case 10:
            momeMes = 'novembro';
            return momeMes;
        case 11:
            momeMes = 'dezembro';
            return momeMes;

        default:
            nomeMes:'';
            return nomeMes;
    }
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()},` + 
    ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );

}
h1.innerHTML = criaData(data);
console.log(criaData);

//const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle:'full', timeStyle:'short'});