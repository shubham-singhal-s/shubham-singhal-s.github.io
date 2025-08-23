import { BrowserRouter } from "react-router";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppRouter } from "./router/app-router";
import { AppSidebar } from "./views/sidebar";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <AppRouter />
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
