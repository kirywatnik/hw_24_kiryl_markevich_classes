class Animal {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    eat(){
        alert('Животное '+this.name+' ест');
    }
}
class Cat extends Animal{
    constructor(name, age){
        super(name,age);
    }
    meay(){
        alert('Кот '+this.name+' мяукает');
    }
}
class Dog  extends Animal{
    constructor(name, age){
        super(name,age);
    }
    gav(){
        alert('Собака '+this.name+' гавкает');
    }
}
let cat = new Cat('vasya', 10);
cat.meay();
let dog = new Dog('sharik' ,3);
dog.gav();
console.log(dog.age);

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22222)
    },5000)
    
}) 
    .then((value) =>{
        console.log(value);
    })


//1 
 class Developer {
    constructor(name){
        this.name = name;
    }
    startWork(){
        console.log(this.name + ' start work');
    }
    endWork(){
        console.log(this.name + ' end work');
    }
 }
 class Frontend extends Developer {
    constructor(name){
        super(name);
    }
    buildWebSite(websiteName){
        console.log(this.name +' start build ' + websiteName);
    }
 }
 class Backend extends Developer {
    constructor(name){
        super(name);
    }
    buildServer(){
        console.log(this.name + ' start build server');
    }
 }
 const john = new Frontend('John');
 console.log(john.name);
 john.startWork();
 john.endWork();
 john.buildWebSite('google');
 const alex = new Backend('alex');
 alex.startWork();
 alex.endWork();
 alex.buildServer();
//2

class User {
    id =  Date.now();
    isAdmin = false;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showInfo(){
        console.log(this.firstName+ ' ' + this.lastName);
    }
}
const men = new User('Sergei', 'Krilov');
console.log(men.isAdmin);
men.showInfo();
console.log(men.id);
const woman = new User('olga', 'brileva');
console.log(woman.id);
//3 
class Rectangle{
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    createBlock(){
        let div = document.createElement('div');
        let s = this.width*this.height+' px квадратных';
        document.body.append(div);
        div.append(s);
        div.style.width = this.width+'px';
        div.style.height = this.height+'px';
        div.style.border = `3px solid ${this.color}`;
    }
}
const rec = new Rectangle('100', '100', 'red');
rec.createBlock();
const rec2 = new Rectangle('200', '200', 'green');
rec2.createBlock();
//4


new Promise((resolve, reject) => {
    setTimeout(() => {
        const string = 'foo';
        resolve(string);
        
    },2000);
})
    .then((value) => console.log(value));