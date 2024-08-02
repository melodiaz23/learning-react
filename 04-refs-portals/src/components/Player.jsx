import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    // With current I can get access to all the methods and properties of the DOM element
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''; // React is not about manipulating the DOM. So it must be use with care.
  }

  return (
    <section id="player">
      {/* ?? operator returns enteredPlayerName if it's not null or undefined, otherwise 'unknown' */}
      <h2>Welcome {enteredPlayerName ?? 'unknown'} </h2>
      <p>
        {/* The ref prop allows us to access the DOM element directly */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}