import tw from 'twin.macro'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? tw`bg-blue-500 hover:bg-blue-700`
    : tw`bg-green-500 hover:bg-green-700`

  const sizes = {
    small: tw`py-1 px-3 text-sm`,
    medium: tw`py-2 px-4 text-base`,
    large: tw`py-3 px-5 text-lg`,
  }

  return (
    <button
      type="button"
      tw="text-white font-bold  rounded-full"
      css={[mode, sizes[size]]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
