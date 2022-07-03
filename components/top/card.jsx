import Image from 'next/image'

const Card = (props) => {
  return (
    <li>
      <Image src={props.src} alt={props.alt} width={256} height={256}></Image>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.price}</dd>
      </dl>
    </li>
  )
}

export default Card