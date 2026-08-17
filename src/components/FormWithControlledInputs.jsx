import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  role: 'student',
  acquisition: [],
  terms: false,
};

export default function FormWithControlledInputs() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox' && name === 'acquisition') {
      setFormData(prev => ({
        ...prev,
        acquisition: checked
          ? [...prev.acquisition, value]
          : prev.acquisition.filter(v => v !== value),
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  function validate() {
    const errs = {};
    if (!formData.email) errs.email = 'Email is required';
    if (!formData.password) errs.password = 'Password is required';
    if (!formData.confirmPassword)
      errs.confirmPassword = 'Please confirm your password';
    else if (formData.password && formData.password !== formData.confirmPassword)
      errs.confirmPassword = 'Passwords do not match';
    if (!formData.firstName) errs.firstName = 'First name is required';
    if (!formData.lastName) errs.lastName = 'Last name is required';
    if (!formData.terms) errs.terms = 'You must accept the terms and conditions';
    return errs;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    console.log(formData);
  }

  function handleReset() {
    setFormData(initialState);
    setErrors({});
  }

  const inputClass =
    'block w-full p-2 text-base rounded border border-[#758a8a] bg-[#d4e4e4] text-[#142020]';
  const inputErrorClass =
    'block w-full p-2 text-base rounded border border-red-500 bg-[#d4e4e4] text-[#142020]';
  const labelClass = 'block text-xs mb-1 text-[#9bafaf] uppercase font-bold';
  const errorClass = 'text-red-500 text-xs mt-1';

  function fieldClass(key) {
    return errors[key] ? inputErrorClass : inputClass;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-10'
      >
        <h2 className='text-2xl font-bold text-center text-gray-800 mt-2 mb-1'>
          Welcome on board!
        </h2>
        <p className='text-center text-gray-500 mb-6'>
          We just need a little bit of data from you to get you started 🚀
        </p>

        <div className='mb-4'>
          <label htmlFor='email' className={labelClass}>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={fieldClass('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
          <div className='flex-1'>
            <label htmlFor='password' className={labelClass}>
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className={fieldClass('password')}
            />
            {errors.password && <p className={errorClass}>{errors.password}</p>}
          </div>
          <div className='flex-1'>
            <label htmlFor='confirm-password' className={labelClass}>
              Confirm Password
            </label>
            <input
              id='confirm-password'
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className={fieldClass('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className={errorClass}>{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <hr className='my-4' />

        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
          <div className='flex-1'>
            <label htmlFor='first-name' className={labelClass}>
              First Name
            </label>
            <input
              type='text'
              id='first-name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={fieldClass('firstName')}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
          </div>
          <div className='flex-1'>
            <label htmlFor='last-name' className={labelClass}>
              Last Name
            </label>
            <input
              type='text'
              id='last-name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className={fieldClass('lastName')}
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='role' className={labelClass}>
            What best describes your role?
          </label>
          <select
            id='role'
            name='role'
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
          >
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='employee'>Employee</option>
            <option value='founder'>Founder</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <fieldset className='mb-4 border-0 p-0'>
          <legend className={labelClass}>How did you find us?</legend>
          {[
            { id: 'google', label: 'Google' },
            { id: 'friend', label: 'Referred by friend' },
            { id: 'other', label: 'Other' },
          ].map(({ id, label }) => (
            <div key={id} className='flex items-center mb-2'>
              <input
                type='checkbox'
                id={id}
                name='acquisition'
                value={id}
                checked={formData.acquisition.includes(id)}
                onChange={handleChange}
                className='mr-2'
              />
              <label htmlFor={id} className='text-gray-700'>
                {label}
              </label>
            </div>
          ))}
        </fieldset>

        <div className='flex items-center mb-6'>
          <input
            type='checkbox'
            id='terms-and-conditions'
            name='terms'
            checked={formData.terms}
            onChange={handleChange}
            className='mr-2'
          />
          <label htmlFor='terms-and-conditions' className='text-gray-700'>
            I agree to the terms and conditions
          </label>
        </div>
        {errors.terms && <p className={errorClass}>{errors.terms}</p>}

        <div className='flex justify-end gap-4'>
          <button
            type='button'
            onClick={handleReset}
            className='px-4 py-2 text-base rounded bg-transparent text-[#91efef] cursor-pointer hover:text-[#869999]'
          >
            Reset
          </button>
          <button
            type='submit'
            className='px-4 py-2 text-base rounded bg-[#147b73] text-[#d9e2f1] cursor-pointer hover:bg-[#49fa7e]'
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
