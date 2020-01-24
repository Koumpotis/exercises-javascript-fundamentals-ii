function formatSecond(totalSeconds){
   let answer;
   let seconds;
   let totalMinutes;
   let minutes;
   let totalHours;
   let hours;
   let totalDays;
   let days;
   let totalWeeks;
    if (totalSeconds <=59){
        return [totalSeconds + 's'];
    }
    if (totalSeconds >=60){
        totalMinutes= Math.floor(totalSeconds/60)

        totalHours= Math.floor(totalMinutes/60)

        totalDays= Math.floor(totalHours/24);

        totalWeeks= Math.floor(totalDays/7);

        seconds= totalSeconds - totalMinutes*60;

        minutes =totalMinutes - totalHours*60

        hours = totalHours- totalDays*24

        days= totalDays - totalWeeks*7;
    }

    if(totalWeeks===0 && days !==0){
      answer=  days + 'd ' + hours+ 'h ' + minutes + 'm ' + seconds + 's';
      return answer;
    }

    if(days ===0 && totalWeeks===0 && hours!==0){
        answer= hours+ 'h ' + minutes + 'm ' + seconds + 's';
        return answer;
    }

    if(hours===0 && days ===0 && totalWeeks===0 && minutes!==0){
         answer= minutes + 'm ' + seconds + 's';
         return answer;
    }

    if(minutes===0 &&hours===0 && days ===0 && totalWeeks===0){
        answer= seconds + 's';
        return answer;
    }

    return answer =  totalWeeks + 'w ' + days + 'd ' + hours+ 'h ' + minutes + 'm ' + seconds + 's ';    }


console.log(formatSecond(120));
console.log(formatSecond(604800));
console.log(formatSecond(86400));
console.log(formatSecond(3645));
console.log(formatSecond(89460));