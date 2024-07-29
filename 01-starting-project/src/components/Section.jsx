export default function Section({ title, children, ...props }) { // ... Alow to group multiple props
  return (
    // ... allow us to pass all the props to the section
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}