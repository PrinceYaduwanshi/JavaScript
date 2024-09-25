let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

async function getcollege(country) {
    try{ 
        let res=await axios.get(url+country);
        return res.data;
        
    }catch(e){
        console.log(e);
        return [];
    }

}

btn.addEventListener("click" , async()=>{
    let country=document.querySelector("input").value;
    let colleges=await getcollege(country);

    show(colleges);    
})

function show(colleges){
    let list=document.querySelector("#result");
    list.innerHTML="";

    for(college of colleges){
        console.log(college.name);
        let liel=document.createElement("li");
        liel.innerText=college.name;
        list.append(liel);
    }
}