type ButtonProps = {
  type: 'button' | 'submit',
  onClick?: () => void,
  children: React.ReactNode
  className?: string
  id?: string
} & React.ComponentProps<'button'>

const Button = ({
  children, ...rest
}: ButtonProps) => (
  <button {...rest}>
    {children}
  </button>
);

export default Button;
