interface Human {
    name:string,
    age:number,
    gender:string
}

const person = {
    name:'yoonsang',
    age:24,
    gender:'male'
}



const sayHi = (person:Human):string => {
    return `Hello, ${person.name}. You are ${person.age} years old and You are a ${person.gender}!!`
}

console.log(sayHi(person));