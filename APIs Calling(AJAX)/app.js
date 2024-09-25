let url="https://catfact.ninja/fact";

// *******REQUEST SENDING THROUGH METHOD CHAINING*******

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log("data 1:",data1);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data 2:",data2);
//     return fetch(url);
// })

// .catch((err)=>{
//     console.log(err);
// });

// console.log("Java script asynchronous nature");

async function getfact(){
    try{
        let res= await fetch(url);
        console.log(res);
        let jsdtype= await res.json();
        console.log("DATA IS:",jsdtype);

        let res2= await fetch(url);
        console.log(res2);
        let jsdtype2= await res.json();
        console.log("DATA IS:",jsdtype2);

    }catch(e){
        console.log("ERROR IS::",e);
    }
}