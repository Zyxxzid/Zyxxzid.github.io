
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.querySelector(".navbar-menu");

  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navMenu.classList.toggle("show");
  });
});

(function(){
    emailjs.init({ publicKey: "4NRhOH4KVyEfNc_mN" });
  })();

  document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // kirim berdasarkan TEMPLATE EmailJS
    try {
      await emailjs.send("service_5y1lf7l", "template_wy428g7", {
        username: e.target.username.value,
        email: e.target.email.value,
        pesan: e.target.pesan.value
      });
      alert("Pesan terkirim ✅");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim ❌");
    }
  });