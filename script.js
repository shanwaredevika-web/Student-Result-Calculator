function calculateResult() {

    let studentName = document.getElementById("studentName").value;

    let subject1Input = document.getElementById("subject1").value;
    let subject2Input = document.getElementById("subject2").value;
    let subject3Input = document.getElementById("subject3").value;
    let subject4Input = document.getElementById("subject4").value;
    let subject5Input = document.getElementById("subject5").value;

    // Check empty fields
    if (
        studentName === "" ||
        subject1Input === "" ||
        subject2Input === "" ||
        subject3Input === "" ||
        subject4Input === "" ||
        subject5Input === ""
    ) {
        document.getElementById("result").innerHTML =
            "Please fill all the fields.";
        return;
    }

    // Convert marks into numbers
    let subject1 = Number(subject1Input);
    let subject2 = Number(subject2Input);
    let subject3 = Number(subject3Input);
    let subject4 = Number(subject4Input);
    let subject5 = Number(subject5Input);

    // Check marks between 0 and 100
    if (
        subject1 < 0 || subject1 > 100 ||
        subject2 < 0 || subject2 > 100 ||
        subject3 < 0 || subject3 > 100 ||
        subject4 < 0 || subject4 > 100 ||
        subject5 < 0 || subject5 > 100
    ) {
        document.getElementById("result").innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }

    // Calculate total
    let total = subject1 + subject2 + subject3 + subject4 + subject5;

    // Calculate percentage
    let percentage = ((total / 500) * 100).toFixed(2);

    // Check Pass or Fail
    let resultStatus;

    if (
        subject1 >= 35 &&
        subject2 >= 35 &&
        subject3 >= 35 &&
        subject4 >= 35 &&
        subject5 >= 35
    ) {
        resultStatus = "Pass";
    } else {
        resultStatus = "Fail";
    }

    // Calculate Grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display result
    let resultColor;

    if (resultStatus === "Pass") {
    resultColor = "green";
   } else {
    resultColor = "red";
   }

document.getElementById("result").innerHTML =
    "Student Name: " + studentName + "<br>" +
    "Total Marks: " + total + "/500<br>" +
    "Percentage: " + percentage + "%<br>" +
    "Grade: " + grade + "<br>" +
    "Result: <strong style='color: " + resultColor + ";'>" + resultStatus + "</strong>";
}

function clearForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";

    document.getElementById("result").innerHTML = "";
}