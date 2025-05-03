const scriptURL = 'https://script.google.com/macros/s/AKfycbxFxcbzXOyGie8ccfWvy38q1pBb5827tXbnT6NzLOnOvxpZXhFJIaHp4WMJcim4clpE/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault(); // ✅ تصحيح هنا

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! Your form is sent successfully."))
    .then(() => window.location.reload())
    .catch(error => console.error('Error!', error.message)); // ✅ تصحيح هنا
});
