//gradeCheck.js
function buttonClick() {
    let grade = document.getElementById("grade");
    if(isNaN(grade.value)){
        alert("Please enter a number")
    }
    if (grade.value> 100 || grade.value < 0){
        alert("Please enter a valid grade")
    }

    let numGrade = grade.value
    let yourGrade = "";
    let grading = document.getElementById("myGrade")
    grading.innerHTML= '';
    if(grade.value>=90){
        yourGrade = document.createTextNode("Your Grade: A+");
        grading.appendChild(yourGrade);
    } else if(90 > numGrade && numGrade >= 80) {
        yourGrade = document.createTextNode("Your Grade: A");
        grading.appendChild(yourGrade);
    } else if(80 > numGrade && numGrade >= 75) {
        yourGrade = document.createTextNode("Your Grade: B+");
        grading.appendChild(yourGrade);
    } else if(75 > numGrade && numGrade >= 70) {
        yourGrade = document.createTextNode("Your Grade: B");
        grading.appendChild(yourGrade);
    } else if(70 > numGrade && numGrade >= 65) {
        yourGrade = document.createTextNode("Your Grade: C+");
        grading.appendChild(yourGrade);
    } else if(65 > numGrade && numGrade >= 60) {
        yourGrade = document.createTextNode("Your Grade: C");
        grading.appendChild(yourGrade);
    } else if(60 > numGrade && numGrade >= 55) {
        yourGrade = document.createTextNode("Your Grade: D+");
        grading.appendChild(yourGrade);
    } else if(55 > numGrade && numGrade >= 50) {
        yourGrade = document.createTextNode("Your Grade: D");
        grading.appendChild(yourGrade);
    } else if(50 > numGrade && numGrade >= 40) {
        yourGrade = document.createTextNode("Your Grade: E");
        grading.appendChild(yourGrade);
    } else if (40> numGrade) {
        yourGrade = document.createTextNode("Your Grade: F");
        grading.appendChild(yourGrade);
    }
}