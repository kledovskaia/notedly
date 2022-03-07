import { AuthForm } from '../components/AuthForm';
import { useAppMutation } from '../hooks/useAppMutation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  signIn: {
    token: string;
  };
};

export const SignIn = () => {
  useDocumentTitle('Sign In | Notedly');
  const [signIn] = useAppMutation<TDataResponse>('SIGN_IN', {
    onCompleted: ({ signIn: token }: TDataResponse) => console.log(token),
  });

  return <AuthForm type="Sign In" />;
};
