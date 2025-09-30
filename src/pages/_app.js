import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MyReducerContextProvider } from "@/custom-reducer-context/MyReducerContext";

export default function App({ Component, pageProps }) {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <MyReducerContextProvider>
        <Component {...pageProps} />
      </MyReducerContextProvider>
    </QueryClientProvider>
  );
}
