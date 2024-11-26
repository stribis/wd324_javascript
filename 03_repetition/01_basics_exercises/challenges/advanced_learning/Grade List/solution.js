function generateGrades(scores) {
    return scores.map((score) => {
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      if (score >= 70) return "C";
      return "F";
    });
  }

  document.getElementById("gradeButton").addEventListener("click", function () {
    let input = document.getElementById("gradeInput");
    let inputValues = input.value.split(",")
    let grades = generateGrades(inputValues);

    let list = document.getElementById("gradesList");
    list.innerHTML = ""; // Clear existing items
    grades.forEach((grade) => {
      let listItem = document.createElement("li");
      listItem.textContent = grade;
      list.appendChild(listItem);
    });
  });