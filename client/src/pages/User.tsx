import { useAppQuery } from '../hooks/useAppQuery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  me: TUser;
};

export const User = () => {
  const { data } = useAppQuery<TDataResponse>('GET_USER_INFO');
  useDocumentTitle(`${data?.me?.username} | Notedly`);

  return <div>User</div>;
};
