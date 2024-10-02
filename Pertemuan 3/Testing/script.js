let myArray = [];

// Create a new array
function createArray() {
    myArray = ['Apple', 'Banana', 'Orange'];
    displayArray();
}

// Get the current array
function getArray() {
    displayArray();
}

// Add an item to the array
function addToArray() {
    const newItem = prompt('Enter a new item to add:');
    if (newItem) {
        myArray.push(newItem);
        displayArray();
    } else {
        alert('Please enter a valid item.');
    }
}

// Remove the last item from the array
function removeFromArray() {
    if (myArray.length > 0) {
        myArray.pop();
        displayArray();
    } else {
        alert('Array is empty.');
    }
}

// Display the array in the output div
function displayArray() {
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(myArray, null, 2);
}
