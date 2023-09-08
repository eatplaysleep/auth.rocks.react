import BSButton from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import type { ButtonProps as BSButtonProps } from 'react-bootstrap/Button';
import type { SpinnerProps } from 'react-bootstrap/Spinner';

export const Button = ({
  children,
  loading = false,
  SpinnerProps: _SpinnerProps,
  ...props
}: ButtonProps) => {
  const { as, className, ...SpinnerProps } = _SpinnerProps || {};

  return (
    <BSButton {...props}>
      {loading ? (
        <>
          <Spinner
            {...{
              animation: 'grow',
              className: ['me-2', className].join(' '),
              size: 'sm',
              ...SpinnerProps,
            }}
          />
          Loading...
        </>
      ) : (
        children
      )}
    </BSButton>
  );
};

export interface ButtonProps extends BSButtonProps {
  loading?: boolean;
  SpinnerProps?: SpinnerProps;
}
