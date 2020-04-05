class Render{
    
    renderTemplate(obj,templateText)
    { 
        var arr=[];
        var myString = templateText;
        const regexpModifications = /\{{.*?\}}/g;
        arr=myString.match(regexpModifications);
        arr.forEach(Element=>{
          Element=Element.replace('{{','');
          Element=Element.replace('}}','');
          myString=myString.replace('{{'+Element+'}}',obj[Element]);
        });
     
        return myString;
}
          

    
    


}