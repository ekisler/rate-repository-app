import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
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

        authStorage.setAccessToken(accessToken);

        navigate("/repositories");

        apolloClient.resetStore();

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
