type CardProps = {
  name: string
  type: string
  children?: React.ReactNode
}

const Card = ({ name, type, children }: CardProps) => {
  return (
    <div className="Card">
      <div className="Name">{name}</div>
      <div className="Type">{type}</div>
      <div className="Content">{children}</div>
    </div>
  )
}

export default Card
