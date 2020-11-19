function task_5() {

    var names = ['Vlad', 'Dima', 'Kristina', 'Vadim',"Ulia"];
    var lastNames = ['Volkova', 'Gusev', 'Moshniy', 'Zorickay',"Brimza"]
    function namesLastNames(a,b) {
    var outPut = [];

    for (var i = 0; i < names.length; i++) {
        outPut.push(this.names[i] + ' '.concat(this.lastNames[i]));
    }
    return outPut;

}
namesLastNames(names, lastNames);

}