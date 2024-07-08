export default function TabButton({ children, onSelect, isSelected }) {

  return <li>
    {/* handleClick must not be executed (not called)
    it is called only when the button is clicked */}
    <button className={isSelected ? 'active' : undefined} onClick={onSelect} >{children}</button>
  </li>
}