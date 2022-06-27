import {FC} from "react";

interface WNHeaderProps {
  title: string
}

const WNHeader: FC<WNHeaderProps> = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

export default WNHeader;