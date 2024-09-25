const url="https://icanhazdadjoke.com/";
let para=document.querySelector("#result");

async function getfact() {
    try{ 
    const config={headers:{Accept:"application/json"} };
    let res=await axios.get(url,config);
    let factdata=res.data.joke;
    return factdata;   
    }catch(e){
        console.log("ERROR IS :::",e);
        return "NO FACT FOUND";
    }

}

let btn=document.querySelector("button");


btn.addEventListener("click" , async()=>{
    let fact=await getfact();
    console.log(fact);
    para.innerText=fact;
})