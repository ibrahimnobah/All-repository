
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
}

