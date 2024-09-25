let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");


btn.addEventListener("click" , function(){
    let task=document.createElement("li");
    task.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    task.appendChild(delBtn);
    ul.appendChild(task);

    // console.log(inp.value);
    inp.value="";
});


ul.addEventListener("click",function(event){
    // console.log("button deleted");
    // console.dir(event.target);
    // console.log(event.target.nodeName);

    if(event.target.nodeName == "BUTTON"){
        let item=event.target.parentElement;
        item.remove();
        // console.log("delete it");
    }
    // else {
    //      console.log("dont delete");
    // }
})


// these eventlistener is not applied to new added elemnt through code thus we use event delegation
// let delBtns=document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("button delted");
//         let parent=this.parentElement;
//         console.log(parent);
//         parent.remove();

//     })
// }