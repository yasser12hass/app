const scriptURL = 'https://script.google.com/macros/s/AKfycbxFxcbzXOyGie8ccfWvy38q1pBb5827tXbnT6NzLOnOvxpZXhFJIaHp4WMJcim4clpE/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // إظهار رسالة انتظار أثناء الإرسال
  alert("يتم الآن إرسال المعلومات، الرجاء الانتظار...");

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("تم إرسال الاستمارة بنجاح! شكراً لك.");
      window.location.reload(); // إعادة تحميل الصفحة بعد الإرسال
    })
    .catch(error => {
      console.error('حدث خطأ!', error.message);
      alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    });
});
