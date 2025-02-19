import type { ComponentProps } from 'react'

type CardContainerProps = ComponentProps<'div'> & {}

export function CardContainer({ ...props }: CardContainerProps) {
  return (
    <div
      className="bg-gray-700 border  border-gray-700 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative"
      {...props}
    />
  )
}

type CardValueProps = ComponentProps<'span'> & {}

export function CardValue({ ...props }: CardValueProps) {
  return (
    <span
      className="font-heading text-2xl font-semibold text-gray-200 leading-none"
      {...props}
    />
  )
}
type CardLabelProps = ComponentProps<'span'> & {}

export function CardLabel({ ...props }: CardLabelProps) {
  return (
    <span
      className="text-sm text-gray-300 leading-none text-center"
      {...props}
    />
  )
}
