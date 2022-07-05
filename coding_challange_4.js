document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", data);

function data(){
     const text = document.querySelector("textarea").value;
    
     const input = text.split("\n");
     
     for(let i=0; i<input.length; i++){
         let intermediate = input[i].split("_");
         let finalstr = intermediate[0] + intermediate[1][0].toUpperCase() + intermediate[1].slice(1);
         console.log(finalstr);
     }


}
