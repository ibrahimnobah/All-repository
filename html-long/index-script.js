// $(document).ready(function() {
//   $(".user-list-screen").hide();
//   $(".user-edit-screen").hide();
//   $(".patient-edit-screen").hide();

//   $("#nameform").submit(function() {
//     var fname = document.getElementsByClassName("fname")[0].value;
//     var mname = document.getElementsByClassName("mname")[0].value;
//     var lname = document.getElementsByClassName("lname")[0].value;
//     var Active = true;
//     var email = document.getElementsByClassName("email")[0].value;
//     var DateofBirth = document.getElementsByClassName("DateofBirth")[0].value;
//     var radios = document.getElementsByName("gender");
//     var gender = "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//       if (radios[i].checked) {
//         gender = radios[i].value;
//         break;
//       }
//     }
//     var lastCheck = document.getElementsByClassName("lastCheck")[0].value;
//     var status = document.getElementById("Status").value;
//     var tmp = patientsData.pop();
//     patientsData.push(tmp);
//     var Id = tmp.ID + 1;
//     var newpatient = new Patient(
//       Id,
//       fname,
//       mname,
//       lname,
//       DateofBirth,
//       gender,
//       email,
//       lastCheck,
//       "by anas",
//       Active,
//       lastCheck,
//       status
//     );
//   });
//   $(".add ").click(function() {
//     $(".patient-list-screen").hide();

//     $(".patient-edit-screen").show();
//   });
// });
// class Patient {
//   constructor(
//     ID,
//     fname,
//     mname,
//     lname,
//     DOB,
//     gender,
//     email,
//     lastCheck,
//     CreatedBy,
//     creationDate,
//     status,
//     Active
//   ) {
//     this.ID = ID;
//     this.fname = fname;
//     this.mname = mname;
//     this.lname = lname;
//     this.DOB = DOB;
//     this.gender = gender;
//     this.email = email;
//     this.lastCheck = lastCheck;
//     this.CreatedBy = CreatedBy;
//     this.Active = Active;
//     this.creationDate = creationDate;
//     this.status = status;
//   }
// }

// class listpatient {
//   constructor() {
//     this.listofpatient = [];
//   }

//   intiData() {
//     patientsData.forEach(element => {
//       var patient = new Patient(
//         element.ID,
//         element.fname,
//         element.mname,
//         element.lname,
//         element.DOB,
//         element.gender,
//         element.email,
//         element.lastCheck,
//         element.status,
//         element.Active,
//         element.creationDate,
//         element.CreatedBy
//       );

//       this.listofpatient.push(patient);
//     });
//     console.log(this.listofpatient);
//   }
// }
// var x = new listpatient();
// x.intiData();
