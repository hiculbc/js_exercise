// ***** Day2 exercise ****

// Arrays 

// 1. Is array passed by a value or by a reference 

/* 
All objects are passed by reference in javascript, array is also an object
so they are also passed by reference
As they are passed by reference , the changes in the array are still visible outside
*/

// 2. function to clone an array without loops

/*
There are lot of methods , here i specify 3 of them
 1. recursive way
 2. spread operator
 3. Object.assign() method
*/

// Recursive way

function clone(one,two,index){
    if(index<one.length)
    {
        two.push(one[index]);
        clone(one,two,++index);
    }
}

const one = [1,2,3];
const two = [];
clone(one,two,0);
// console.log(two);

// spread operator

const three = [...two];
// console.log(three);

// Object.assign method

const four = [];
Object.assign(four,three);
// console.log(four);

// 3. methods of array

//3.1 shift
// Basically shift method is removing the  element from the beginning of the array
const array_3  = [1,2,3,4,5,6,7,8,9,2,3,4];
array_3.shift();
console.log(array_3);
// 3.2 unshift
// basically unshift method adds a new element at the beginning of the array
array_3.unshift(4);
console.log(array_3);
//3.3
// slice is the method which return certain part of the array from given array
// with the exclusion of second paramater : slice(left,right) => right exclusive
const new_array3 = array_3.slice(1,2);
console.log(new_array3);
//3.4 splice
// splice is very intereseting method which deletes some elements at a 
// particular place and adds new elements at that place 
// syntactically , splice(a,b,ele1,ele2,ele3)
// at position a ,b no of elements are removed (ele1,ele2,ele3) elements are added at that place
// return deleted elements at the end, but remember elements should be specified with commas
let new_array4 = array_3.splice(2,3,91,92,93);
console.log(new_array4);
console.log(array_3);
// 3.5 pop
// pops the element at the end of array, returns the element
new_array4.pop();
console.log(new_array4);

// Loops 

// 1. reverse the array
const array_4 = [1,2,3,4];
for(let i=array_4.length-1;i>=0;i--)
{
    console.log(array_4[i]);
}
// 2. difference between for...of and for...in

/*
for...in loop is exlusively for the objects, like key-value pairs 
it gives keys , based on the keys we need to draw values from the objects
for...of loop is for iterable objects which are arrays,strings etc
for...of loop directly gives values , for in loop just gives keys, remember
for in loop just iterates the enumerable properties of the object , by 
specifying the keys of the object.
*/

// 3. Iterators 
// 1. Use Map to square each element of array
const array_iter = [2,4,6,8,10];

array_iter.map((x,index,arr) => {
    arr[index] = x*x;
});

console.log(array_iter);
// 2. filter strings from array

const array_iter_32 = [1,"two",3,"four",5,"Six",7,"Eight",9];

const strings = array_iter_32.filter((x) => {
    return typeof(x) == 'string';
});

console.log(strings);
// 3. reduce function
/* reduce function takes two arguments one is callback function and 
the other is initial value, callback function takes four parameters
previousValue,currentValue,currentIndex,array and the initial value
previousValue,currentValue are assigned based on the initial value.
*/

const array_iter_4 = [1,3,5,7,9];

const result = array_iter_4.reduceRight((prev,current) => {
    return prev+current;
});

console.log(result);



