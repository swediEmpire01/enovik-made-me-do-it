function doThingPig(){
    let text= document.getElementById("Latin").value;
    text= text.trim().split(" ");
    let pigLatin="";
    text.forEach(word => {
        let i=0;
        
        let firstLetter= word.charAt(0).toLowerCase();
        console.log(firstLetter);
    if(firstLetter=="a" || 
       firstLetter=="e" ||
       firstLetter=="i" ||
       firstLetter=="o" ||
       firstLetter=="u"  ){

        firstLetter= word.charAt(0).toLowerCase();
         let restIt= word.slice(1).toLowerCase();
         word=  firstLetter+ restIt ;
         word= word+ "way";
        pigLatin= pigLatin +word + " ";
        
       }
    else{
        let letters= word.split("");
        console.log(letters);
        for (let index = 0; index < letters.length; index++) {
            let letter = letters[index];
            if(letter=="a" || 
               letter=="e" ||
               letter=="i" ||
               letter=="o" ||
               letter=="u"  ){
                firstLetter= word.slice(0, i).toLowerCase();
                let rest= word.slice(i);
                word= rest + "a" + firstLetter+"ay ";
                pigLatin= pigLatin +word;
                i=0;
                break
               }
               else{
                i++
               }
    }
    }
    });
    document.getElementById('theLst').textContent= pigLatin;
}
