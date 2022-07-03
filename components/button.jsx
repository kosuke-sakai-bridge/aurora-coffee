import Link from 'next/link'

const Button = (props) => {
  return (
    <>
      <Link href={props.link}>
        <a className="c-button"><span>{props.name}</span></a>
      </Link>
    </>
  )
}

export default Button