import { useContext } from 'react';
import * as Yup from 'yup';
import { AuthForm } from '../components/AuthForm';
import { AuthContext } from '../context/Auth';
import { useAppMutation } from '../hooks/useAppMutation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  signUp: {
    token: string;
  };
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username is Required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please create a password'),
  repeatPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please repeat the password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const fields = [
  { name: 'username', type: 'text', label: 'Username *' },
  { name: 'email', type: 'email', label: 'Email *' },
  { name: 'password', type: 'password', label: 'Password *' },
  { name: 'repeatPassword', type: 'password', label: 'Repeat Password *' },
];

export const SignUp = () => {
  useDocumentTitle('Sign Up | Notedly');
  const { setIsLoggedIn } = useContext(AuthContext);

  const [signUp] = useAppMutation<TDataResponse>('SIGN_UP', {
    onCompleted: ({ signUp: token }: { signUp: string }) => {
      localStorage.setItem('notedly-token', token);
      setIsLoggedIn(true);
    },
  });

  const handleSubmit = (values: any) => {
    signUp({
      variables: {
        email: values.email,
        username: values.username,
        password: values.password,
      },
    });
  };

  return (
    <AuthForm
      type="Sign Up"
      fields={fields}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    />
  );
};
