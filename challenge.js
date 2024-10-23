
const nivelDoHeroi = (nome, xpDoHeroi) => {

    if (xpDoHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpDoHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpDoHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpDoHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpDoHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpDoHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpDoHeroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    return `O herói ${nome} está no nível de ${nivel}`;
}

console.log(nivelDoHeroi("Thalys", "10001"));
