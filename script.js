$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We’ll get back to you shortly.');
    this.reset();
  });
});
