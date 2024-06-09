function updateParameters() {
    var temperature = document.getElementById('temperature').value;
    var pressure = document.getElementById('pressure').value;
    var radiation = document.getElementById('radiation').value;

    // Here you can implement logic to update the parameters in the nuclear power plant system
    // For this example, we'll just display a success message
    document.getElementById('status').innerText = "Parameters updated successfully!";
}