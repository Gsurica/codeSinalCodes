function solution(year) {
    let myYear = year.toString().split("");
    let lastEl = myYear[myYear.length - 1];
    let preLastEl = myYear[myYear.length - 2];

    if(myYear.length == 4){
        let sec = (myYear[0] + myYear[1]);
        if(parseInt(lastEl) != 0 || parseInt(preLastEl) != 0){
            return parseInt(sec) + 1;
        }
        if(parseInt(lastEl) == 0 || parseInt(preLastEl) == 0){
            return parseInt(sec);
        }
    }
    if(myYear.length == 3) {
        let sec = myYear[0];
        if(parseInt(lastEl) != 0 || parseInt(preLastEl) != 0){
            return parseInt(sec) + 1;
        }
        if(parseInt(lastEl) == 0 || parseInt(preLastEl) == 0){
            return parseInt(sec);
        }
    }
    return 1;
};