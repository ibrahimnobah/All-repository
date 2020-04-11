
  this.router = new RouterEngine();
  this.patientList = new PatientList();
  this.patientEdit = new PatientEdit();
  this.render = new RendererEngine();
$(document).ready(function () {
  patientList.inti();
  router.init();
  patientEdit.init();
  render.init();
 
});

