/*let person = {
    name: "Amy",
    age: 39
  };
  
  console.log(person);

 person.name = "Amy";

  console.log(person.name);

 person.age = "38";

  console.log(person.age);*/

let person = {
    name: "Amy",
    age: 39
  };
 //Dot notation: Deze wordt meestal gebruikt
person.name = "Amy";
//Bracket notation. Deze wordt vaak gebruikt als er geen property bekend is bij het schrijven van de code.
person["name"]= "Amy"; 
  console.log(person);

let evaluations = {
    evaluation1: 7,
    evaluation2: 10,
    evaluation3: 9
  };

  console.log(evaluations);
/*uitkomst: 
C:\Users\boere\Documents\Opleiding WebDev\Winc_Academy\JS Reference_opdracht>node script.js
{ name: 'Amy', age: 39 }
{ evaluation1: 7, evaluation2: 10, evaluation3: 9 }*/

//const kleur = ["groen",'blauw','rood'];
//console.log(kleur.length);
//antwoord in opdrachtprompt = "3"
//de array is kleur

//Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".
//const kleur = ["groen",'blauw','rood'];
//console.log(kleur[0]);

/*Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood". 
Ga ervan uit dat je niet weet hoeveel elementen er in de array gaan zitten. array[3] 
gaat dus niet de juist oplossing zijn als je straks 5 elementen in de array hebt.*/
//const kleur = ["groen",'blauw','rood'];
//console.log(kleur.length-1);

/*Merk op dat het laatste element in de array de key mijnArray.length-1 heeft, 
want length geeft het aantal elementen aan. Omdat er bij 0 begonnen wordt met het
tellen van de keys is de laatste key dus altijd mijnArray.length-1 (tenzij er geen elementen in de array zitten).*/
// DIT WERKT NIET EN IK KAN NERGENS EEN OPLOSSING VINDEN

//Voeg een 4de element toe aan je array met de push method. array.push() Resultaat: ['groen, 'blauw, 'rood', 'geel']
/*const kleur = ["groen",'blauw','rood'];
kleur.push('geel');
console.log(kleur);*/

//Voeg een cijfer toe aan je array met de push methode: Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
/*const kleur = ["groen",'blauw','rood'];
kleur.push('geel', 5);
console.log(kleur);*/

//Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: 
//{greeting: "hi ik ben een object"} Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]

/*let greeting = {
    greeting: "Hi ik ben een object"
  };

const kleur = ["groen",'blauw','rood'];
kleur.push('geel', 5, greeting);
console.log(kleur);*/

//Log alleen de begroeting van het object (het laatste element), naar de console.
let greeting = {
    greeting: "Hi ik ben een object"
  };

const kleur = ["groen",'blauw','rood'];
kleur.push('geel', 5, greeting);
console.log(kleur[5]);

//DEEL 3
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
//Log de naam van het laatste kattenras.
console.log(catBreeds[2].name)
//Log de energy levels van de eerste kat.
console.log(catBreeds[0].energy_level)
//Log het eerste temperament van de temperamenten van de tweede kat.
console.log(catBreeds[1].temperament[1])
//Log het laatst temperament van de temperamenten van de derde kat.
console.log(catBreeds[2].temperament[4])
//Log het favoriete voedsel van de derde kat
console.log(catBreeds[2].food.favourite_food)
