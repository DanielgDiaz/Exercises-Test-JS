function notas (number){
    if (number >= 0 && number < 3){
    return'Muy Deficiente';
}
    if (number >= 3 && number < 5){
        return('Insuficiente')
    }

    if (number >= 5 && number < 6){
        return('Suficiente');
    }

    if(number == 6) {
        return('Bien')
    }

    if (number >= 7 && number < 9) {
        return('Notable')
    }

    else if (number >= 9 && number == 10){
        return('Sobresaliente')
    }
    
    else
}

module.exports = notas
