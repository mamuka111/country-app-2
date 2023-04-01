import moon from "../images/moon.png";
import { Outlet } from "react-router-dom";

export default function Headeri(props) {
  const { isDarkMode, handleToggle } = props;  return (
    <>
      <header>
        <div className={`headerDiv ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
          <h1 className={`title ${isDarkMode ? 'dark-mode-title' : 'light-mode-title'}`}>Where in the world?</h1>
          <div onClick={handleToggle} className="modeDiv">
            <img className="moonImg" src={moon} alt="moon" />
            <p  className={`modeText ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>Dark Mode</p>
          </div>
        </div>
      </header>
      <Outlet />
  </>
   );
}