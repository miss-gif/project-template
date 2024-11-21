interface ButtonProps {
  label: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ label, onClick, type = 'button' }: ButtonProps) => (
  <button type={type} onClick={onClick} className="button">
    {label}
  </button>
)

export default Button
