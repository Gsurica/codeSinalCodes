function solution(n) {

    if(n === 1){
        return 1;
    }

    let diagonal = 0;
    let result = 0;
    let numberOfTimes = (n - 1)

    for(let i = 0; i < numberOfTimes; i++){
        diagonal = numberOfTimes + n;
        return result = Math.ceil(diagonal * diagonal / 2)
    }
    
};