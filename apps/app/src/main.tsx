import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
