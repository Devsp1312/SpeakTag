document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startReturn');
    const returnForm = document.getElementById('returnForm');
    const successMessage = document.getElementById('successMessage');
    
    // Show form when start button is clicked
    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        returnForm.classList.remove('hidden');
        returnForm.querySelector('input').focus();
    });

    // Handle form submission
    returnForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value || 'Anonymous Helper',
            message: document.getElementById('message').value,
            shareLocation: document.getElementById('shareLocation').checked,
            contact: document.getElementById('contact').value
        };

        // Here you would typically send the data to your backend
        // For now, we'll simulate a successful submission
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            returnForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Optional: Add confetti or other celebration animation here
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your message. Please try again.');
        }
    });

    // Optional: Get city-level location when checkbox is checked
    document.getElementById('shareLocation').addEventListener('change', async (e) => {
        if (e.target.checked) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        enableHighAccuracy: false,
                        timeout: 5000,
                        maximumAge: 0
                    });
                });
                
                // Here you would typically reverse geocode to get city name
                // For now, we'll just store the coordinates
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // You can store this in a hidden input or in the formData object
                console.log('Location captured:', location);
                
            } catch (error) {
                console.error('Error getting location:', error);
                e.target.checked = false;
                alert('Unable to get location. Please try again or uncheck the box.');
            }
        }
    });
});