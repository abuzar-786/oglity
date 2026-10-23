import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // If the error comes from an external chrome extension, ignore and don't break app
    if (error.stack && error.stack.includes('chrome-extension://')) {
      return { hasError: false };
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error.stack && error.stack.includes('chrome-extension://')) {
      return;
    }
    console.warn('Caught unhandled UI error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111315] text-[#F1F0EC] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#181B1E] border border-[#252A2E] p-8 rounded-[8px] text-center">
            <h2 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-3 text-white">
              Something went wrong
            </h2>
            <p className="text-sm text-[#B8BEC4] mb-6 font-sans">
              An unexpected display issue occurred. Refreshing the page usually resolves this.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-[#C7F000] text-[#111315] font-bold text-sm tracking-wide rounded-[4px] hover:bg-[#d6f829] transition-colors"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
