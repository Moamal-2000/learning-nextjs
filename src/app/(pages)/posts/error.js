"use client";

const ErrorBoundary = ({ error }) => {
  return <p className="warning">{error.message}</p>;
};

export default ErrorBoundary;
