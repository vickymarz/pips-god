type ButtonProps = {
  type: 'button' | 'submit',
  onClick?: (x?:any) => void,
  children: React.ReactNode,
  className?: string,
  id?: string
} & React.ComponentProps<'button'>

export const Button = ({
  children, ...rest
}: ButtonProps) => (
  <button {...rest}>
    {children}
  </button>
);

