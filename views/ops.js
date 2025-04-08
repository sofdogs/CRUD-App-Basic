document.addEventListener('DOMContentLoaded', function() {
    
    function loadData() {
        // Make a GET request to the server endpoint
        fetch('http://localhost:8000/getData')
        .then(response => response.json())
        .then(data => {
            // Update the table with the retrieved data
            const dataBody = document.getElementById('generatedTableData');

            dataBody.innerHTML = '';

            data.forEach(row => {
                const newRow = dataBody.insertRow();
                const idCell = newRow.insertCell(0);
                const nameCell = newRow.insertCell(1);
                const ageCell = newRow.insertCell(2);
                //const updateCell = newRow.insertCell(3);
                const deleteCell = newRow.insertCell(3);

                // Use innerHTML to set HTML content
                idCell.innerHTML = row.id;
                nameCell.innerHTML = row.name;
                ageCell.innerHTML = row.age;

                // Create a delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteRow(row.id)); // Attach event listener

                /*
                const updateButton = document.createElement('button');
                updateButton.textContent = 'Update';
                updateButton.addEventListener('click', () => updateRow(row.id)); // Attach event listener
                */

                deleteCell.appendChild(deleteButton);
                //updateCell.appendChild(updateButton);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
    function deleteRow(id) {
        // Make a DELETE request to the server endpoint
        fetch(`http://localhost:8000/users/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                // If the delete is successful, reload the data
                loadData();
            } else {
                console.error('Error deleting data:', response.statusText);
            }
        })
            .catch(error => {
            console.error('Error deleting data:', error);
        });
    }
    // Fetch data when the page is loaded
    loadData();
});

function insertNewRow() {
    const currName = document.getElementById('name').value;
    const currAge = document.getElementById('age').value;

    const data = {
        id: 1,
        name: currName,
        age: currAge,
    };

    // POST request
    fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            console.log('Data inserted successfully');
            // Optionally, you can update your table or perform other actions after successful insertion
            loadData();  // Assuming you have a function to reload your table
        } else {
            console.error('Error inserting data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error inserting data:', error);
    });
}

   // Function to update a row
   function updateRow() {
    // Make a DELETE request to the server endpoint
    const currID = document.getElementById('id').value;
    const currName = document.getElementById('name2').value;
    const currAge = document.getElementById('age2').value;

    console.log("Current ID:", currID);
    console.log("Current Name:", currName);
    console.log("Current Age:", currAge);

    const data = {
        id: parseInt(currID),
        name: currName,
        age: parseInt(currAge),
    };


        // Make a PUT request to the server endpoint
        fetch(`http://localhost:8000/users/${currID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    // If the update is successful, reload the data
                    loadData();
                } else {
                    console.error('Error updating data:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });    
}



/*
document.addEventListener('DOMContentLoaded', function() {
    // Function to make an HTTP request and update the table
    function loadData() {
      // Make a GET request to the server endpoint
      fetch('/getData')
        .then(response => response.json())
        .then(data => {
          // Update the table with the retrieved data
          const dataTable = document.getElementById('dataTable');
          const dataBody = document.getElementById('generatedTableData');
  
          // Clear existing table data
          dataBody.innerHTML = '';
  
          // Loop through the data and add rows to the table
          data.forEach(row => {
            const newRow = dataBody.insertRow();
            const idCell = newRow.insertCell(0)
            const nameCell = newRow.insertCell(1);
            const ageCell = newRow.insertCell(2);
            const deleteCell = newRow.insertCell(3);
  
            idCell.textContent = row.id;
            nameCell.textContent = row.name;
            ageCell.textContent = row.age;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteRow(row.id)); // Attach event listener

            // Append the delete button to the delete cell
            deleteCell.appendChild(deleteButton);

          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    // Fetch data when the page is loaded
    loadData();
  });
  
function insertNewRow(){
    const currName = document.getElementById('name').value;
    const currAge = document.getElementById('age').value;

    const data = {
        name: currName,
        age: currAge,
    }
    //POST request
    fetch('/insertData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('Data inserted successfully');
        } else {
          console.error('Error inserting data:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error inserting data:', error);
      });
}
//currently not deleting the row 
function deleteRow(id) {
    // Make a DELETE request to the server endpoint
    fetch(`/deleteData/${id}`, { method: 'DELETE' })
        .then(response => {
        if (response.ok) {
            // If the delete is successful, reload the data
            loadData();
        } else {
            console.error('Error deleting data:', response.statusText);
        }
        })
        .catch(error => {
        console.error('Error deleting data:', error);
        });
}
*/