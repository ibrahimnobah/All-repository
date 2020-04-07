debugger;
$(document).ready(init);

function init (){
  var render=new Render();
  renderPatientPageData()
  renderTable(render);
  $(".toggle-naviation ").click(onNavigationLinkClick);
  $("#nameform").submit(function(){ 
    save(Render);
  
  });
  $("#nameform").submit(onNavigationLinkClick);
  $(".edit ").click(edit);
  $("#cancle ").click(emptyForm);
}

function onNavigationLinkClick() {
  var navigationEngiene = new NavigationEngiene();
  var path = $(this).data("naviation");
  navigationEngiene.navigate(path);
}
function emptyForm()
{ 
document.getElementsByClassName("firstName")[0].value="";
document.getElementsByClassName("middleName")[0].value="";
document.getElementsByClassName("lastName")[0].value="";
document.getElementsByClassName("email")[0].value="";
document.getElementsByClassName("DOB")[0].value="";
document.getElementsByClassName("lastCheck")[0].value=getdate("");
document.getElementById("Status").value ="";

}


function edit()
{
     var List= fromList();
     var id = $(this).data("id");
     var patient= List.find(x=> x.ID===id);
     document.getElementById("activeCheck").checked =true;
     document.getElementsByClassName("firstName")[0].value=patient.fname;
     document.getElementsByClassName("middleName")[0].value=patient.mname;
     document.getElementsByClassName("lastName")[0].value=patient.lname;
     document.getElementsByClassName("email")[0].value=patient.email;
     document.getElementsByClassName("DOB")[0].value=getdate(patient.DOB);
     valueOfGender(patient.gender);
     valueOfStatus(patient.status);
     document.getElementsByClassName("lastCheck")[0].value=getdate(patient.lastCheck);

    }
  function valueOfGender(genderId) {
      if (genderId === "Male") {
        document.getElementById("maleRadio").checked=true;
      }else
      document.getElementById("femaleRadio").checked=true;
     }

 function valueOfStatus(statusId) {
    
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
  function getdate(date){
  var d = new Date(date);
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; 
  var curr_year = d.getFullYear();
  return  curr_year + "-" + curr_month + "-" +curr_date;

 }   





function renderPatientPageData() {

  var tableData = $(".tableData");
  tableData.empty();
}

function renderTable(render) {

  var renderEntine = document.getElementById("patient-template").innerHTML;
  var PatientList=fromList();
  PatientList.forEach(patient => {
  render.renderTemplate(patient, renderEntine);
  });

}
function fromList() {
  var PatientList=[];
  patientsData.forEach(element => {
    var patient = new Patient(element);
    PatientList.push(patient);
  });

  return PatientList;
}

function save(render)
{    
      var renderEntine = document.getElementById("patient-template").innerHTML;
      var firstName = document.getElementsByClassName("firstName")[0].value;
      var middleName = document.getElementsByClassName("middleName")[0].value;
      var lastName = document.getElementsByClassName("lastName")[0].value;
      var Email = document.getElementsByClassName("email")[0].value;
      var DateofBirth = getdate(document.getElementsByClassName("DOB")[0].value);
      var radios = document.getElementsByName("genderRadio");
      var Gender = "";
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          Gender = radios[i].value;
          break;
        }
      }
      var lCheck = document.getElementsByClassName("lastCheck")[0].value;
      var Status = document.getElementById("Status").value;
      
      var tmp = patientsData.pop();
      patientsData.push(tmp);
      var Id = tmp.ID + 1;
      var newone={
        ID:Id,
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
       
       render.renderTemplate(newpatient, renderEntine);
       patientsData.push(newpatient);
       init();
}



