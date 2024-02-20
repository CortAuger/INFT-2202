(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"
    // Update the navbar title to say "YOUR NAME"
    document.title = "Cort Auger";
    document.querySelector(".navbar-brand").textContent = "Cort Auger";

    // Question 2
    // get a reference to the test table
    const table = document.getElementById("test-table");

    // get a reference to the second row in the table
    const secondRow = table.rows[1];

    // update the student number to be 100100100
    secondRow.cells[2].textContent = "100100100";


    // Question 3
    // create a table row with your own information
    const newRow = document.createElement("tr");

    // create a table delimeter and set your first name
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = "Cort";

    // add it to your table row
    newRow.appendChild(firstNameCell);

    // create a table delimeter and set your last name
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = "Auger";
    // add it to your table row
    newRow.appendChild(lastNameCell);
    // create a table delimeter and set your banner id
    const studentNumberCell = document.createElement("td");
    studentNumberCell.textContent = "100862581";
    // add it to your table row
    newRow.appendChild(studentNumberCell);
    // add your row to the test table body
    const tableBody = document.querySelector("#test-table tbody");
    tableBody.appendChild(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    const rowToRemove = tableBody.rows[2];
    tableBody.removeChild(rowToRemove);

    // Question 5
    // add the .table-info class to your personal row
    newRow.classList.add("table-info");

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    const rowToRemoveClass = tableBody.rows[0];
    rowToRemoveClass.classList.remove("table-warning");

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    const rowToChangeClass = tableBody.rows[1];
    rowToChangeClass.classList.remove("table-dark");
    rowToChangeClass.classList.add("table-success");

    // Question 8
    // use the node pacakge manager to install a new package, holderjs (see https://www.npmjs.com/package/holderjs)
    // include the holder script at the bottom of index.html
    // under the container div holding the test-table, create another container div, and create an image place"holder".

})();
