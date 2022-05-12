import { FieldErrors, useForm } from 'react-hook-form';

// Better Errors (set, clear, display)
// Have control over inputs

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });

  // watching onChange
  console.log(watch());

  const onValid = (data: LoginForm) => {
    console.log('valid');
    reset();
    // resetField('password'); // 특정 필드 초기화
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 5,
            message: 'The username should be longer than 5 chars.',
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com') || 'Gmail is not allow',
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
