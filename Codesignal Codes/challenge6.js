const solution = (statues) => {
    statues.sort();
    let counter = 0;
    let min = 1000;
    let max = 0;
    for(let i = 0; i <= statues.length; i++){
        statues[i] > max ? max = statues[i] : 0;
        statues[i] < min ? min = statues[i] : 0;
    }
    for(let i = min; i <= max; i++){
        if(!statues.includes(i)){
            counter++
        }
    }
    return counter;
};