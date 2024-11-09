import { Tabs } from "@chakra-ui/react";
import LoginTable from "../../components/auth/loginTable";
import SignUpTable from "../../components/auth/signUpTable";

const Login = () => {
  return (
    <div
      className={`min-h-screen bg-[url('https://codingstella.com/wp-content/uploads/2024/01/download-5.jpeg')] bg-bottom bg-cover flex items-center justify-center `}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-8 rounded-lg shadow-xl w-full max-w-md">
        <Tabs.Root fitted variant={"line"} defaultValue={"login"}>
          <div className="mb-6 text-center">
            <h2 className="text-white text-3xl font-semibold">Welcome</h2>
            <p className="text-gray-300 text-sm">
              Please sign in or create a new account.
            </p>
          </div>

          <Tabs.List className="flex justify-center bg-inherit mb-5">
            <Tabs.Trigger
              value="login"
              className="text-lg font-semibold text-white py-2 px-4 transition duration-200"
            >
              Login
            </Tabs.Trigger>
            <Tabs.Trigger
              value="signup"
              className="text-lg font-semibold text-white py-2 px-4 transition duration-200"
            >
              Sign Up
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Indicator />

          <Tabs.Content value="login">
            <LoginTable />
          </Tabs.Content>

          <Tabs.Content value="signup">
            <SignUpTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Login;
