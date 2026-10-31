document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hello AZUL CASA, I would like to book a service.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/250783554879?text=${text}`, '_blank');
  document.getElementById('formNote').textContent = 'Opening WhatsApp with your service request...';
});

document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('.nav nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.right = '4%';
  nav.style.background = '#fff';
  nav.style.padding = '20px';
  nav.style.border = '1px solid #e0eaf1';
  nav.style.borderRadius = '12px';
});
