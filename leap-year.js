function leapYear(year){
    let rem1 = year % 4;
    if(rem1 == 0){
        let rem2 = year % 100;
        if(rem2 == 0){
            let rem3 = year % 400;
            if(rem3 == 0){
                console.log('leap year');
            }
            else{
                console.log('not leap year');
            }
        }
        else{
            console.log('leap year');
        }
    }
    else{
        console.log('not leap year');
    }
    }
    leapYear(1700);