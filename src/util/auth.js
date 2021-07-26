
// Context Provider component that wraps your app and makes auth object
// available to any child component that calls the useAuth() hook.
export function ProvideAuth({ children }) {
    const { asPath } = useRouter();
  
    if (eRoutes.includes(asPath.split("/")[1])) return <>{children}</>;
  
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        <Getstarted authState={auth} />
        {/* <NotificationPrompt authState={auth} /> */}
        {children}
      </authContext.Provider>
    );
  }
  
  // Hook that enables any component to subscribe to auth state
  export const useAuth = () => {
    return useContext(authContext);
  };
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(handleAuth);
  };