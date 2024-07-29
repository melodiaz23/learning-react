export default function TabButton({ children, isSelected, ...props }) {

  return <li>
    {/* handleClick must not be executed (not called)
    it is called only when the button is clicked */}
    <button className={isSelected ? 'active' : undefined} {...props} >{children}</button>
  </li>
}