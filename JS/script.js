let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p class="p1">${qdtTotalCarne / 1000} kg de Carne</p>`;
    resultado.innerHTML += `<p class="p2">${Math.ceil(qdtTotalCarne / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p class="p3">${Math.ceil(qdtTotalCarne / 2000)} Pet's de Bebida</p>`;

    document.getElementById("adultos").value = '';
    document.getElementById("criancas").value = '';
    document.getElementById("duracao").value = '';

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}



