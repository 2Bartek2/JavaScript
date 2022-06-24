//destrukturyzacja tablic
const hobbies = ['sports', 'cooking', 'swimming', 'gym']
const newHobbies = ([hobby1, hobby2, hobby3, hobby4]) => {
    console.log(hobby1, hobby2, hobby3, hobby4);
}
newHobbies(hobbies)

const [hobby1, hobby2, hobby3, hobby4] = hobbies
console.log(hobby1, hobby2, hobby3, hobby4);
//destrukturyzacja obiektów

const person = {
    name:'Max',
    age: 30,
    greet(){
        console.log(`Hi, i'm ${this.name}`);
    }
}

const {name, age} = person
console.log(name, age);

const newPerson = ({name,age}) => {
    console.log(name, age);

}
newPerson(person)