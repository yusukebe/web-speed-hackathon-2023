import { useQuery } from '@apollo/client';

import type { UserFragmentResponse } from '../graphql/fragments';
import type { GetUserAuthQueryResponse } from '../graphql/queries';
import { GetAuthUserQuery, GetMeQuery } from '../graphql/queries';

export const useAuthUser = () => {
  const authUserResult = useQuery<GetUserAuthQueryResponse>(GetAuthUserQuery);
  const authUser = authUserResult.data?.me;
  const authUserLoading = authUserResult.loading;
  const isAuthUser = !!authUser;

  return { authUser, authUserLoading, isAuthUser };
};

export const useAuthMe = () => {
  const authMe = useQuery<UserFragmentResponse>(GetMeQuery);
  const isAuthUser = !!authMe;
  return { isAuthUser };
};
