const HomePage = () => {
  return null;

  /*
  const { isAuthenticated } = useAuth();

  const [isLogging, setIsLogging] = useState(true);

  if (!isAuthenticated) {
    if (isLogging) {
      return (
        <HomePageLayout>
          <LoginBlock>
            <strong
              className={"content-center cursor-pointer"}
              onClick={() => setIsLogging(false)}
            >
              Register
            </strong>
          </LoginBlock>
        </HomePageLayout>
      );
    }

    return (
      <HomePageLayout>
        <RegistrationBlock>
          <strong
            className={"content-center cursor-pointer"}
            onClick={() => setIsLogging(true)}
          >
            Login
          </strong>
        </RegistrationBlock>
      </HomePageLayout>
    );
  }

  return (
    <HomePageLayout>
      <strong>You are authorized</strong>
    </HomePageLayout>
  );

   */
};

export default HomePage;
