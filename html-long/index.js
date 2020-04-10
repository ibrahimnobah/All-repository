
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

class PatientList {
  constructor() {
    this.patients = [];
    this.render = new RendererEngine();
  }


  inti() {
    this.renderPatientPageData();
    this.renderTable();
    $("#cancle ", "addbutton").click(this.emptyForm);
    $("#nameform").submit(() => {
      this.save();
    });

  }
  emptyForm() {
    $('#nameform').attr('data-id', "empty");
    document.getElementsByClassName("firstName")[0].value = "";
    document.getElementsByClassName("middleName")[0].value = "";
    document.getElementsByClassName("lastName")[0].value = "";
    document.getElementsByClassName("email")[0].value = "";
    document.getElementsByClassName("DOB")[0].value = "";
    document.getElementsByClassName("lastCheck")[0].value = "";
    document.getElementById("Status").value = "";
  }

  renderPatientPageData() {
    var tableData = $(".tableData");
    tableData.empty();
  }

  renderTable() {
    var renderEntine = document.getElementById("patient-template").innerHTML;
    this.fromList();
    this.patients.forEach(patient => {
      this.render.renderTemplate(patient, renderEntine);
    });

  }

  fromList() {
    patientsData.forEach(element => {
      var patient = new Patient(element);
      this.patients.push(patient);
    });
  }

  save() {
    var id = $("#nameform").data("id");
    var renderEntine = document.getElementById("patient-template").innerHTML;
    var firstName = document.getElementsByClassName("firstName")[0].value;
    var middleName = document.getElementsByClassName("middleName")[0].value;
    var lastName = document.getElementsByClassName("lastName")[0].value;
    var email = document.getElementsByClassName("email")[0].value;
    var dateOfBirth = document.getElementsByClassName("DOB")[0].value;
    var radios = document.getElementsByName("genderRadio");
    var gender = "";
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        gender = radios[i].value;
        break;
      }
    }
    var lCheck = document.getElementsByClassName("lastCheck")[0].value;
    var status = document.getElementById("Status").value;
    if (id == "-1") {
      var tmp = patientsData.pop();
      patientsData.push(tmp);
      id = tmp.ID + 1;
    }
    var newone = {
      ID: id,
      fname: firstName,
      mname: middleName,
      lname: lastName,
      DOB: dateOfBirth,
      gender: gender,
      email: email,
      lastCheck: lCheck,
      CreatedBy: 1,
      Active: true,
      status: status
    };
    var newpatient = new Patient(newone);
    this.render.renderTemplate(newpatient, renderEntine);
  }
}
class RouterEngine {
  init() {

    $(".toggle-naviation ").click(this.onNavigationLinkClick);
    $("#nameform").submit(this.onNavigationLinkClick);

  }

  onNavigationLinkClick() {
    var navigationEngiene = new NavigationEngiene();
    var path = $(this).data("naviation");
    navigationEngiene.navigate(path);
  }
}



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
