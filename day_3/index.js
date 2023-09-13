// ****** Objects ********
// 1. function takes object as input and print its properties

function proper(obj){
    for(const prop in obj)
    {
        console.log(prop);
    }
}

proper({
    a:1,
    b:2,
    c:3
});

// 2. delete a from x = {'a':1,'b':2}

const x = {
    'a':1,
    'b':2
}

delete x.a;
console.log(x);

// 3. references

const temp = x;
temp.a = 4;

console.log(x);

// 4. copy of object

const temp4 = {
    ...x
}

console.log(temp4);

// 5. two objects are equal

function equal(one,two)
{
    let one_a = Object.entries(one).sort();
    let two_a = Object.entries(two).sort();
    console.log(one_a);
    console.log(two_a);
    if(one_a.length != two_a.length)
    return false;
    for(let i=0;i<one_a.length;i++)
    {
        if(one_a[i][0]!==two_a[i][0] || one_a[i][1]!==two_a[i][1])
        return false;
    }
    return true;
}
const temp1 = {
    d:4,c:3,b:(a,b) => a+b,a:1
}
const temp2 = {
    a:1,c:3,b:(a,b) => a+b,d:4
}

let l = (a,b) => (a+b);
let m = (c,d) => (c+d);

console.log(l.toString() === m.toString());

console.log(equal(temp1,temp2));

// Classes

// 1. implement queue using classes
class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(x){
        this.queue.push(x);
    }
    dequeue(){
        if(this.isEmpty())
        return -1;
        this.queue.shift();
    }
    front(){
        if(this.isEmpty())
        return -1;
        return this.queue[0];
    }
    isEmpty(){
        return this.queue.length == 0;
    }
}

let q = new Queue();
q.enqueue(2);
q.dequeue();
console.log(q.isEmpty());

// 2. instanceOf 

/* instanceOf operator tells whether the parent prototype present in the chain of 
object prototype.
For your info : prototype is the properties that are transferred to instances 
created from the parent
*/

function Person(firstname,secondname)
{
    this.a = firstname;
    this.b = secondname;
}

let p = new Person("praveen","baira");
console.log(p instanceof Person);

// 3 . callbacks 
/* there are two types of callbacks asynchronous and synchronous callbacks
if a callback is given to asynchronous function it is called asynchronous callback
or if a callback is given to synchronous function it is synchronous callback
asynchronous callback executes after some time, where as synchronous callback executes 
immediately with the execution of main function
*/





