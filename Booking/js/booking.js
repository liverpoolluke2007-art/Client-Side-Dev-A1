document.addEventListener('DOMContentLoaded', () => {

  const guestForm = document.querySelector('.guest-form');

  guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title')?.value;
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName = document.getElementById('lastName')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const roomType = document.getElementById('roomType')?.value;
    const checkin = document.getElementById('checkin')?.value;
    const checkout = document.getElementById('checkout')?.value;

    console.log({ title, firstName, lastName, email, roomType, checkin, checkout });

    if (!title || !firstName || !lastName || !email || !roomType || !checkin || !checkout) {
      alert('Please complete all required fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const summaryCard = document.getElementById('summaryCard');
    const summarySection = document.getElementById('summarySection');

    summaryCard.innerHTML = `
      <h3>Booking Confirmed</h3>
      <p><strong>Name:</strong> ${title} ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Room Type:</strong> ${roomType}</p>
      <p><strong>Check-in:</strong> ${checkin}</p>
      <p><strong>Check-out:</strong> ${checkout}</p>
    `;

    summarySection.style.display = 'block';
    summarySection.scrollIntoView({ behavior: 'smooth' });

  });

});