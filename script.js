function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius').value;

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume field with the calculated volume value
  document.getElementById('volume').value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
