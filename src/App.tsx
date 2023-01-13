import React, {useState} from 'react'
import Header from "./components/header/header";
import 'normalize.css';
import ModalMenu from "./components/modals/modal-menu";

function App() {

    const [menu, setMenu] = useState<boolean>(true);

    const toggleMenu = () => {
        setMenu(!menu)
    }

  return (
    <>
      <Header stateMenu={toggleMenu} stateMenuButton={menu}/>
        <ModalMenu toggleModalMenu={toggleMenu} showMenu={menu}/>
    </>
  )
}

export default App
