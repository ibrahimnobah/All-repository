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
      var tableData = $(".tableData");
      tableData.empty();
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
       element.DOB= element.DOB.toLocaleString();
       var x= new Render();
        var output =x.renderTemplate(element, `<tr  class="tableData">
        <td> {{ID}}</td>
        <td> {{fname}} {{mname}} {{lname}}</td>
        <td>{{email}}</td>
        <td>{{gender}}</td>
        <td>{{DOB}}</td>
        <td>{{Active}}</td>
        <td>{{CreatedBy}}</td>
        <td> <a type="button" href="#patient-edit-screen"  data-naviation="patient-edit-screen" class="toggle-naviation btn btn-danger col-6"> delete</a>
        <a type="button" href="#patient-edit-screen"  data-naviation="patient-edit-screen" class="toggle-naviation left btn btn-primary col-6">edit</a> 
        </td>
        </tr>`);
        table.append(output);
      });
  
    }
  }
  
  