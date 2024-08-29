let pegar_resultado = calcular_rank(10, 5);
let mostrar_rank = ranks();

function calcular_rank(vitoria, derrota){
    let calcular = vitoria - derrota;
    return calcular;
}

function ranks(){
    let pegar_resultado = calcular_rank(19, 3)
    let rank_final;
    if(pegar_resultado <= 10){
        rank_final = "Ferro"; 
    }else if(pegar_resultado <= 20){
        rank_final = "Bronze";
    }else if(pegar_resultado <= 50){
        rank_final = "Prata";
    }else if(pegar_resultado <= 80){
        rank_final = "Ouro";
    }else if(pegar_resultado <= 90){
        rank_final = "Diamante";
    }else if(pegar_resultado <= 100){
        rank_final = "Lendário";
    }else if(pegar_resultado >= 101){
        rank_final = "Imortal";
    }
    return rank_final;
}

console.log(`O jogador tem o saldo de ${pegar_resultado} vitórias e ele está no nível de ${mostrar_rank}`)