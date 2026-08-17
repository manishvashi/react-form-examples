import { Form } from 'react-router-dom';

export async function action({ request }) {
  const fd = await request.formData();
  const acquisitionChannel = fd.getAll('acquisition');
  const data = Object.fromEntries(fd.entries());
  data.acquisition = acquisitionChannel;
  console.log(data);
  return null;
}

export default function RouterForm() {
  const inputClass =
    'block w-full p-2 text-base rounded border border-[#758a8a] bg-[#d4e4e4] text-[#142020]';
  const labelClass = 'block text-xs mb-1 text-[#9bafaf] uppercase font-bold';

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <Form
        method='post'
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
          <input id='email' type='email' name='email' className={inputClass} />
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
              className={inputClass}
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='confirm-password' className={labelClass}>
              Confirm Password
            </label>
            <input
              id='confirm-password'
              type='password'
              name='confirm-password'
              className={inputClass}
            />
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
              name='first-name'
              className={inputClass}
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='last-name' className={labelClass}>
              Last Name
            </label>
            <input
              type='text'
              id='last-name'
              name='last-name'
              className={inputClass}
            />
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='role' className={labelClass}>
            What best describes your role?
          </label>
          <select id='role' name='role' className={inputClass}>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='employee'>Employee</option>
            <option value='founder'>Founder</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <fieldset className='mb-4 border-0 p-0'>
          <legend className={labelClass}>How did you find us?</legend>
          <div className='flex items-center mb-2'>
            <input
              type='checkbox'
              id='google'
              name='acquisition'
              value='google'
              className='mr-2'
            />
            <label htmlFor='google' className='text-gray-700'>
              Google
            </label>
          </div>
          <div className='flex items-center mb-2'>
            <input
              type='checkbox'
              id='friend'
              name='acquisition'
              value='friend'
              className='mr-2'
            />
            <label htmlFor='friend' className='text-gray-700'>
              Referred by friend
            </label>
          </div>
          <div className='flex items-center mb-2'>
            <input
              type='checkbox'
              id='other'
              name='acquisition'
              value='other'
              className='mr-2'
            />
            <label htmlFor='other' className='text-gray-700'>
              Other
            </label>
          </div>
        </fieldset>

        <div className='flex items-center mb-6'>
          <input
            type='checkbox'
            id='terms-and-conditions'
            name='terms'
            className='mr-2'
          />
          <label htmlFor='terms-and-conditions' className='text-gray-700'>
            I agree to the terms and conditions
          </label>
        </div>

        <div className='flex justify-end gap-4'>
          <button
            type='reset'
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
      </Form>
    </div>
  );
}
