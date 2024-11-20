function one(){
    return[`isso e otimoooooo!
        fico muito feliz que esteja bem ${nome}!
        voce e incrivel, continue com energia
        positiva isso contagia poe crer!<3`]
}

function two(){
    return[`parece que algo te fez ficar assim:(
        mais nao se preocupe! acolha o seu sentimento
        negar ou reprimir um sentimento nao e a melhor
        maneira de lidar com ele!
        chore se quizer ninguem ta vendo!nao quarde essa
        dor para si mesmo, voce vai ficar bem ${nome} `]
}

function thee(){
    return[`voce deve se acalmar nao deixe que o estresse
        ou a raiva estraguem seu dia, respire um pouco e 
        tome cuidado com suas palavras por que mesmo estando 
        com raiva nao deve falar algo que pode machucar outras pessoas:)`]
}


const sentiments = []
const option = ''
do{
    let nome = prompt('Oiii bem vindo ao sentimental diary ,por gentileza digite seu nome <3' )
    alert(`Ola ${nome} qual sentimento voce esta sentido hoje? 
        1-Feliz
        2-Triste
        3-Raiva 
        4-Ansioso
        5-Solitario
        6-sair` )
switch (nome) {
    case '1':
        let happy = one()
        alert(`esta feliz!
        ${happy.join}`)
        break;

    default:
        break;
}

}while (nome !== '6')