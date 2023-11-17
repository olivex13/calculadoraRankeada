calculate("Tony Stark", 70, 30)
calculate("Thor", 130, 30)
calculate("Homem Aranha", 20, 10)
calculate("Homem Formiga", 20, 3)
calculate("Loki", 60, 4)
calculate("Doutor Estranho", 90, 6)
calculate("Thanos", 300, 30)

function calculate(player, wins, loses) {
    let ranking = wins - loses
    let ranked

        if (ranking <= 10){
            ranked = "Ferro"
        }
        else if (ranking >= 11 && ranking <= 20){
            ranked = "Bronze"
        }
        else if (ranking >= 21 && ranking <= 50){
            ranked = "Prata"
        }
        else if (ranking >= 51 && ranking <= 80){
            ranked = "Ouro"
        }
        else if (ranking >= 81 && ranking <= 90){
            ranked = "Diamante"
        }
        else if (ranking >= 91 && ranking <= 100){
            ranked = "Lendário"
        }
        else if (ranking >= 101){
            ranked = "Imortal"
        }
        console.log(`O Jogador ${player} tem ${wins} vitórias, ${loses} derrotas e está no ranking: ${ranked}`)
}