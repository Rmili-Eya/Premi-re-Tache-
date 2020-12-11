  
import React from 'react';
import '../Css/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='./imgs/valid.jpg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;