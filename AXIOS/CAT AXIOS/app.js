let url="https://catfact.ninja/fact";
let para=document.querySelector("#result");

async function getfact() {
    try{ 
    let res = await axios.get(url);
    let factdata=res.data.fact;
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