//@components
import { LoginForm } from "@components/login";
import { Typography } from "@components/ui";

/**
 * Returns the Sign-in page component
 * @returns JSX.Element
 */
const SignIn = () => (
  <main className="content-container relative flex h-screen w-full flex-col items-center justify-center space-y-4">
    <Typography variant="h1" className="mb-8 ">
      Login to the Carallel app
    </Typography>
    <LoginForm />
  </main>
);

export default SignIn;
