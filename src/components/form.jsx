import React from 'react';

const Form = ({ handleChange, submit, formData, error}) => {

  return (
    <form onSubmit={submit} className='form text-center flex flex-col items-center justify-center gap-4 p-4 w-1/2 mx-auto mt-4 bg-gray-200 rounded shadow shadow-gray-400 text-gray-800 '>
      {Object.keys(formData).map((key, i) => (
        <div key={i}>
          <label htmlFor={key} className='text-lg font-bold mb-2'>Ingrese {key}</label>
          <input type="text" name={key} id={key} onChange={handleChange} className='p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 mb-4' value={formData[key]}/>
          {  
          error[key] && <p className='text-red-500'>{error[key]}</p>
          }
        </div>
      ))}
    </form>
  );
};

export default Form;
