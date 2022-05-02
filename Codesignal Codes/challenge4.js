function solution(inputArray){
    let newArray = [];
    let result = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < inputArray.length - 1; i++){
        newArray[i] = inputArray[i] * inputArray[i + 1];
    };
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] > result){
            result = newArray[i];
        }
    }
    return result;
}
