//Create a function that returns the name of the winner

//A class applied to create fighter objects

class Figher {
  constructor(name, health, damagePerAttac) {
    this.name = name;
    this.health = health;
    this.damagePerAttac = damagePerAttac;
  }
}

const fighterOne = new Figher("satami", 20, 5);

const fighterTwo = new Figher("Joji", 5, 4);

//Function will have three parameters
//First and second parameter will be a Fighter object
//The third parameter will be the attacker

function whoIsWinner(fighter1, fighter2, firstStrike) {
  while (fighter1.health > 1 && fighter2.health > 1) {
    if (firstStrike === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttac;
      fighter1.health -= fighter2.damagePerAttac;
      if (fighter1.health <= 0) {
        return fighter1.name;
      } else if (fighter2.health <= 0) {
        return fighter2.name;
      }
    } else if (firstStrike === fighter2.name) {
      fighter1.health -= fighter2.damagePerAttac;
      fighter2.health -= fighter1.damagePerAttac;
    }
    console.log(fighter1.health);
    console.log(fighter2.health);
  }
}

// console.log(whoIsWinner(fighterOne, fighterTwo, fighterOne.name));
