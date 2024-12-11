const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();
  formData.email = '';
  formData.message = '';
});
