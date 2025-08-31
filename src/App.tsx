import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router";
import Turnstile, { useTurnstile } from "react-turnstile";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { useAuthenticateMutation } from "./redux/queries/auth-query";
import { resetCompleted, setToken } from "./redux/reducers/turnstile";
import { AppRouter } from "./router/app-router";
import { AppSidebar } from "./views/sidebar";

function App() {
  const dispatch = useDispatch();
  const { shouldReset } = useSelector((state: any) => state.turnstile);
  const [authenticate] = useAuthenticateMutation();
  const turnstile = useTurnstile();

  const production = useMemo(() => {
    return !location.hostname.includes("localhost");
  }, [location.hostname]);

  // Handle reset when shouldReset is true
  useEffect(() => {
    if (shouldReset && turnstile.reset) {
      console.info("Resetting Turnstile widget");
      turnstile.reset();
      dispatch(resetCompleted());
    }
  }, [shouldReset, turnstile, dispatch]);

  return (
    <BrowserRouter>
      <Turnstile
        fixedSize
        sitekey={
          production ? "0x4AAAAAABuVwktvjjjHNKe2" : "1x00000000000000000000AA"
        }
        appearance="interaction-only"
        onSuccess={async (token) => {
          console.info("Turnstile success");
          try {
            const response = await authenticate({ token }).unwrap();
            if (response?.token) {
              dispatch(setToken(response.token));
            }
          } catch (e) {
            alert(JSON.stringify(e));
          }
        }}
        onError={(error) => {
          console.info("Turnstile error:", error);
          dispatch(setToken(null));
        }}
        onExpire={() => {
          console.info("Turnstile token expired");
          dispatch(setToken("EMPTY"));
        }}
        refreshExpired="auto"
        style={{ position: "absolute", bottom: 0, right: 0, zIndex: 1000 }}
      />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <AppRouter />
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
