var inputs = document.getElementById("inp");
let text = document.querySelector(".text")

function Add(){
    // checking if the input value is null
    if(inputs.value == ""){
        alert("Please enter task");
    }else{
        // adding task as list
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        // appending to the div named text
        text.appendChild(newEle);
        // reseting the input value to null
        inputs.value="";
        // delete on clicking trash icon
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
    
}