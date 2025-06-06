function reverseString(string, position = 0 , result =  " " ){

    if(string.length <= position){
        return "";
    }

    result = reverseString(string, position + 1, result);
    result += string[position];
    return result;

}


let str = "Nepal";
console.log(reverseString(str));
