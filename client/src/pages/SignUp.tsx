import { AuthForm } from '../components/AuthForm';
import { useAppMutation } from '../hooks/useAppMutation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  signUp: {
    token: string;
  };
};

export const SignUp = () => {
  useDocumentTitle('Sign Up | Notedly');
  const [signUp] = useAppMutation<TDataResponse>('SIGN_IN', {
    onCompleted: ({ signUp: token }: TDataResponse) => console.log(token),
  });

  return <AuthForm type="Sign Up" />;
};
