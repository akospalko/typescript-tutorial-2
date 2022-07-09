"use strict";
function createObj(settings) {
    console.log(settings.title, settings.position);
}
;
createObj({ title: "My heart", position: '5' });
;
function getCustomer(id) {
    //call API
    //return fetched customer;
    return {
        id: id,
        fName: 'Josh',
        lName: 'Strong',
        //age: 25
    };
}
function getGoldenCustomer(id) {
    return {
        id: id,
        fName: 'Weak',
        lName: 'Morris',
        age: 25,
        isPreferred: true
    };
}
class Greet {
    toGreet(msg) {
        return `Hello ${msg.greeting}`;
    }
}
let greeting1 = new Greet();
let greetPerson = greeting1.toGreet({ greeting: 'Joshy' });
let myAccount = {
    accountNumber: '12345',
    balance: 9999
};
// GENERICS
//#6
let strArr; // arr of strings
strArr = ['a', 'b', 'c', 'd'];
//#7
class List {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem() {
        console.log(this.items);
        return this.items;
    }
}
const myNumList = new List();
myNumList.getItem(); // []
myNumList.addItem(5);
myNumList.getItem(); // [5]
myNumList.addItem(105);
myNumList.getItem(); // [5, 105]
//myNumList.addItem('1005'); // Type Error
const myStringList = new List();
myStringList.addItem('this'); // ['this']
myStringList.getItem();
myStringList.addItem('is'); // ['is']
myStringList.addItem('generics');
myStringList.getItem(); // ['generics']
//myStringList.addItem(55); // Type Error
// Generics as function parameters
//#7
function processData(data) {
    //process data...
    console.log(data);
}
processData(50);
processData('5');
processData(false);
