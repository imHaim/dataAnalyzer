document.addEventListener("DOMContentLoaded", function() {
  let question; // Use camelCase for JavaScript variable names
  let databaseName;
  let taskName;
  let items = [];

  document.getElementById("Submit").onclick = function () {
      question = document.getElementById("question").value;
      databaseName = document.getElementById("databaseName").value;
      taskName = document.getElementById("taskName").value;

      items.length = 0; // Clears previous entries to store new ones
      items.push(question, databaseName, taskName);
      document.getElementById("handle").textContent = "[" +items.join(", ")+ "]";

      console.log(items);

      // Clearing input fields after submitting
      document.getElementById("question").value = '';
      document.getElementById("databaseName").value = '';
      document.getElementById("taskName").value = '';
  };

  document.getElementById("Upload").onclick = function () {
      // Define upload functionality here
      console.log('Upload button clicked');
  };

  document.getElementById("reset").onclick = function () {
      document.getElementById("handle").textContent = '';
      document.getElementById("question").value = '';
      document.getElementById("databaseName").value = '';
      document.getElementById("taskName").value = '';
      console.log('Reset executed');
  };
});
