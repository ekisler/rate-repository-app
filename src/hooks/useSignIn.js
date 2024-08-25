import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });

      if (data && data.authenticate) {
        const { user, accessToken } = data.authenticate;

        if (!user || !accessToken) {
          throw new Error("Authentication failed");
        }

        return {
          username: user.username,
          accessToken,
        };
      }
      throw new Error("Authentication failed");
    } catch (error) {
      console.log("Error in sesion:", error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
