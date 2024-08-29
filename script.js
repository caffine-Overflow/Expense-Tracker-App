document.getElementById('expense-form').addEventListener('submit', saveToLocalStorage);

function saveToLocalStorage(event) {
    event.preventDefault();

    const expAmount = event.target.expAmount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const exptrack = {
        expAmount,
        description,
        category
    };

    // Save to localStorage
    localStorage.setItem('expenseTracker', JSON.stringify(exptrack));

    // Display the details on the screen
    showDetailsOnscreen(exptrack);

    // Reset the form
    event.target.reset();
}

function showDetailsOnscreen(exptrack) {
    const parentElement = document.getElementById('expenseList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${exptrack.expAmount} - ${exptrack.description} - ${exptrack.category}`;
    
    // Create a Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Exp';

    // Create an Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Exp';

    // Append Delete and Edit buttons to the list item
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Append the list item to the parent element
    parentElement.appendChild(li);

    // Delete functionality
    deleteBtn.addEventListener('click', function() {
        parentElement.removeChild(li);
       
    });

    // Edit functionality
    editBtn.addEventListener('click', function() {
        document.getElementById('expAmount').value = exptrack.expAmount;
        document.getElementById('description').value = exptrack.description;
        document.getElementById('category').value = exptrack.category;
        
        // Remove the current list item after editing to avoid duplicates
        parentElement.removeChild(li);
    });
}
