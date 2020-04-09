class RendererEngine{
    init(){
 
    }

    renderTemplate(obj,templateText)
    { 
        var table = $(".table");
        var arr=[];
        var myString = templateText;
        const regexpModifications = /\{{.*?\}}/g;
        arr=myString.match(regexpModifications);
        arr.forEach(Element=>{
          Element=Element.replace('{{','');
          Element=Element.replace('}}','');
          myString=myString.replace('{{'+Element+'}}',obj[Element]);
        });
        table.append(myString);

}
}