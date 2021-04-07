import { ButtonWrapper } from './styed'
import 'twin.macro'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <ButtonWrapper tw="hidden">
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(
          ' '
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </ButtonWrapper>
  )
}

export default Button
