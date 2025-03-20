//Onderstaande code is niet perse de beste implementatie er van
//Maar is om te demonstreren hoe je dit probleem stapsgewijs op KAN pakken.
class Game{
    //Een array met kaarten
    deck = ["koning","Koningin","Joker","7","8"];
}

class Player{
    // De property hand (lege array) zodat deze later ingevuld kan gaan worden
    hand = [];

    //funtie om op 'aanvraag' willekeurige kaarten te ontvangen
    ontvang_kaarten(deck){
        //Deze functie kan efficienter maar is om te laten zien wat de stappen zijn
        //Een FOR loop om 2 kaarten te trekken
        for (let i = 0; i < 2; i++ ){
            //Kijk elke keer hoe groot de deck_size is en deze opslaan in de variabel deck_size
            let deck_size = deck.length;
            //Een willekeurig getal kiezen die niet groter is dan het aantal kaarten in de deck
            let willekeur_nummer = Math.floor(Math.random() * deck_size);
            //nadat een willekeurig getal is gekozen gebruiken we dit getal om de kaart uit de deck te pakken
            let kies_kaart = deck[willekeur_nummer];
            //Nu de kaart gekozen is pushen we deze naar de hand property van de speler
            this.hand.push(kies_kaart);
        }
        console.log(this.hand);


    }
}

let spel = new Game();
let speler = new Player();
speler.ontvang_kaarten(spel.deck);
