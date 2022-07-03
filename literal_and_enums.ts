const FlipCoin = (): 'Head' | 'Tail' => Math.random() < 0.5 ? "Head": "Tail"

console.log(FlipCoin())


// enum Suit {
//     HEARTS = 0,
//     SPADEDS = 0,
//     DIAMONDS = 0,
//     CLUBS = 0,
// }

enum Suit {
    HEARTS = 'HEARTS',
    SPADEDS = 'SPADEDS',
    DIAMONDS = 'DIAMONDS',
    CLUBS = 'CLUBS',
}

console.log(Suit.CLUBS)


type Suit2 = 'hearts' | 'spades' | 'diamonds' | 'clubs'
const suit : Suit2 = 'hearts'
console.log(suit)


const suitMeanings = (suit: Suit) => {
    if(Suit.HEARTS === suit)  {
        return 'The clezgy and the struggle to achieve inner joy'
    } else if(Suit.SPADEDS === suit)  {
        return 'The warrior class institutionalised into the nobility, and the fractionous of life'
    } else if(Suit.DIAMONDS === suit)  {
        return 'The merchant class and the exclitment of wealth creation'
    } else if(Suit.CLUBS === suit)  {
        return 'The peasantry and achievement through work' 
    } else {
        return 'Unknown'
    }
}

console.log(suitMeanings(Suit.CLUBS))