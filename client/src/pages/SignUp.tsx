import * as Yup from 'yup';
import { AuthForm } from '../components/AuthForm';
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
});

export const SignUp = () => {
  useDocumentTitle('Sign Up | Notedly');
  const [signUp] = useAppMutation<TDataResponse>('SIGN_IN', {
    onCompleted: ({ signUp: token }: TDataResponse) => console.log(token),
  });

  return <AuthForm type="Sign Up" validationSchema={validationSchema} />;
};
