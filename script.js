function volume_sphere() {
  // Get the radius value entered by the user
  const radius = document.getElementById('radius').value;

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume field with the calculated volume value
  document.getElementById('volume').value = volume;
}

// Add an event listener to the form submit event
document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  volume_sphere(); // Call the volume_sphere function
});
