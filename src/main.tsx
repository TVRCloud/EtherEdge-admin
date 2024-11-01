import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Verify from "./verify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "./components/ui/provider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Verify />
          </PersistGate>
        </ReduxProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
