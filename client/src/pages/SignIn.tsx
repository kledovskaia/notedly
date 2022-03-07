import * as Yup from 'yup';
import { AuthForm } from '../components/AuthForm';
import { useAppMutation } from '../hooks/useAppMutation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  signIn: {
    token: string;
  };
};

const validationSchema = Yup.object().shape({
  'username or email': Yup.string().required(
    'Please enter a username or an email'
  ),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your password'),
});

export const SignIn = () => {
  useDocumentTitle('Sign In | Notedly');
  const [signIn] = useAppMutation<TDataResponse>('SIGN_IN', {
    onCompleted: ({ signIn: token }: TDataResponse) => console.log(token),
  });

  return <AuthForm type="Sign In" validationSchema={validationSchema} />;
};
