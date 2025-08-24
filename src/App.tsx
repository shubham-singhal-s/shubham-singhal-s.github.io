import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router";
import Turnstile from "react-turnstile";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { setToken } from "./redux/reducers/turnstile";
import { AppRouter } from "./router/app-router";
import { AppSidebar } from "./views/sidebar";

function App() {
  const dispatch = useDispatch();

  const production = useMemo(() => {
    return !location.hostname.includes("localhost");
  }, [location.hostname]);
  return (
    <BrowserRouter>
      <Turnstile
        fixedSize
        appearance="interaction-only"
        sitekey={
          production ? "0x4AAAAAABuVwktvjjjHNKe2" : "1x00000000000000000000AA"
        }
        onSuccess={(token) => {
          dispatch(setToken(token));
        }}
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
