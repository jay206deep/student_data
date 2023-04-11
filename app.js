var sName = document.getElementById('name');
var sRoll = document.getElementById('roll');
var sMarks = document.getElementById('marks');

function myData() {
    var data = {
        sName: sName.value,
        sRoll: sRoll.value,
        sMarks: sMarks.value
    };
    alert("Name = " + data.sName + "Roll Number = " + data.sRoll + "Marks = " + data.sMarks);
}