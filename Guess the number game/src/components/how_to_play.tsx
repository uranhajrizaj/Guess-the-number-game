export function Innstructions(){
    return (
      <div className="instructions">
        <h3>Read the instructions how to play the game.</h3>
        <div>
          You have to guess a number between 100 and 999.
          <ul>
            <li>
              <div className="color cgreen"></div>
              <div>Number is in the correct place</div>
            </li>
            <li>
              <div className="color cyellow"></div>
              <div> Number is correct but it's not in the right place</div>
            </li>
            <li>
              <div className="color cred"></div>
              <div>Number is not correct</div>
            </li>
          </ul>
        </div>
      </div>
    )
}