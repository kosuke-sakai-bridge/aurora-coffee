import Link from 'next/link'

const News = (props) => {
  return (
    <li>
      <Link href={props.link}>
        <a>
          <time dateTime={props.date}>{props.time}</time>
          <span>{props.title}</span>
        </a>
      </Link>
    </li>
  )
}

export default News