// The interface allow defined attributes to the class
// ? Allow null
export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}
// Dos tipos de definicioes
let data: number | string = 42;

const duck1: Duck = {
  name: "hueg",
  numLegs: 2,
  makeSound: (sound: any) => console.log(sound),
};

const duck2: Duck = {
  name: "dewey",
  numLegs: 2,
  makeSound: (sound: any) => console.log(sound),
};

//the function recivided nulls
duck1.makeSound!("qauad");

export const ducks = [duck1, duck2];
