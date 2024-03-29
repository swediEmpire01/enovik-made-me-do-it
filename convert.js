function doThingTimeDte(){
    let fullSet= document.getElementById("time").value;
    let fullSetTing= fullSet.trim().replace("-", " ");
    fullSetTing=fullSetTing.replace("-", " ").split(" ");
    console.log(fullSetTing);
    let dte= fullSetTing[2];
    let time =fullSetTing[3];
    let month= Number(fullSetTing[1]);
    let yer=fullSetTing[0];
    
    // check dte
    let position= dte.slice(-1);
    switch (position) {
        case "1":
            dte= Number(dte)+ "st";
            break;
        case "2":
            dte= Number(dte)+ "nd";
            break;
        case "3":
            dte= Number(dte)+ "rd";
            break;
        default:
            dte= Number(dte)+ "th"
            break;
    }
    position= dte.slice(0,2);
    switch (position) {
        case "11":
            dte= dte.replace("st", "th");
            break;
        case "12":
            dte= dte.replace("nd", "th");
            break;
        case "13":
            dte= dte.replace("rd", "th");
            break;
    }

    // check time
    let hours= time.slice(0, time.indexOf(":"));
    let mins= time.slice(time.indexOf(":"));
    if(hours== 24){
      time= "00"+mins+"am"
    }
    else if(hours> 12){
       time= (hours-12 )+mins +"pm"
    }
    else{
        time= hours+mins+"am"
    }
    // check dte
    yer=yer.slice(2);

    // check month
    switch (month) {
        case 1:
          month= "January";
          break;
        case 2:
            month= "Febuary";
          break;
        case 3:
            month= "March";
          break;
        case 4:
            month= "April";
          break;
        case 5:
            month= "May"; 
          break;
        case 6:
            month= "June";
          break;
        case 7:
            month= "July";
          break;
        case 8:
            month= "August";  
          break;
        case 9:
            month= "September";    
          break;
        case 10:
            month= "October";
           break;
        case 11:
            month= "November";
           break;
        case 12:
            month= "December";
         break;
    default: month="not valid month";
            break;
    }
    document.getElementById('theSec').textContent= `${time} on the ${dte} of ${month} '${yer}`;
}
