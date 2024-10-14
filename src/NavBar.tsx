interface NavBarProps {
    setAnimal: (animal: string) => void;
}

function NavBar({ setAnimal }: NavBarProps) {
  return (
    <nav>
      <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
      </ul>
      <button onClick={() => setAnimal("cats")} type="button">Chat</button>
      <button onClick={() => setAnimal("dogs")} type="button">Chien</button>
    </nav>
  )
}

export default NavBar
