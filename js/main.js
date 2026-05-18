const nav = document.getElementById('navLinks');
const ham = document.getElementById('menuToggle');

ham.addEventListener('click', () => {
  const icon = ham.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  nav.classList.toggle('open');
});

function sendToWhatsApp() {
  // Get form values
  const name     = document.getElementById('name').value;
  const phone    = document.getElementById('phone').value;
  const service  = document.getElementById('service').value;
  const location = document.getElementById('location').value;
  const size     = document.getElementById('size').value;
  const message  = document.getElementById('message').value;

  // Validate required fields
  if (!name || !service || !location) {
    alert('Please fill in your name, service and location.');
    return;
  }

  // Build the WhatsApp message
  const text = `
 *NEW QUOTE REQUEST*

 *Name:* ${name}
 *Phone:* ${phone}
 *Service:* ${service}
 *Location:* ${location}
 *Size:* ${size || 'Not specified'}
 *Details:* ${message || 'None'}
  `.trim();

  // YOUR WhatsApp number (include country code, no + or spaces)
  const yourNumber = '23408144628685';

  // Redirect to WhatsApp
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${yourNumber}?text=${encoded}`, '_blank');
}