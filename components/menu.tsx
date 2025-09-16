export default function Menu({ items }: { items: string[] }) {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item} className="link">
          {item}
        </li>
      ))}
    </ul>
  )
}
