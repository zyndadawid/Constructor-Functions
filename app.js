/*Constructor Functions 
That've been called the best way to deal with OOP becouse it's useing less memory. We create prototype Functions like call() apply() bind()

Important is to use uppercase so we can attack this keyword from function ELF to const peter.

Also to use Constructor Functions we have to use new keyword every time we create objet

To create actual function we have to use function() instade of => becosue => are lexicaly scoped so this.weapon is gonna go global scope. function() are dinamicly scoped so they will go for whatever is calling the function() in this case it is const peter and const sam

from Andrei Neagoie

*/

//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

// Here's where we actualy create a propotype Function attack

Elf.prototype.attack = function() {
  return "attack with " + this.weapon;
};

// Here's where we create a objces that can use our prototype functions
const peter = new Elf("Peter", "stones");
console.log(peter.attack());

const sam = new Elf("Sam", "bow");
console.log(sam.name + " " + sam.attack());
