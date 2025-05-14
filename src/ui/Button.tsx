import type { ButtonHTMLAttributes } from 'react';
import styled from './styled';
import theme from './theme';

type ButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = styled.button({
  padding: '1rem',
  background: theme.colors.black,
  color: theme.colors.white,

  [`&:hover`]: {
    color: theme.colors.white,
    background: theme.colors.primary.default,
  },
});

const Button = function (props: ButtonProps) {
  const { label, ...rest } = props;

  return (
    <ButtonBase {...rest}>
      <span>{label}</span>
    </ButtonBase>
  );
};

export default Button;
