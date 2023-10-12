import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
// import EditAdminInfo from "./mutation/EditAdminInfo";
// import UploadSpecialEmployer from "./mutation/UploadSpecialEmployer";
// import UploadHealthCheck from "./mutation/UploadHealthCheck";
// import UploadFamilyCheck from "./mutation/UploadFamilyCheck";
// import CreateVisitorInfo_v2 from "./mutation/CreateVisitorInfo_v2";
// import CreateMuPeopleVisitCard from "./mutation/CreateMuPeopleVisitCard";
import Test from "./socketTest/Test";

const uploadURL = "http://localhost:5050/graphql";

function App() {
  const uploadLink = createUploadLink({
    uri: uploadURL,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwiYWRtaW5fdXNlclR5cGUiOiJhZG1pbiIsImFkbWluX21hc3RlciI6dHJ1ZSwiZXhwaXJlZCI6MTY4OTIyMjIyNTI5OSwiaWF0IjoxNjg5MTM1ODI1fQ.C52OX3cM6uXYUmABRWSiDp76uHYJsPW-OohSXYwZ6WM",
      "Apollo-Require-Preflight": "true",
    },
  });

  const client = new ApolloClient({
    link: uploadLink,
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Test />
      </ApolloProvider>
    </div>
  );
}

export default App;
