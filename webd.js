function updateParameters() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var pressure = parseFloat(document.getElementById('pressure').value);
    var radiation = parseFloat(document.getElementById('radiation').value);

    // Check if all fields are filled out
    if (!temperature || !pressure || !radiation) {
        document.getElementById('status').innerText = "Please fill out all fields.";
        return;
    }

    // Simulated update process (delayed for 2 seconds)
    document.getElementById('status').innerText = "Updating parameters...";
    setTimeout(function() {
        document.getElementById('status').innerText = "Parameters updated successfully!";
    }, 2000);
}