const logo = document.getElementById('logo');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

logo.addEventListener('click', () => {
  popup.style.display = 'flex'; // tampilkan popup dengan flex (karena css popup pakai flex)
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // tutup popup saat klik tombol close
});

// juga bisa tutup popup kalau klik di luar popup-content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
