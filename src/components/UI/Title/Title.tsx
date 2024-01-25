import { FC, ReactHTML } from 'react'
import './Title.scss'

interface TitleProps {
  parentClass: string,
  children: string
  titleAs?: keyof ReactHTML,
  size: number
}

const Title: FC<TitleProps> = ({ parentClass, children, titleAs, size }) => {
  const TitleAs = titleAs ? titleAs : 'p';

  const className = `title ${parentClass}__title title--size-${size}`;
  return (
    <TitleAs className={className}>{children}</TitleAs>
  )
}

export default Title;
