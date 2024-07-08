export default function CoreConcept({ image, title, description }) { // Use the same property names was defined as props
  return (
    <li>
      <img src={image} alt="..." />
      {/*  */}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}