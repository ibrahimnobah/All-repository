class Patient {
  constructor(data) {
    this.ID = data.ID;
    this.fname = data.fname;
    this.mname = data.mname;
    this.lname = data.lname;
    this.DOB = getdate(data.DOB);
    this.gender = this.valueOfGender(data.gender);
    this.email = data.email;
    this.lastCheck =getdate(data.lastCheck);
    this.CreatedBy = data.CreatedBy;
    this.Active = data.Active;
    this.creationDate = data.creationDate;
    this.status = this.valueOfStatus(data.status);
  }

  valueOfGender(genderId) {
    if (genderId == 1) {
      return "Male";
    }
    return "Female";
  }

  valueOfStatus(statusId) {
    switch (statusId) {
      case 0:
        return "Draft";
      case 1:
        return "Saved";
      default:
        return "Deleted";
    }
  }
getdate(date){
  var d = new Date(date);
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; 
  var curr_year = d.getFullYear();
  return  curr_year + "-" + curr_month + "-" +curr_date;

 }   
}