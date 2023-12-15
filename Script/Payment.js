async function processPayment() {
  const roomType = document.getElementById("roomType").value;
  const reservationDate = document.getElementById("reservationDate").value;
  const duration = document.getElementById("duration").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const bankType = document.getElementById("bankType").value;

  try {
    const response = await fetch('https://gray-lively-barnacle.cyclic.app/process/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomType,
        reservationDate,
        duration,
        paymentMethod,
        bankType,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to the next page or perform other actions
      alert('Payment successful! Redirecting to the next page.');
      window.location.href = '../index.html';
    } else {
      alert('Payment failed. Please try again.');
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    alert('An error occurred. Please try again later.');
  }
}

document.getElementById('paymentMethod').addEventListener('change', function () {
    var bankOptions = document.getElementById('bankOptions');
    bankOptions.style.display = this.value === 'bank' ? 'block' : 'none';
  });

  $(document).ready(function() {
      // Inisialisasi select2 pada elemen dengan ID 'paymentMethod'
      $('#paymentMethod').select2();
  
      // Event listener untuk perubahan pada elemen 'paymentMethod'
      $('#paymentMethod').on('change', function () {
        var bankOptions = $('#bankOptions');
        bankOptions.css('display', this.value === 'debitCard' ? 'block' : 'none');
      });
    });