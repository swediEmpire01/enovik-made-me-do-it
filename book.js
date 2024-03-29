function doThingBook(){
    // captures user input
    let text= document.getElementById('book').value;

    let namesOld= text.slice(0, text.indexOf("(")).trim();
    let names= namesOld.split(" ") ;
    
    let fullNames="";
    names.forEach(element => {
        // This extracts the first name and capterlizes it
    
        // creates variables
        let firstLetter;
        let rest;
        // first letter
        firstLetter= element.charAt(0).toUpperCase();
        rest= element.slice(1).toLowerCase();
        // concatonates the full first name back together
        element= firstLetter+ rest;
        fullNames+= `${element} `;
    });
    
    text= text.replace(namesOld, fullNames);

    let textDemo= text.replace(names[0], 1);
    let tittleOld= textDemo.slice(text.indexOf(")")+1 ).trim();
    let tittle= tittleOld.split(" "); //here
    
    let newTittle="";
    for (let index = 0; index < tittle.length; index++) {
        let element = tittle[index];
        let firstLetter;


        let rest;

        if(index== 0){
            firstLetter= element.charAt(0).toUpperCase();
            rest= element.slice(1);
            element= firstLetter+ rest;
            newTittle+= `${element} `;
''
        }
        else{
            element= element;
            newTittle+= `${element} `;
        }
    }
    text= text.replace(tittleOld, newTittle);


    // displys on the Website
    document.getElementById('theOne').textContent= text;

        
}
