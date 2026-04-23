const guestForm = document.querySelector('.guest-form');

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const requests = document.getElementById('requests').value.trim();

  if (!title || !firstName || !lastName || !email) {
    alert('Please fill in all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Booking data
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;
  const rooms = document.getElementById('rooms').value;
  const roomType = document.getElementById('roomType').value;
  const roomTypeText = document.getElementById('roomType').selectedOptions[0].text;

  // Pricing
  const nights = calculateNights(checkin, checkout);
  const pricePerNight = roomPrices[roomType];
  const totalCost = nights * pricePerNight * rooms;

  const summaryCard = document.getElementById('summaryCard');
  const summarySection = document.getElementById('summarySection');

  summaryCard.innerHTML = `
    <p><strong>Name:</strong> ${title} ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Check-in:</strong> ${checkin}</p>
    <p><strong>Check-out:</strong> ${checkout}</p>
    <p><strong>Nights:</strong> ${nights}</p>
    <p><strong>Guests:</strong> ${guests}</p>
    <p><strong>Rooms:</strong> ${rooms}</p>
    <p><strong>Room Type:</strong> ${roomTypeText}</p>
    <p><strong>Total Cost:</strong> £${totalCost}</p>
    <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
  `;

  summarySection.style.display = 'block';
  summarySection.scrollIntoView({ behavior: 'smooth' });
});