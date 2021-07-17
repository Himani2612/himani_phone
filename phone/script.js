var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["officephone"] = document.getElementById("officephone").value;
    formData["resphone"] = document.getElementById("resphone").value;
   
    formData["city"] = document.getElementById("city").value;
    formData["country"] = document.getElementById("country").value;
    formData["street"] = document.getElementById("street").value;
    console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.officephone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.resphone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.country;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.street;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value="";
    document.getElementById("lasttname").value="";
    document.getElementById("officephone").value="";
    document.getElementById("resphone").value="";
   
    document.getElementById("city").value="";
   document.getElementById("country").value="";
    document.getElementById("street").value="";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("lasttname").value=selectedRow.cells[1].innerHTML;
    document.getElementById("officephone").value=selectedRow.cells[2].innerHTML;
    document.getElementById("resphone").value=selectedRow.cells[3].innerHTML;
   
    document.getElementById("city").value=selectedRow.cells[4].innerHTML;
   document.getElementById("country").value=selectedRow.cells[5].innerHTML;
    document.getElementById("street").value=selectedRow.cells[6].innerHTML;
   
}
function updateRecord(formData) {
   selectedRow.cells[0].innerHTML=formData.firstname;;
   selectedRow.cells[1].innerHTML=formData.lasttname;;
   selectedRow.cells[2].innerHTML=formData.officephone;;
    selectedRow.cells[3].innerHTML=formData.resphone;;
   
    selectedRow.cells[4].innerHTML=formData.city;;
   selectedRow.cells[5].innerHTML=formData.country;;
    selectedRow.cells[6].innerHTML=formData.street;;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("firstname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
