let url="https://dog.ceo/api/breeds/image/random";
let image=document.querySelector("#result");
let btn=document.querySelector("button");


async function getImage() {
    try{ 
    let res = await axios.get(url);
    return res.data.message;   
    }catch(e){
        console.log("ERROR IS :::",e);
        return "NO IMAGE FOUND";
    }

}

btn.addEventListener("click" , async()=>{
    let link=await getImage();
    image.setAttribute("src",link);
    console.log(link);
})