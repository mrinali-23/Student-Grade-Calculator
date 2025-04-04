const calc = () => {
  let Physics = document.getElementById("Physics").value;
  let Chemistry = document.getElementById("Chemistry").value;
  let Maths = document.getElementById("Maths").value;
  let English = document.getElementById("English").value;
  let Bio = document.getElementById("Bio").value;
  let grades = "";

  let totalGrades =
    parseFloat(Physics) +
    parseFloat(Chemistry) +
    parseFloat(Maths) +
    parseFloat(English) +
    parseFloat(Bio);
  alert(totalGrades);

  let perc = (totalGrades / 500) * 100;
  alert(perc);

  if (perc >= 80 && perc <= 100) {
    grades = "A";
  } else if (perc >= 70 && perc <= 60) {
    grades = "B";
  } else if (perc >= 60 && perc <= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  if (perc >= 35) {
    document.getElementById(
      "showData"
    ).innerHTML = `Out of 500 your total grade is ${totalGrades} and percentage is ${perc}%.<br>Your grade is ${grades}.You are Pass.`;
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = `Out of 500 your total grade is ${totalGrades} and percentage is ${perc}%.<br>Your grade is ${grades}.You are Fail.`;
  }
};
