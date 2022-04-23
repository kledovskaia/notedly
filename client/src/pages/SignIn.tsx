import * as Yup from 'yup';
import AuthForm from '../components/AuthForm';
import { useAppMutation } from '../hooks/useAppMutation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { AuthContext } from '../context/Auth';
import { useContext, useEffect, useState } from 'react';

type TDataResponse = {
  signIn: {
    token: string;
  };
};

const validationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required(
    'Please enter your Username or  the Email'
  ),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your password'),
});

const fields = [
  { name: 'usernameOrEmail', type: 'text', label: 'Username or Email *' },
  { name: 'password', type: 'password', label: 'Password *' },
];

export const SignIn = () => {
  useDocumentTitle('Sign In');
  const { login } = useContext(AuthContext);

  const [signIn, { error: signInError }] = useAppMutation<TDataResponse>(
    'SIGN_IN',
    {
      onCompleted: ({ signIn: token }: { signIn: string }) => login(token),
    }
  );
  const [error, setError] = useState(signInError);

  useEffect(() => {
    setError(signInError);
  }, [signInError]);

  const handleSubmit = (values: any) => {
    signIn({
      variables: {
        email: values.usernameOrEmail,
        username: values.usernameOrEmail,
        password: values.password,
      },
    });
  };

  const resetError = () => setError(undefined);

  return (
    <AuthForm
      resetError={resetError}
      error={error}
      type="Sign In"
      fields={fields}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    />
  );
};
