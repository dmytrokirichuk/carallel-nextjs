//@components
import { toast } from "react-toastify";

// @hooks
import { useState } from "react";

/**
 * Get the sign in methods with loading state.
 * @returns
 */
export function useSignIn() {
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const signInWithCredentials = async (email: string) => {
    setLoadingState(true);

    new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(`Sign-in successful! Greetings, ${email}!`);

    setLoadingState(false);

    return {
      success: true,
    };
  };

  return {
    signInWithCredentials,
    loadingState,
  };
}

export default useSignIn;
