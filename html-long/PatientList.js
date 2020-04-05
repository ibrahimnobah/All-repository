class PatientList {

  fromList(patientsData) {
    this.patientList = [];
    patientsData.forEach(element => {
      var patient = new Patient(element);
      this.patientList.push(patient);
    });
  }


  renderTable() {
    var renderEntine = document.getElementById("patient-template").innerHTML;
    this.fromList(patientsData);
    var table = $(".table");
    var tableData = $(".tableData");
    tableData.empty();

    this.patientList.forEach(patient => {
      var render = new Render();
      var output = render.renderTemplate(patient, renderEntine);
      table.append(output);
    });

  }
}

