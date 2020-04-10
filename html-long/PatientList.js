class PatientList {
    constructor() {
      this.patients = [];
      this.render = new RendererEngine();
    }
  
  
    inti() {
      this.renderPatientPageData();
      this.renderTable();
      $("#nameform").submit(() => {
        this.save();
      });
  
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