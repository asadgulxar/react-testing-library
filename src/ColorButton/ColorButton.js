import { useState } from 'react';

import '../App.css';

function ColorButton() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ isDisabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        disabled={isDisabled}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onClick={() => setDisabled((val) => !val)} />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default ColorButton;
