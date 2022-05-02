function solution(inputString){
    let myArray = inputString.split("");
    let myArrayInverted = [];
    for(let i = 0; i < myArray.length; i++){
        myArrayInverted[i] = myArray[myArray.length-i-1]
    }
    if(myArray.join("") == myArrayInverted.join("")){
        return true;
    }
    return false;    
};