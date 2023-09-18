// ***** Day 4 ****** 
// Promises

// 1. Breifly explain the states of promises
// A. 
/* First of all , promise is an object , which has basically three states 
1. pending, 2. resolved, 3. rejected
the creation of promise makes it into pending state, based on the operation performed
inside promise, it is categorised into resolved or rejected state
Basically resolved and rejected both account into fulfilled state, you can resolve the promise as resolve() 
and you can reject the promise as reject()
*/

// 2. transform any string to lowercase after 5 seconds 

// without promise : won't work

function transform(s){
    let a;
    setTimeout(() => {
        a = s.toLowerCase();
    },5000);
    return a;
}

console.log(transform("PRAVEEN"));

// let us do this using callback function

function transform_c(s,callback){
    setTimeout(() => {
        s = s.toLowerCase();
        callback(s);
    },5000);
}

transform_c("PRAVEEN",console.log);

// let us do this using promises

function transform_p(s){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(s.toLowerCase());
        },10_000)
           
    });
}

let p = transform_p("RAMADASU").then((res) => console.log(res)).catch((err) => console.log(err));

// 3. Promise chaining to print length

const transformp_3 = (s) => s.toLowerCase();

let p_3 = transform_p("BEAUTIFUL CODE")
            .then((res) => res.length)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));


// Async and await
// Given function 
/* 
function getProcessedData(url){
    return downloadData(url) // return a promise
    .catch((e) => downloadFallbackData(url))
    .then( v => processDataInWorker(v)) // returns a promise
}
*/
/* before proceeding to the question let us understand what is happening in the question 
we called a function with a url it is returning something , let us see what this something is 
something is a promise which is returning another promise whether first promise is fullfilled or rejected
*/

// let us check is it possible to return a promise from promise.then or promise.catch
/* in dup.js we checked whether it is possible to return , we can return anything basically 
if the return is a promise , then we can use another then to carry it out
*/

async function getProcessedData(url){
    try{
    let res1 = await downloadData(url);
    let finalRes1= await res1;

    console.log(finalRes1);

    }
    catch(err){
    let err1 = await downloadFallbackData(url);
    let finalErr1 = await err1;
    console.log(finalErr1);
    }

}
