// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo del biglietto in console, ma l’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).

let prezzo

// Input utente
const kmElement = document.getElementById('km')
const kmValue = kmElement.value
console.log(kmElement)


const ageElement = document.getElementById('età')
const ageValue = ageElement.value
console.log(ageElement)


// SE i km e l'età non sono stati scritti sotto forma di numero
if (isNaN(kmValue) || isNaN(ageValue)) {
    console.log('Numero di km o età valido')
}

// ALTRIMENTI continua 

else {
    const buttonElement = document.getElementById('calcola')
    buttonElement.addEventListener('click', function () {
        // Prezzo pieno biglietto
        let full_price = kmValue * 0.21
        full_price = full_price.toFixed(2) // non permette di avere più di due cifre dopo la virgola
        console.log('Prezzo finale ' + full_price + '€')



        // Sconto età
        let discounted_price
        let sconto

        // SE hai meno di 18 anni 
        if (ageValue < 18) {

            // Sconto del 20%
            sconto = (full_price * 20) / 100
            sconto = sconto.toFixed(2)
            discounted_price = full_price - sconto
            console.log('Prezzo scontato ' + discounted_price + '€')
            prezzo = document.getElementById("prezzo").innerHTML = 'Prezzo finale ' + discounted_price + '€'; // stampare su html il risultato
        }

        // SE hai più di 65 anni 
        else if (ageValue > 65) {

            // Sconto del 40%
            sconto = (full_price * 40) / 100
            sconto = sconto.toFixed(2)
            discounted_price = full_price - sconto
            console.log('Prezzo scontato ' + discounted_price + '€')
            prezzo = document.getElementById("prezzo").innerHTML = 'Prezzo finale ' + discounted_price + '€';

        }

        // ALTRIMENTI paga prezzo pieno
        else {
            console.log('Prezzo finale ' + full_price + '€')
            prezzo = document.getElementById("prezzo").innerHTML = 'Prezzo finale ' + full_price + '€';

        }
    })
}

