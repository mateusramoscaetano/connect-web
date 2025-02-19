import cn from '@/utils/cn'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {}

export function IconButton({ className, ...props }: Props) {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        'p-1.5 bg-gray-500 text-blue  rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
        className
      )}
    />
  )
}
