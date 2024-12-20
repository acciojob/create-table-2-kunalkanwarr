function createTable() {
    //Write your code here
  // Prompt the user to enter the number of rows
    let rows = parseInt(prompt("Input number of rows"), 10);
    
    // Prompt the user to enter the number of columns
    let columns = parseInt(prompt("Input number of columns"), 10);
    
    // Get the table element by its ID
    let table = document.getElementById("myTable");
    
    // Clear any existing content in the table
    table.innerHTML = "";
    
    // Create the table rows and columns based on user input
    for (let i = 0; i < rows; i++) {
        // Create a new row
        let row = table.insertRow(i);
        
        // Create columns for each row
        for (let j = 0; j < columns; j++) {
            // Insert a cell in the current row
            let cell = row.insertCell(j);
            
            // Set the text of the cell to "Row-i Column-j"
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
