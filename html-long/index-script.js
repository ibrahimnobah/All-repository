$(document).ready(function () {
  renderPatientPageData();
});

function onNavigationLinkClick() {
  var navigationEngiene = new NavigationEngiene();
  var path = $(this).data("naviation");
  navigationEngiene.navigate(path);
}

function renderPatientPageData() {
  var patientList = new PatientList();
  patientList.renderTable();
}

class NavigationEngiene {
  navigate(path) {
    $(".Screen").hide();
    if (path === "patient-list-screen") {
      renderPatientPageData();
    }
    $("." + path).show();
  }
}
class Patient {
  constructor(data) {
    this.ID = data.ID;
    this.fname = data.fname;
    this.mname = data.mname;
    this.lname = data.lname;
    this.DOB = data.DOB;
    this.gender = data.gender;
    this.email = data.email;
    this.lastCheck = data.lastCheck;
    this.CreatedBy = data.CreatedBy;
    this.Active = data.Active;
    this.creationDate = data.creationDate;
    this.status = data.status;
  }


}
class PatientList {

  fromList(patientsData) {
    this.patientList = [];
    patientsData.forEach(element => {
      var patient = new Patient(element);
      this.patientList.push(patient);
    });
  }

  renderTable() {
    this.fromList(patientsData);
    var table = $(".table");
    var tableHeader = $("#tableHeader");
    table.empty()
    table.append(tableHeader);
    this.patientList.forEach(element => {
      if (element.gender === 1) {
        element.gender = "male";
      } else {
        element.gender = "female";
      }
      if (element.Active === true) {
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
      var output =
        `<tr>
        <td> ${element.ID}</td>
        <td> ${element.fname} ${element.mname} ${element.lname}</td>
        <td>${element.email}</td>
        <td>${element.gender}</td>
        <td>${element.DOB.toLocaleString()}</td>
        <td>${element.Active}</td>
        <td>${element.CreatedBy}</td>
        <td> <a type="button" href="#patient-edit-screen"  data-naviation="patient-edit-screen" class="toggle-naviation btn btn-danger col-6"> delete</a>
        <a type="button" href="#patient-edit-screen"  data-naviation="patient-edit-screen" class="toggle-naviation left btn btn-primary col-6">edit</a> 
        </td>
        </tr>`;
      table.append(output);
    });
    $(".toggle-naviation ").unbind();
    $(".toggle-naviation ").click(onNavigationLinkClick);
  }
}

