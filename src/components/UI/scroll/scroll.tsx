import { FC } from 'react'
import { Content, ScrollContainer } from './styled'

interface CustomScrollComponentProps {
  children: React.ReactNode
}

const CustomScrollbar: FC<CustomScrollComponentProps> = ({ children }) => {
  return (
    <ScrollContainer>
      <Content>{children}</Content>
    </ScrollContainer>
  )
}

export default CustomScrollbar
