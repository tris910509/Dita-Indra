// Musik latar aktif saat klik pertama
window.addEventListener('click', () => {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  }
}, { once: true });

// Countdown
function countdown() {
  const eventDate = new Date("2025-06-20T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Acara telah berlangsung.";
    return;
  }

  const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;
  setTimeout(countdown, 1000);
}
countdown();

// RSVP WhatsApp
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const kehadiran = document.getElementById("kehadiran").value;
  const message = `Assalamu'alaikum, saya *${nama}* menyatakan *${kehadiran}* untuk acara pernikahan Rina & Budi.`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

// RSVP Email
document.getElementById("rsvpForm").addEventListener("input", function() {
  const nama = document.getElementById("nama").value;
  const kehadiran = document.getElementById("kehadiran").value;
  if (nama && kehadiran) {
    const subject = "Konfirmasi Kehadiran";
    const body = `Assalamu'alaikum,\n\nSaya ${nama} menyatakan ${kehadiran} untuk acara pernikahan Rina & Budi.\n\nTerima kasih.`;
    const emailLink = `mailto:undangan@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("emailLink").href = emailLink;
  }
});
