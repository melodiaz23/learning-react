import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onNameChange }) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(editing => !editing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    // React will give an event object as an argument to the function
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    // value={name} alow us to set the value of the input and overwrites the value of the input
    // defaultValue={name} set an initial value
    editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />
    // The way of listening for changes in the input is called two-way binding because we're getting a value out of the input and feeding a value back into the input.
  }


  return (
    <><li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
    </li>
    </>
  )
}