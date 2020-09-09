import React, { HTMLAttributes } from 'react'
import { colors, SpacingPropType, spacingClasses } from '../Color/Box'
import { mapValues } from 'lodash'
import cx from 'classnames'

export const TextSizes = {
  large: 'drac-text-lg',
  medium: 'drac-text-md',
  normal: 'drac-text',
  small: 'drac-text-sm'
}

export const TextWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
}

export const TextColors = mapValues(colors, className => {
  return className.replace('-bg-', '-text-')
})

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: keyof typeof TextSizes
  weight?: keyof typeof TextWeights
  color?: keyof typeof TextColors
  spacing?: SpacingPropType
}

export const Text: React.FC<TextProps> = props => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      TextSizes[props.size ?? 'normal'],
      TextWeights[props.weight ?? 'normal'],
      TextColors[props.color ?? 'black'],
      spacingClasses(props.spacing)
    )
  }

  return <span {...finalProps}>{props.children}</span>
}

export const Paragraph: React.FC<TextProps> = props => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      TextSizes[props.size ?? 'normal'],
      TextWeights[props.weight ?? 'normal'],
      TextColors[props.color ?? 'black'],
      spacingClasses(props.spacing ?? 'smallY')
    )
  }

  return <p {...finalProps}>{props.children}</p>
}