function doThingList(){
    let text= document.getElementById("list").value;
    let fullText="The Word List: ";


    text= text.trim().split(" ");
    console.log(text)
    for (let index = 0; index < text.length; index++) {
        let element =text[index];
        element= element.toLowerCase();
        if(index== text.length-1){
            fullText+= `${element}.`;
        }else{
            fullText+= `${element}, `;
        }
        
    }
    document.getElementById('thethird').textContent= fullText;

}