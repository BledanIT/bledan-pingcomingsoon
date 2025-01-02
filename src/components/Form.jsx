import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm(email);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
      console.log(email);
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  }

  const validateForm = (email) => {
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Please provide an email address';
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please provide a valid email address';
    }

    return errors;
};

  return (
    <form onSubmit={submitForm} className = 'flex flex-col gap-2 text-center text-xs mx-auto mb-8 w-3/4 *:w-full *:rounded-full *:h-fit md:flex-row'>
        <div className = '*:w-full *:rounded-full flex-grow'>
          <input type = 'text' value = {email} placeholder = 'Your email address...' onChange = {(e) => setEmail(e.target.value)} className = {`border ${errors.email ? 'border-errorCol' : 'border-paleblue'} text-textCol1 px-4 py-3 outline-none`}></input>
          {errors.email && <p className = 'text-2xs text-errorCol text-center mb-4 md:mb-0'>{errors.email}</p>}
        </div>
        <button type = 'submit' className = 'font-semibold bg-buttonCol text-white shadow-lg shadow-paleblue py-3 ease-linear duration-150 hover:opacity-75 active:scale-95 md:w-1/2'>Notify me</button>
    </form>
  )
}

export default Form