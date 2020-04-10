
$( window ).on( "load", function() { 
  var router = new RouterEngine();
  var patientList = new PatientList();
  var patientEdit = new PatientEdit();
$(document).ready(function () {
  patientList.inti();
  router.init();
  patientEdit.init();
});
});






