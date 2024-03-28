let book= document.getElementById("blockOne");
let hour= document.getElementById("blockTwo");
let list= document.getElementById("blockThree");
let pig= document.getElementById("blockFour");
let displyDOM= [book, hour, list, pig];
let index= 0;

function nextpg(){
    for(let i= 0; i< displyDOM.length; i++){
        let element= displyDOM[i];
        element.style.display= 'none';
    }
    if(index>0){
        let off= displyDOM[index -1];
        off.style.display= 'none';
    }
    let on= displyDOM[index];
    on.style.display= 'block';
    
    index++;
    if(index >3){
        index=0;
    }
}

function lstPg(){
    for(let i= 0; i< displyDOM.length; i++){
        let element= displyDOM[i];
        element.style.display= 'none';
    }
    if(index>0){
        let off= displyDOM[index];
        off.style.display= 'none';
    }
    index--;
    if(index<0){
        index= 3;
    }
    let on= displyDOM[index];
    on.style.display= 'block';
    
    index--;
    if(index >3){
        index=0;
    }

}