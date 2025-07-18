import React, { useEffect } from "react";
import RoutesApp from "./routes";
import { ApolloProvider } from "@apollo/client";
import { apolloPublicClient } from "./api/apolloClient";

export default function Root() {
  useEffect(() => {}, []);
  return (
    <React.StrictMode>
      <ApolloProvider client={apolloPublicClient}>
        <RoutesApp />
      </ApolloProvider>
    </React.StrictMode>
  );
}
