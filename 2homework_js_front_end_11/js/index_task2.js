 function task_2() {           //add new user

var group = [
{
    name: "Sergay ",
    lastName: "Kapusta",
    age: 23,
    notebook: false,
},
{
    name: "Vlad",
    lastName: "Mezechko",
    age: 25,
    notebook: true,
}

]
var users = []; 

function get(StudentsList) {
    for(var i=0; i < StudentsList.length; i++ ){

        users.push('Name:' + StudentsList[i].name + '; ' + 'Surname:' + StudentsList[i].lastName + '; ' + ' Age:' + StudentsList[i].age + '; ' + 'Notebook:' + rs_notebook(StudentsList[i].notebook))
    }
    console.log(users);

    
    function rs_notebook(a) {
        return a === true ? "Yes" : "Not";
    }
}
// -----------------------------------------------------------
function addNewStudent(name, lastName, age, notebook) {
    if (name === undefined || lastName === undefined || age === undefined || notebook === undefined) {

    } else
    group.push({
        name: name,
        lastName: lastName,
        age: age,
        notebook: notebook
    })
}
    // input information about the user
    addNewStudent('Dmitriy', 'Volkov', 21, true);



    get(group);
    debugger;


}






