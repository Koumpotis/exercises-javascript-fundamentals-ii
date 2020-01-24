function formatSecond(seconds){
   let answer;
   let secs;
   let minutes;
   let hours;
   let days;
    if (seconds <=59){
        return [seconds + 's'];
    }
    if (seconds >=60){
        minutes= Math.floor(seconds/60)
        hours= Math.floor(minutes/60)
        days=Math.floor(hours/24);
        secs= seconds - minutes*60;
    }
    return answer= [days + 'd' + hours+ 'h' + minutes + 'm' + secs + 's'];
}
console.log(formatSecond(100));