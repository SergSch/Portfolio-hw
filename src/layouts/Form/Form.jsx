import { useForm } from 'react-hook-form';
import classes from '../../styles/Form.module.css';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleForm)}>
      <input
        type="text"
        placeholder="First Name"
        {...register('firstname', {
          required: 'Please fill out this field',
          minLength: {
            value: 3,
            message: 'too short name',
          },
          maxLength: {
            value: 10,
            message: 'Too long name',
          },
          pattern: {
            value: /^[a-zA-Z]*$/,
            message: 'Incorrect name',
          },
        })}
      />
      <p style={{ color: 'red' }}>{errors.firstname?.message}</p>
      <input
        type="text"
        name=""
        placeholder="Last Name"
        {...register('lastname', {
          required: 'Please fill out this field',
          minLength: {
            value: 2,
            message: 'Too short lastname',
          },
          maxLength: {
            value: 10,
            message: 'Too long lastname',
          },
          pattern: {
            value: /^[a-zA-Z]*$/,
            message: 'Incorrect lastname',
          },
        })}
      />
      <p style={{ color: 'red' }}>{errors.lastname?.message}</p>

      <input
        type="text"
        name=""
        placeholder="Your Email"
        {...register('email', {
          required: 'Please fill out this field',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Please enter email',
          },
        })}
      />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>

      <textarea name="" id="" cols="30" rows="7"></textarea>
      <button>Send Message</button>
    </form>
  );
};
export default Form;
