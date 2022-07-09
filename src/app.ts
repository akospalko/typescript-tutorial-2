//Interfaces: Taste great - Calories
// USING INTERFACE AS A TYPE:
//#1
interface ISettings {
    title: string, 
    position: string,
}

function createObj(settings: ISettings) {
    console.log(settings.title, settings.position);
};
createObj({title: "My heart", position: '5'});

//#2
//simulate a RESTful API call:
interface Customer {
    id: number,
    fName: string,
    lName: string,
    age?: number  // optional
};

function getCustomer(id: number): Customer {
    //call API
    //return fetched customer;
    return {
        id: id,
        fName: 'Josh',
        lName: 'Strong',
        //age: 25
    }
}

//#3
// extend an interface
interface GoldCustomer extends Customer {
    isPreferred: boolean;
} 

function getGoldenCustomer (id: number): GoldCustomer {
    return {
        id: id,
        fName: 'Weak',
        lName: 'Morris', 
        age: 25,
        isPreferred: true
    }
}


// USING INTERFACE AS A PARAMETER TYPE:
//#4
/* using an interface inside another interface, w/o extension.
 + how to implement an interface with a class */

interface IMessage {
    greeting: string;
}

interface IGreet {
    toGreet(msg: IMessage): string;
}

class Greet implements IGreet { // we must implement IGreet interface's toGreet method
    toGreet(msg: IMessage): string { // we also apply the IMessage interface
       return `Hello ${msg.greeting}`;
    }
}
let greeting1 = new Greet();
let greetPerson = greeting1.toGreet({greeting: 'Joshy'});

//#5
//type vs interface
type account = string | {accountNumber: string, balance: number};

let myAccount: account = {
    accountNumber: '12345',
    balance: 9999
};

// GENERICS
//#6
let strArr: Array<string>; // arr of strings
strArr = ['a', 'b', 'c', 'd'];

//#7
class List<T> {
    private items: T[] = [];
    addItem(item: T) {
        this.items.push(item);
    } 
    getItem() {
        console.log(this.items);
        return this.items;
    }
}

const myNumList = new List<number>();
myNumList.getItem(); // []
myNumList.addItem(5); 
myNumList.getItem(); // [5]
myNumList.addItem(105); 
myNumList.getItem(); // [5, 105]
//myNumList.addItem('1005'); // Type Error
const myStringList = new List<string>();
myStringList.addItem('this'); // ['this']
myStringList.getItem();
myStringList.addItem('is'); // ['is']
myStringList.addItem('generics');
myStringList.getItem(); // ['generics']
//myStringList.addItem(55); // Type Error

// Generics as function parameters
//#7
function processData<T>(data: T) {
    //process data...
    console.log(data);
}

processData<number>(50);
processData<string>('5');
processData<boolean>(false);