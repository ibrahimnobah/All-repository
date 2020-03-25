$(document).ready(function() {
  $(".user-list-screen").hide();
  $(".user-edit-screen").hide();
  $(".patient-edit-screen").hide();
  $("#found_site").on("change", function() {
    $(this).val() == "other"
      ? $("#specify")
          .closest(".form-group")
          .show()
      : $("#specify")
          .closest(".form-group")
          .hide();
  });
  $(".add ").click(function() {
    $(".patient-list-screen").hide();

    $(".patient-edit-screen").show();
  });
});
class Patient {
  constructor(
    ID,
    fname,
    mname,
    lname,
    DOB,
    gender,
    email,
    lastCheck,
    CreatedBy,
    creationDate,
    status
  ) {
    this.ID = ID;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.DOB = DOB;
    this.gender = gender;
    this.email = email;
    this.lastCheck = lastCheck;
    this.CreatedBy = CreatedBy;
    this.creationDate = creationDate;
    this.status = status;
  }
}

class listpatient {
  constructor() {
    this.listofpatient = [];
  }

  intiData() {
    patientsData.forEach(element => {
      var patient = new Patient(
        element.ID,
        element.fname,
        element.mname,
        element.lname,
        element.DOB,
        element.gender,
        element.email,
        element.lastCheck,
        element.status,
        element.Active,
        element.creationDate,
        element.CreatedBy
      );

      this.listofpatient.push(patient);
    });
    console.log(this.listofpatient);
  }
}
var x = new listpatient();
x.intiData();
