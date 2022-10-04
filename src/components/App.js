import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('picture', {required: true})} type='file' name='picture' />
      <button>Submit</button>
    </form>
  );
}

export default App;
