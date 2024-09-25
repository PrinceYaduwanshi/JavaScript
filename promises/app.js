// CALLBACK HELL

// function savetoDB(data , success , failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }

// }

// savetoDB(
//     "vastavikprince" , 
//     ()=>{
//         console.log("success callback");
//         console.log("data saved");
//         savetoDB(
//             "helloworld" , 
//         ()=>{
//             console.log("success callback");
//             console.log("data 2 saved");
//             savetoDB(
//                 "vastavikprem" , 
//                 ()=>{
//                     console.log("success callback");
//                     console.log("data 3 saved");
//                 } ,
//             ()=>{
//                 console.log("failure callback");
//                 console.log("data 3 not saved");
//             });
//         } ,
//         ()=>{
//         console.log("failue callback");
//         console.log("data 2 not saved");        
//     });
//     },
//     ()=>{
//         console.log("failure calbback");
//         console.log("data not saved");
//     });


// PROMISES

// function savetoDB(data){
//     return new Promise((resolve , reject) =>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//         if (internetspeed>4){
//             resolve("success::: data saved");
//         }else{
//             reject("failure::: weak connection");
//         }
//     });
// }
// PROMISES THEN & CATCH

// savetoDB("data")
//     .then((result)=>{
//     console.log("data 1 was saved");
//     console.log(result);
//     return savetoDB("data 2");
//     })
//     .then((result)=>{
//         console.log("data 2 was saved");
//         console.log(result);
//         return savetoDB("data 3");
//     })
//     .then((result)=>{
//         console.log("data 3 was saved");
//         console.log(result);
//     })
//     .catch((error)=>{
//     console.log("promise was not solved");
//     console.log(error);
//     })



// CALLBACK HELL FOR CHANGING COLOUR

// h1=document.querySelector("h1");
// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor){
//             nextcolor();
//         }
//     },delay);
// }

// changecolor("red",1000, ()=>{
//     changecolor("green",1000, ()=>{
//         changecolor("yellow",1000 ,()=>{
//             changecolor("orange",1000,()=>{
//                 changecolor("blue",1000,()=>{
//                     changecolor("pink",1000);
//                 });
//             });
//         });
//     });
// });


//PROMISES FOR COLOUR CHANGE 

h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
}

changecolor("red",1000)
    .then(()=>{
        console.log("red color applied");
        return changecolor("orange",1000);
    })
    .then(()=>{
        console.log("orange color applied");
        return changecolor("green",1000);
    })
    .then(()=>{
        console.log("green color applied");
        return changecolor("blue",1000);
    })
    .then(()=>{
        console.log("blue color applied");
    })
// NO NEED TO WRITE CATCH FUNCTION AS NO ERROR WILL BE GENERATED AS ONLY COLOUR HAS TO BE CHANGED 