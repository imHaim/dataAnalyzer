document.addEventListener("DOMContentLoaded", function () {
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
    document.getElementById("handle").textContent = "[" + items.join(", ") + "]";
    console.log(items);
    // Show loading indicator (example)
    document.getElementById("loading").style.display = "block";

    // Sending the data to the server
    fetch('http://96.20.87.48:5000/receive_data', {  // Include protocol and full route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({question: question, databaseName: databaseName, taskName: taskName})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById("response").style.display = "block";
      document.getElementById("response").textContent = "Data received successfully!";
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("response").style.display = "block";
      document.getElementById("response").textContent = "Error: Could not send data.";
    })
    .finally(() => {
      // Hide loading indicator
      document.getElementById("loading").style.display = "none";
      // Clearing input fields after submitting
      document.getElementById("question").value = "";
      document.getElementById("databaseName").value = "";
      document.getElementById("taskName").value = "";
    });
    document.getElementById("Upload").onclick = function () {
      // Define upload functionality here
      console.log("Upload button clicked");
    };
  };

  document.getElementById("reset").onclick = function () {
    document.getElementById("handle").textContent = "";
    document.getElementById("question").value = "";
    document.getElementById("databaseName").value = "";
    document.getElementById("taskName").value = "";
    console.log("Reset executed");
  };
});
