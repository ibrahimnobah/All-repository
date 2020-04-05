
$(document).ready(init);

function init (){
   renderPatientPageData();
  $(".toggle-naviation ").unbind();
  $(".toggle-naviation ").click(onNavigationLinkClick);
}


function onNavigationLinkClick() {
  var navigationEngiene = new NavigationEngiene();
  var path = $(this).data("naviation");
  navigationEngiene.navigate(path);
}

function renderPatientPageData() {
  var patientList = new PatientList();
  patientList.renderTable();
  var x=new Render();
  debugger;
  x.renderTemplate(patientsData[0],"<tr data-id='{{ID}}><td>{{fname}} {{mname}} {{lname}} </td><td>{{gender}}");
}

