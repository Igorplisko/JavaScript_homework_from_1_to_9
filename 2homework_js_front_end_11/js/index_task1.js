// function task1()
function task_1() {
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
        for (var i = 0; i < StudentsList.length; i++) {

            users.push('Name:' + StudentsList[i].name + '; ' + 'Surname:' + StudentsList[i].lastName + '; ' + ' Age:' + StudentsList[i].age + '; ' + 'Notebook:' + rs_notebook(StudentsList[i].notebook))
        }
        console.log(users);


        function rs_notebook(a) {
            return a === true ? "Yes" : "Not";
        }
    }

    get(group);
    debugger;

}








// let output = getStudentsList (arr);
// console.log(output);

//addThis = true;!!!!!!!!!!!
// function users(name, lastName, age, notebook) {


//     this.name = name;

//     this.surname = surname;

//     this.age = age;
// }
/*
var group = { ... };
var groupedByAge = groupPeople (group, "age");
var groupedByLastName = groupPeople(group, "lastname");
var groupedByFirstName = groupPeople (group, "firstname");


var group = [
    { firstname: "Lopi", lastname: "Osipenko", age: 53 },
    { firstname: "Kristina", lastname: "Osipenko", age:20 },
    { firstname: "Artem", lastname: "Korhov", age: 25},
    ]
    */


