class Human {
    public name:string;
    public age:number;
    public gender:string;

    constructor(name:string,age:number,gender:string){
        this.name=name,
        this.age = age,
        this.gender = gender
    }
}

const lynn = new Human("yoonsang",24,"male")



const sayHi = (person:Human):string => {
    return `Hello, ${person.name}. You are ${person.age} years old and You are a ${person.gender}!!`
}

console.log(sayHi(lynn));