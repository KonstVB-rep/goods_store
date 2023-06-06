import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Container from "./Container/Container";

const ErrorElement = () => {
  const error = useRouteError();

  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Container>This page doesn't exist!</Container>;
    }

    if (error.status === 401) {
      return <Container>You aren't authorized to see this</Container>;
    }

    if (error.status === 503) {
      return <Container>Looks like our API is down</Container>;
    }

    if (error.status === 418) {
      return <Container>🫖</Container>;
    }
  }

  return (
    <Container>
      <span>Something went wrong!</span>
      {error.statusText && <span>Status text: {error.statusText}</span>}
    </Container>
  );
};

export default ErrorElement;
