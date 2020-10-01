import React from "react";

interface ErrorBoundaryProps {
    children: any;
};

interface ErrorBoundaryState {
    hasError: boolean;
};

 class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{
    
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = {
        hasError: false,
      };
    };

    static getDerivedStateFromError(error:boolean) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    };

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    };
};

export default ErrorBoundary;

/*export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
*/
