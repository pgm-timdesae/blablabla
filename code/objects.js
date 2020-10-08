// Describe a person 
// By object initializer = literal notation {}
const person = {
    firstName: 'Tim',       // gescheiden door dubbelpunt, iedere info door een komma
    lastName : 'De Saeger',
    genderCode : 2,
    dayOfBirth : 903564000000,
    earn: 0,
    get earnings(){
        return x;
    },
    set earnings(x){
        this.earn = x;

    },
};
console.log (`My earnings ${person.earnings}`)

console.log(`My name is ${person.firstName} ${person.lastName}`);   //eigenschap aanspreken doe je met puntje of dot

const readibleDayOfBirth = new Date(person.dayOfBirth); // Maak je gebrootedatum leesbaar (via MDN heb je verschillende functies)
console.log(`My date of birth is ${readibleDayOfBirth.toLocaleDateString()}`);   //eigenschap aanspreken doe je met puntje of dot

let readibleGenderCode = ''
switch (person.genderCode){
    case 0: default: readibleGenderCode = 'Niet toepasbaar'; break;
    case 1: readibleGenderCode = 'vrouw'; break;
    case 2: readibleGenderCode = 'man'; break;
    case 3: readibleGenderCode = 'Niet gekend'; break;
}
console.log(`My gender is ${readibleGenderCode}`);   //eigenschap aanspreken doe je met puntje of dot




// Object example 2 
const car = {
    color: 'red',
    wheels: 6,
    is2Hand: false,
    engine: {       //object in een object
        cylinders: 6,
        horsePower: 400,
    },
    drive: function (){
        console.log(`Ì\'m driving`);
    }, 
    toString: function(){
        return `The color of the car is ${this.color}.`  // om kleur aan te spreken in functie: this.color   We moeten binnen dit object kijken want we zitten nog altijd in het object dus 'this.'
    },
    changeColor : function (newColor){
        this.color = newColor;
    },
    666: 'the devil'
};
console.log(car['666']);    // Nu mag je wel vierkante haken gebruiken! eveens bij string waar spaties in staan gebruik je vierkante haakjes.
console.log(`My car is ${car.color}, I have ${car.wheels}.`);
if (car.is2Hand) {
    console.log(`You are very eco friendly! nice job.`);
} else {
    console.log(`You fu*k up the world`);
}
console.log(`The amount of cilinders are ${car.engine.cylinders}`); // om cilinders aan te spreken = car.engine.cylinders (noemen we nested object)
car.drive();
console.log(car.toString());
car.changeColor('rgba(255, 255, 0, 1)');
console.log(car.Color);


// Loop through an object by for...in
for (let prop in car){
    console.log(`The prop ${prop} has the value ${car[prop]}`);
} // Met typeof kan je nagaan welk type iets is

car.color = '#000000';
console.log(`My car is ${car.color}`);

