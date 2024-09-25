// async function greet() {
//     return "helloworld";
// }

// greet()
//     .then((result)=>{
//         console.log("promise resolved");
//         console.log("result was",result)
//     })
//     .catch((err)=>{
//         console.log("promise rejected", err)
//   

h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
}

async function demo(){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("blue",1000);
    await changecolor("yellow",1000);
    await changecolor("pink",1000);
}

demo();