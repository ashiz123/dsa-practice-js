function isCheckPalindrome(data, left = 0, right = data.length-1){

    if(left >= right) return true;

    if(data[left].toUpperCase() !== data[right].toUpperCase()) return false;

    return isCheckPalindrome(data, left + 1, right -1)
}



let str = 'pataP';
let dataToArray = str.split(""); //convert string to array
console.log(isCheckPalindrome(dataToArray))


//rs('Nepal', position =0, result = '')

