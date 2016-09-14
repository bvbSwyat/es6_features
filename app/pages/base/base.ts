import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BasePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/base/base.html',
})
export class BasePage {



  constructor(private navCtrl: NavController) {
    const PI = 3.141593;
    console.log('----------------------------');
    console.log('const PI = ', PI);
    console.log('------------Arrays----------------');

    console.log('------------functions with typed params---------------');
      function getArrayElLength(x: string[], pos: number) {
        let position = pos;
          return x[position].length;
      }
      let length: number = getArrayElLength(['string1', '2'], 1);

      console.log(length);


    console.log('-------------arrow functions---------------');

    var myS = (height: number, width: number) => height * width;
    console.log(myS(5, 2));

    console.log('----------------------------');
  }
}
interface iAnimal {
    environment: string;
    age: number;
}

class Animal {
    environment: string;
    age: number;
    stop: () => string;

    constructor(environment: string, age: number) {
      this.environment = environment;
      this.age = age;
      this.stop = () => 'Animal stopped!';
    }

    run(speed: number) {
      return 'Animal is running'+ speed +' km/h. Animal age - '+ this.age;
    }
}

class Fish extends Animal {
  type: string;
  constructor(environment: string, age: number, type: string) {
    super(environment, age);
    this.type = type;
  }
}

var wolf = new Animal('forest', 25);
console.log(wolf.run(15), wolf.stop());
var shark = new Fish('water', 35, 'sea');
console.log(shark.run(25));

var dog : iAnimal;
console.log(dog);
