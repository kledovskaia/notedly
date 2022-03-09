import { useParams } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = {
  user: TUser;
};

export const User = () => {
  const { id } = useParams();
  const { data } = useAppQuery<TDataResponse>('GET_USER_INFO', {
    variabels: { id },
  });
  useDocumentTitle(`${data?.user?.username} | Notedly`);

  return <div>User</div>;
};
