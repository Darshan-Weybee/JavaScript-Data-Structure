document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", data);

function data(){
     const text = document.querySelector("textarea").value;
    
     const input = text.split("\n");
     
     for(let i=0; i<input.length; i++){  // for(const [i, row] of input.entries())
         let intermediate = input[i].toLowerCase().trim().split("_");
         let finalstr = intermediate[0] + intermediate[1][0].toUpperCase() + intermediate[1].slice(1);
         finalstr = finalstr.padEnd(20, ".") + "a".repeat(i+1);
         console.log(finalstr);
     }
}


// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
