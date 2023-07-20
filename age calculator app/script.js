const ageForm = document.getElementById('age-form');
const birthDateInput = document.getElementById('birth-date');
const birthDateError = document.getElementById('birth-date-error');
const resultDiv = document.getElementById('result');

ageForm.addEventListener('submit', calculateAge);

function calculateAge(event) {
  event.preventDefault();

  const birthDate = new Date(birthDateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  // Validation checks
  let valid = true;
  birthDateError.textContent = '';

  if (!birthDateInput.value) {
    valid = false;
    birthDateError.textContent = 'Please enter a valid date of birth';
  } else if (birthMonth > todayMonth || (birthMonth === todayMonth && birthDay > todayDay)) {
    valid = false;
    birthDateError.textContent = 'Birth date cannot be in the future';
  }

  if (valid) {
    const years = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    const days = today.getDate() - birthDate.getDate();

    resultDiv.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
    resultDiv.classList.add('fade-in-animation');
  } else {
    resultDiv.textContent = '';
    resultDiv.classList.remove('fade-in-animation');
  }
}
