$(document).ready(function() {
  $('[active="false"]').hide();
  $(".toggle-naviation ").click(function() {
    $('[active="true"]').attr("active", "false");
    var divToShow = $(this).attr("divToShow");
    $("." + divToShow).attr("active", "true");
    $('[active="true"]').show();
    $('[active="false"]').hide();
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
    status,
    Active
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
    this.Active = Active;
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
    var table = $(".table");
    var output =
      "<table> <tr> <th>id</th><th>name</th><th>email</th><th>gender</th><th>DOB</th> <th>Active</th><th>Creation</th><th>opraion</th></tr>";
    this.listofpatient.forEach(element => {
      if (element.gender === 1) {
        element.gender = "male";
      } else {
        element.gender = "female";
      }
      if (element.Active === 1) {
        element.Active = "True";
      } else {
        element.Active = "false";
      }
      switch (element.status) {
        case 0:
          element.status = "Draft";
          break;
        case 1:
          element.status = "Saved";
          break;
        default:
          element.status = "Deleted";
          break;
      }
      output +=
        "<tr><td>" +
        element.ID +
        "</td><td>" +
        element.fname +
        " " +
        element.mname +
        " " +
        element.lname +
        "</td><td>" +
        element.email +
        "</td><td>" +
        element.gender +
        "</td><td>" +
        element.DOB.toLocaleString() +
        "</td><td>" +
        element.Active +
        "</td><td>" +
        element.CreatedBy +
        "</td><td>" +
        '<a type="button" href="#user-edit-screen" class=" toggle-naviation btn btn-danger col-6 "> delete</a>' +
        '<a type="button" href="#user-edit-screen" class=" toggle-naviation left btn btn-primary col-6">edit</a>' +
        "</td></tr>";
    });
    output += "</table>";
    table.html(output);
  }
}

debugger;
var x = new listpatient();
x.intiData();
