import React, { Component } from "react";

//Generic ErrorBoundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line react/no-unescaped-entities
      return <h1>Ffs, something went wrong. We're working on fixing it.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
