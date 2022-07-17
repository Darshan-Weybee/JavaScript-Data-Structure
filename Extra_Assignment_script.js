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

stringMethod = {
    str: "darshan",
    str1 : "kagathara",
    sliceMethod: function(first, second = "a"){
        let len = this.str.length;
        if(second == "a"){
            let st = "";
            if(0 <= first && first < len){
                for(let i=first; i<len; i++){
                    st = st + this.str[i];
                }
                return st;
            }
            else{
                for(let i=len-Math.abs(first); i<len; i++){
                    st = st + this.str[i];
                }
                return st;
            }
        }
        else{
            let st = "";
            if(0 <=first && first <len && 0 <=second && second < len){
                for(let i=first; i<second; i++){
                    st = st + this.str[i];
                }
                return st;
            }
            else if(first<0 && second<0){
                for(let i=len-Math.abs(first); i<len-Math.abs(second); i++){
                    st = st + this.str[i];
                }
                return st;
            }
            else{
                for(let i=first; i<len-Math.abs(second); i++){
                    st = st + this.str[i];
                }
                return st;
            }
        }
    },
    SubstringMethod: function(first, second = "a"){
        let len = this.str.length;
        if(second == "a"){
            let st = "";
            if(0 <= first && first < len){
                for(let i=first; i<len; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
            else{
                for(let i=0; i<len; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
        }
        else{
            let st = "";
            if(0 <=first && first <len && 0 <=second && second < len){
                for(let i=first; i<second; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
            else if(first>0 && second<0){
                for(let i=0; i<first; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
        }
    },
    substrMethod: function(first, second = "a"){
        let len = this.str.length;
        if(second == "a"){
            let st = "";
            if(0 <= first && first < len){
                for(let i=first; i<len; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
            else{
                for(let i=len-Math.abs(first); i<len; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
        }
        else{
            let st = "";
            if(0 <= first && first < len){
                for(let i=first; i<first+second; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
            else{
                for(let i=len-Math.abs(first); i<len-Math.abs(first)+second; i++){
                    st = st + this.str[i];
                }
                console.log(st);
            }
        }
    },
    replaceMethod: function(word, newWord){
        let len = this.str.length;
        let wordlength = word.length;
        let firstIndex;
        let lastIndex;
        for(let i=0; i<len; i++){
            if(word[0] == this.str[i]){
                let check = "";
                for(let j=i; j<i+wordlength; j++){
                    check = check + this.str[j];
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
            pre = pre + this.str[i];
        }
        for(let i=lastIndex; i<len; i++){
            last = last + this.str[i];
        }
        console.log(pre + newWord + last);

    },
    concatMethod: function(word){
        console.log(this.str + word);
    },
    trimMethod: function(){
        let len  = this.str.length;
        let st = "";
        console.log(this.str);
        for(let i=0; i<len; i++){
            if(this.str[i] != " "){
                st = st + this.str[i];
            }
        }
        console.log(st);
    },
    padStartMethod: function(second, first){
        let len = this.str.length;
        let netlength = second - len;
        let st = "";
        for(let i=0; i<netlength; i++){
            st = st + first;
        }
        console.log(st + this.str);
    },
    padEndMethod: function(second, first){
        let len = this.str.length;
        let netlength = second - len;
        let st = "";
        for(let i=0; i<netlength; i++){
            st = st + first;
        }
        console.log(this.str + st);
    },
    repeateMethod: function(num){
        for(let i=0; i<num; i++){
            console.log(this.str);
        }
    },
    splitMethod: function(first){
        let len = this.str.length;
        let arr = [];
        let j = 0;
        let index = 0;
        for(let i=0; i<len; i++){
            if(this.str[i] == first){
                let st = "";
                for(let k=index; k<i; k++){
                    st = st + this.str[k];
                }
                arr[j] = st;
                j++;
                index = i+1;
            }
        }
        for(let i=len-1; i>=0; i--){
            if(this.str[i]==first){
                let st = ""
                for(let k=len-1; k>i; k--){
                    st = this.str[k] + st;
                }
                arr[j] = st;
                break;
            }
        }
        console.log(arr);
    },
    includesMethod: function(word){
        let len = this.str.length;
        let wordlength = word.length;
        for(let i=0; i<len; i++){
            if(word[0] == this.str[i]){
                let check = "";
                for(let j=i; j<i+wordlength; j++){
                    check = check + this.str[j];
                }
                if(check == word){
                    console.log(true);
                    break;
                }
            }
            if(i == len-1)
                console.log(false);
        }
    },
    startswithMethod:function(word){
        let len = this.str.length;
        let wordlength = word.length;
            if(word[0] == this.str[0]){
                let check = "";
                for(let j=0; j<wordlength; j++){
                    check = check + this.str[j];
                }
                if(check == word){
                    console.log(true);
                }
                else
                    console.log(false);
            }
            else
                console.log(false);
    },
    endswithMethod:function(word){
        let len = this.str.length;
        let wordlength = word.length;
            if(word[wordlength-1] == this.str[len-1]){
                let check = "";
                for(let j=len-1; j>=len-wordlength; j--){
                    check =  this.str[j] + check;
                }
                if(check == word){
                    console.log(true);
                }
                else
                    console.log(false);
            }
            else
                console.log(false);
    },
    lengthMethod: function(){
        let count = 0;
        while(this.str[count] != undefined){
            count++;
        }
        console.log(count);
    },
    indexofMethod: function(word){
        let len = this.str.length;
        let wordlength = word.length;
        for(let i=0; i<len; i++){
            if(word[0] == this.str[i]){
                let check = "";
                for(let j=i; j<i+wordlength; j++){
                    check = check + this.str[j];
                }
                if(check == word){
                    console.log(i);
                    break;
                }
            }
            else if(i == len-1)
                console.log(-1);
        }
    },
    lastindexofMethod: function(word){
        let len = this.str.length;
        let wordlength = word.length;
        let index = -1;
        for(let i=0; i<len; i++){
            if(word[0] == this.str[i]){
                let check = "";
                for(let j=i; j<i+wordlength; j++){
                    check = check + this.str[j];
                }
                if(check == word){
                    index = i;
                }
            }
        }
        console.log(index);
    }
}
