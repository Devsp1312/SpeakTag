document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startReturn');
    const returnForm = document.getElementById('returnForm');
    const successMessage = document.getElementById('successMessage');
    // Elements
    const sendBtn = document.getElementById('sendBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const shareLocation = document.getElementById('shareLocation');

    // Helper to show/hide views
    function showForm() {
        startButton.classList.add('hidden');
        returnForm.classList.remove('hidden');
        returnForm.setAttribute('aria-hidden', 'false');
        const firstField = document.getElementById('message');
        if (firstField) firstField.focus();
    }

    function showSuccess() {
        returnForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        // small celebration: briefly float emojis
        floatConfetti();
    }

    function resetToStart() {
        successMessage.classList.add('hidden');
        startButton.classList.remove('hidden');
        returnForm.reset();
    }

    // Start
    startButton.addEventListener('click', showForm);

    // Cancel
    cancelBtn.addEventListener('click', () => {
        returnForm.classList.add('hidden');
        startButton.classList.remove('hidden');
    });

    // Handle form submission
    returnForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = document.getElementById('message').value.trim();
        if (!message) {
            document.getElementById('message').focus();
            return;
        }

        const payload = {
            name: document.getElementById('name').value.trim() || 'Anonymous',
            message,
            shareLocation: shareLocation.checked,
            contact: document.getElementById('contact').value.trim() || null
        };

        // Disable send button while sending
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending…';

        try {
            // TODO: replace with real API call to BackHome Labs relay endpoint
            await new Promise(resolve => setTimeout(resolve, 900));

            // Show success state
            showSuccess();

        } catch (err) {
            console.error('Submit failed', err);
            alert('Unable to send message. Please try again.');
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send';
        }
    });

    // Basic location capture flow - city-level is handled server-side via reverse-geocoding
    shareLocation.addEventListener('change', async (e) => {
        if (!e.target.checked) return;
        if (!navigator.geolocation) {
            alert('Location is not supported by your browser.');
            e.target.checked = false;
            return;
        }

        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 7000 });
            });
            // Keep coords in console for now; server should convert to city-level
            console.log('Captured coords (server will reduce to city):', position.coords.latitude, position.coords.longitude);
        } catch (err) {
            console.warn('Location denied or timed out', err);
            alert('Unable to get location. Please allow location access or uncheck the box.');
            e.target.checked = false;
        }
    });

    // Small floating emoji confetti
    function floatConfetti() {
        const root = document.body;
        const emojis = ['✨','🎉','💫'];
        const pieces = [];
        for (let i=0;i<6;i++) {
            const span = document.createElement('span');
            span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
            span.style.position = 'fixed';
            span.style.left = (20 + Math.random()*60) + '%';
            span.style.top = '30%';
            span.style.fontSize = (12 + Math.random()*18) + 'px';
            span.style.opacity = '0.95';
            span.style.transition = 'transform 900ms ease-out, opacity 900ms linear';
            root.appendChild(span);
            // animate
            requestAnimationFrame(()=>{
                span.style.transform = `translateY(${100 + Math.random()*120}px) rotate(${Math.random()*360}deg)`;
                span.style.opacity = '0';
            });
            pieces.push(span);
        }
        setTimeout(()=> pieces.forEach(p=>p.remove()), 1200);
        // reset send button state after a moment
        setTimeout(()=>{
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send';
            // allow user to go back to start after a short delay
            setTimeout(resetToStart, 1600);
        }, 900);
    }
});