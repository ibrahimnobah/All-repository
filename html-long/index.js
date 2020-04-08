$(document).ready(init);

function init (){
  var patientlist=new Patientlist();
  patientlist.inti();
  $(".toggle-naviation ").click(onNavigationLinkClick);
  $("#nameform").submit(function(){ 
    patientlist.createORupdate(patientlist);
  });
  $("#nameform").submit(onNavigationLinkClick);
  $(".edit ").click(function(){
     patientlist.edit(patientlist,this)
    }
  );
  $("#cancle ").click(patientlist.emptyForm);
}

function onNavigationLinkClick() {
  var navigationEngiene = new NavigationEngiene();
  var path = $(this).data("naviation");
  navigationEngiene.navigate(path);


}
class Patientlist{
 constructor(){
  this.patientlist=[];
  this.render=new Render();
 }
 
 inti(){
  this.renderPatientPageData();
  this.renderTable();
 }
 
  emptyForm()
{ 

  $('#nameform').attr('data-id',"empty"); 
document.getElementsByClassName("firstName")[0].value="";
document.getElementsByClassName("middleName")[0].value="";
document.getElementsByClassName("lastName")[0].value="";
document.getElementsByClassName("email")[0].value="";
document.getElementsByClassName("DOB")[0].value="";
document.getElementsByClassName("lastCheck")[0].value="";
document.getElementById("Status").value ="";

}

 edit(obj,button)
{
     var id = $(button).data("id");
     var patient= obj.patientlist.find(x=> x.ID===id);
     $('#nameform').attr('data-id',patient.ID); 
      $("").data('id',patient.ID+"");
     document.getElementById("activeCheck").checked =true;
     document.getElementsByClassName("firstName")[0].value=patient.fname;
     document.getElementsByClassName("middleName")[0].value=patient.mname;
     document.getElementsByClassName("lastName")[0].value=patient.lname;
     document.getElementsByClassName("email")[0].value=patient.email;
     document.getElementsByClassName("DOB")[0].value=obj.getdate(patient.DOB);
     obj.valueOfGender(patient.gender);
     obj.valueOfStatus(patient.status);
     document.getElementsByClassName("lastCheck")[0].value=obj.getdate(patient.lastCheck);
    }

 valueOfGender(genderId) {
      if (genderId === "Male") {
        document.getElementById("maleRadio").checked=true;
      }else
      document.getElementById("femaleRadio").checked=true;
     }

 valueOfStatus(statusId) {
    
  switch (statusId) {
      case "Draft":
        document.getElementById("Draft").selected=true;
        break;
      case "Saved":
        document.getElementById("Saved").selected=true;
        break;

      default:
        document.getElementById("Deleted").selected=true;
        break;

    }
  }

 getdate(date){
  var d = new Date(date);
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; 
  var curr_year = d.getFullYear();
  return  curr_year + "-" + curr_month + "-" +curr_date;

 }   

 renderPatientPageData() {

  var tableData = $(".tableData");
  tableData.empty();
}

 renderTable() {

  var renderEntine = document.getElementById("patient-template").innerHTML;
  this.fromList();
  this.patientlist.forEach(patient => {
  this.render.renderTemplate(patient, renderEntine);
  });

}

 fromList() {

  patientsData.forEach(element => {
    var patient = new Patient(element);
    this.patientlist.push(patient);
  });


}

 createORupdate(obj)
{    debugger;
     var Id= $("#nameform").data("id");

      var renderEntine = document.getElementById("patient-template").innerHTML;
      var firstName = document.getElementsByClassName("firstName")[0].value;
      var middleName = document.getElementsByClassName("middleName")[0].value;
      var lastName = document.getElementsByClassName("lastName")[0].value;
      var Email = document.getElementsByClassName("email")[0].value;
      var DateofBirth = obj.getdate(document.getElementsByClassName("DOB")[0].value);
      var radios = document.getElementsByName("genderRadio");
      var Gender = "";
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          Gender = radios[i].value;
          break;
        }
      }
      var lCheck =obj.getdate(document.getElementsByClassName("lastCheck")[0].value);
      var Status = document.getElementById("Status").value;
      if(Id==="empty")
      {
      var tmp = patientsData.pop();
      patientsData.push(tmp);
      Id = tmp.ID + 1;
      }
      var newone={
        ID:parseInt(Id),
        fname:firstName, 
        mname:middleName, 
        lname:lastName,
        DOB:DateofBirth,
        gender:Gender,
        email:Email,
        lastCheck:lCheck,
        CreatedBy: 1,
        Active:true,
        status:Status
       } ;
       var newpatient=new Patient(newone);
       obj.render.renderTemplate(newpatient, renderEntine);



}
}


