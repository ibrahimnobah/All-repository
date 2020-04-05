class Render{
    
    renderTemplate(obj,templateText)
    { 
        var arr=[];
        var myString = templateText;
        const regexpModifications = /\{{.*?\}}/g;
        console.log(myString.match(regexpModifications));
        arr=myString.match(regexpModifications);
        arr.forEach(Element=>{
        debugger;
          Element=Element.replace('{{','');
          Element=Element.replace('}}','');
          myString=myString.replace(Element,obj[Element]);
        });
        console.log(myString)



}
          
    
    


}