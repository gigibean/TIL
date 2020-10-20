import React from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

const colorStyles = css`
  ${({ theme, color }) => {
    const seleted = theme.palette[color]
    return css`
      background: ${seleted};
      &:hover {
        background: ${lighten(0.1, seleted)};
      }
      &:active {
        background: ${darken(0.1, seleted)};
      }
    `
  }}
`

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
}

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`

const StyledButton = styled.button`
  display: iline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${sizeStyles}
  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`

function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
}

export default Button
