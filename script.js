//your JS code here. If required.
 let counter = 0;

        // Function to increment the counter
function incrementCounter() {
            // Display the current value of counter
    alert(counter);
            // Increment the counter
    counter++;
            // Update the counter paragraph on the webpage
    document.getElementById("counter").innerText = counter;
}

        // Attach the incrementCounter function to the button click event
document.getElementById("incrementBtn").addEventListener("click", incrementCounter);