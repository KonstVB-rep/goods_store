import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="flex-grow flex flex-col">This page doesn't exist!</div>
      );
    }

    if (error.status === 401) {
      return (
        <div className="flex-grow flex flex-col">
          You aren't authorized to see this
        </div>
      );
    }

    if (error.status === 503) {
      return (
        <div className="flex-grow flex flex-col">
          Looks like our API is down
        </div>
      );
    }

    if (error.status === 418) {
      return <div className="flex-grow flex flex-col">🫖</div>;
    }
  }

  return (
    <div className="flex-grow flex flex-col">
      <span>Something went wrong!</span>
      <span>Status text: {error.statusText}</span>
    </div>
  );
};

export default ErrorElement;
