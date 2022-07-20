// Slice
// Substring
// Substr
// Replace
// Concat
// Trim
// padStart
// padEnd

// repeat()
// split(), join()
// includes(),  startsWith(), endsWith()
// .toLowerCase,   .toUpperCase,
// .length, indexOf(),   lastindexOf()

String.prototype.sliceMethod = function(first = "a", second = "a"){
    let len = this.length;
    if(first == "a"){
        return this;
    }
    else if(second == "a"){
        let st = "";
        if(0 <= first && first < len){
            for(let i=first; i<len; i++){
                st = st + this[i];
            }
            return st;
        }
        else{
            for(let i=len-Math.abs(first); i<len; i++){
                st = st + this[i];
            }
            return st;
        }
    }
    else{
        let st = "";
        if(0 <=first && first <len && 0 <=second && second < len){
            for(let i=first; i<second; i++){
                st = st + this[i];
            }
            return st;
        }
        else if(first<0 && second<0){
            for(let i=len-Math.abs(first); i<len-Math.abs(second); i++){
                st = st + this[i];
            }
            return st;
        }
        else{
            for(let i=first; i<len-Math.abs(second); i++){
                st = st + this[i];
            }
            return st;
        }
    }
}
String.prototype.substringMethod = function(first, second = "a"){
    let len = this.length;
    if(second == "a"){
        let st = "";
        if(0 <= first && first < len){
            for(let i=first; i<len; i++){
                st = st + this[i];
            }
            console.log(st);
        }
        else{
            for(let i=0; i<len; i++){
                st = st + this[i];
            }
            console.log(st);
        }
    }
    else{
        let st = "";
        if(0 <=first && first <len && 0 <=second && second < len){
            for(let i=first; i<second; i++){
                st = st + this[i];
            }
            console.log(st);
        }
        else if(first>0 && second<0){
            for(let i=0; i<first; i++){
                st = st + this[i];
            }
            console.log(st);
        }
    }
}
String.prototype.substrMethod = function(first, second = "a"){
    let len = this.length;
    if(second == "a"){
        let st = "";
        if(0 <= first && first < len){
            for(let i=first; i<len; i++){
                st = st + this[i];
            }
            console.log(st);
        }
        else{
            for(let i=len-Math.abs(first); i<len; i++){
                st = st + this[i];
            }
            console.log(st);
        }
    }
    else{
        let st = "";
        if(0 <= first && first < len){
            for(let i=first; i<first+second; i++){
                st = st + this[i];
            }
            console.log(st);
        }
        else{
            for(let i=len-Math.abs(first); i<len-Math.abs(first)+second; i++){
                st = st + this[i];
            }
            console.log(st);
        }
    }
}
String.prototype.replaceMethod = function(word,newWord){
    let len = this.length;
    let wordlength = word.length;
    let firstIndex;
    let lastIndex;
    for(let i=0; i<len; i++){
        if(word[0] == this[i]){
            let check = "";
            for(let j=i; j<i+wordlength; j++){
                check = check + this[j];
            }
            if(check == word){
                firstIndex = i;
                break;
            }
        }
    }
    lastIndex = firstIndex + wordlength;
    let pre = ""; 
    let last = "";
    for(let i=0; i<firstIndex; i++){
        pre = pre + this[i];
    }
    for(let i=lastIndex; i<len; i++){
        last = last + this[i];
    }
    console.log(pre + newWord + last);

}
String.prototype.concatMethod = function(word){
    console.log(this + word);
}
String.prototype.trimMethod = function(){
    let len  = this.length;
    let st = "";
    console.log(this);
    for(let i=0; i<len; i++){
        if(this[i] != " "){
            st = st + this[i];
        }
    }
    console.log(st);
}
String.prototype.padStartMethod = function(second, first){
    let len = this.length;
    let netlength = second - len;
    let st = "";
    for(let i=0; i<netlength; i++){
        st = st + first;
    }
    console.log(st + this);
}
String.prototype.padEndMethod = function(second, first){
    let len = this.length;
    let netlength = second - len;
    let st = "";
    for(let i=0; i<netlength; i++){
        st = st + first;
    }
    console.log(this + st);
}
String.prototype.repeateMethod = function(num){
    for(let i=0; i<num; i++){
        console.log(String(this));
    }
}
String.prototype.splitMethod = function(first){
    let len = this.length;
    let arr = [];
    let j = 0;
    let index = 0;
    for(let i=0; i<len; i++){
        if(this[i] == first){
            let st = "";
            for(let k=index; k<i; k++){
                st = st + this[k];
            }
            arr[j] = st;
            j++;
            index = i+1;
        }
    }
    for(let i=len-1; i>=0; i--){
        if(this[i]==first){
            let st = ""
            for(let k=len-1; k>i; k--){
                st = this[k] + st;
            }
            arr[j] = st;
            break;
        }
    }
    console.log(arr);
}
String.prototype.includesMethod = function(word){
    let len = this.length;
    let wordlength = word.length;
    for(let i=0; i<len; i++){
        if(word[0] == this[i]){
            let check = "";
            for(let j=i; j<i+wordlength; j++){
                check = check + this[j];
            }
            if(check == word){
                console.log(true);
                break;
            }
        }
        if(i == len-1)
            console.log(false);
    }
}
String.prototype.startswithMethod = function(word){
    let len = this.length;
    let wordlength = word.length;
        if(word[0] == this[0]){
            let check = "";
            for(let j=0; j<wordlength; j++){
                check = check + this[j];
            }
            if(check == word){
                console.log(true);
            }
            else
                console.log(false);
        }
        else
            console.log(false);
}
String.prototype.endswithMethod = function(word){
    let len = this.length;
    let wordlength = word.length;
        if(word[wordlength-1] == this[len-1]){
            let check = "";
            for(let j=len-1; j>=len-wordlength; j--){
                check =  this[j] + check;
            }
            if(check == word){
                console.log(true);
            }
            else
                console.log(false);
        }
        else
            console.log(false);
}
String.prototype.lengthMethod = function(){
    let count = 0;
    while(this[count] != undefined){
        count++;
    }
    console.log(count);
}
String.prototype.indexofMethod = function(word){
    let len = this.length;
    let wordlength = word.length;
    for(let i=0; i<len; i++){
        if(word[0] == this[i]){
            let check = "";
            for(let j=i; j<i+wordlength; j++){
                check = check + this[j];
            }
            if(check == word){
                console.log(i);
                break;
            }
        }
        else if(i == len-1)
            console.log(-1);
    }
}
String.prototype.lastindexofMethod = function(word){
    let len = this.length;
    let wordlength = word.length;
    let index = -1;
    for(let i=0; i<len; i++){
        if(word[0] == this[i]){
            let check = "";
            for(let j=i; j<i+wordlength; j++){
                check = check + this[j];
            }
            if(check == word){
                index = i;
            }
        }
    }
    console.log(index);
}
String.prototype.spliceMethod = function(first, second = "a", ...elements){
    let len = this.length;
    // console.log(Object.prototype.toString(this));
    if(second == "a"){
        let st = this;
        let pre = "";
        console.log(this);
        if(0 <= first && first < len){
            for(let i=0; i<first; i++){
                pre = pre + this[i];
            }
            console.log(pre);
        }
        else{
            for(let i=0; i<len-Math.abs(first); i++){
                pre = pre + this[i];
            }
            console.log(pre);
        }
    }
    else{
        let pre = "";
        let last = "";
        let middle = "";
        if(first >= 0){
            for(let i=0; i<first; i++){
                pre = pre + this[i];
            }
            for(let i=first+second; i<this.length; i++){
                last = last + this[i];
            }
            for(let i=0; i<elements.length; i++){
                middle = middle + elements[i];
            }
            console.log(pre + middle + last);
        }
        else{
            for(let i=0; i<len-Math.abs(first); i++){
                pre = pre + this[i];
            }
            for(let i=len-Math.abs(first)+second; i<this.length; i++){
                last = last + this[i];
            }
            for(let i=0; i<elements.length; i++){
                middle = middle + elements[i];
            }
            console.log(pre + middle + last);
        }
        
    }
}
// "darshan".spliceMethod(2, 1);


// forEach
// filter
// find
// findIndex
// map
// reduce
// join
// splice

let n = [300,-10,20];
Array.prototype.forEachMethod = function(fun){
    for(let i=0; i<this.length; i++){
        let check = fun(this[i], i, this);
        if(check)
            console.log(check);
    }
}
Array.prototype.filterMethod = function(fun){
    let len = this.length;
    let resultArr = [];
    for(let i=0; i<len; i++){
        let check = fun(this[i], i, this);
        if(check){
            resultArr.push(this[i]);
        }
    }
    return resultArr;
}
Array.prototype.mapMethod = function(fun){
    let len = this.length;
    let resultArr = [];
    console.log(fun);
    for(let i=0; i<len; i++){
        let check = fun(this[i], i ,this);
        if(check){
            resultArr.push(check);
        }
    }
    return resultArr;
}
Array.prototype.reduceMethod = function(fun, check){
    let len = this.length;
    let result;
    console.log(fun);
    for(let i=0; i<len; i++){
        check = fun(check, this[i], i ,this);
    }
    return check;
}
Array.prototype.findMethod = function(fun){
    let len = this.length;
    let check;
    console.log(fun);
    for(let i=0; i<len; i++){
        check = fun(this[i], i ,this);
        if(check){
            return this[i];
        }
    }
}
Array.prototype.findIndexMethod = function(fun){
    let len = this.length;
    let check;
    console.log(fun);
    for(let i=0; i<len; i++){
        check = fun(this[i], i ,this);
        if(check){
            return i;
        }
    }
    return -1;
}
Array.prototype.joinMethod = function(word){
    let len = this.length;
    let st = "";

    if(word == undefined){
        for(let i=0 ;i<len; i++){
            if(i==len-1)
                st = st + this[i];
            else
                st = st + this[i] + ",";
        }
        return st;
    }
    else{
        for(let i=0 ;i<len; i++){
            if(i==len-1)
                st = st + this[i];
            else
                st = st + this[i] + word;
        }
        return st;
    }
}