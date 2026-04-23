const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');

    //Prevent selecting past dates
    const today = new Date().toISOString().split('T')[0];
    checkin.setAttribute('min', today);

    checkin.addEventListener('change', () => {
      checkout.value = '';
      checkout.setAttribute('min', checkin.value);
    });