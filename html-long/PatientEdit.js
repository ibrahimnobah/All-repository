
class PatientEdit {
    init() {
      $(".edit ").click(this.edit);
    }
    edit() {
      var id = $(this).data("id");
      var patient = new Patient(patientsData.find(p => p.ID === id))
      $('#nameform').attr('data-id', patient.ID);
      document.getElementById("activeCheck").checked = true;
      document.getElementsByClassName("firstName")[0].value = patient.fname;
      document.getElementsByClassName("middleName")[0].value = patient.mname;
      document.getElementsByClassName("lastName")[0].value = patient.lname;
      document.getElementsByClassName("email")[0].value = patient.email;
      document.getElementsByClassName("DOB")[0].value = patient.DOB;
      document.getElementById(patient.gender.toLowerCase() + "Radio").checked = true;
      document.getElementById(patient.status).selected = true;
      document.getElementsByClassName("lastCheck")[0].value = patient.lastCheck;
    }
  
  }
  