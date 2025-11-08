// ============ MedSetu JavaScript ============
// This adds form data into the patient table dynamically

// Select the form and table body
const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#userTable tbody");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page reload

  // Get values from inputs
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;

  // Create a new row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${gender}</td>
    <td>${age}</td>
    <td>${city}</td>
    <td>${doctor}</td>
    <td>${date}</td>
  `;

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Show confirmation alert
  alert("✅ Appointment successfully booked for " + name + "!");

  // Clear form fields
  form.reset();
});
