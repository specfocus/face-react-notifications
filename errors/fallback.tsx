import { Component } from 'react';

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export declare function FallbackRender(
  props: FallbackProps,
): React.ReactElement<
  unknown,
  string | React.FunctionComponent | typeof Component
> | null;