import React from 'react'
import {Link} from 'react-router-dom'

function UserData() {

    function newWindow(){

    }
  return (
    <div>
        
      <h2>Registration Form</h2>
                <br></br>
                <form>
                    Passenger Name: 
                    <input type="text" name="username" value />
                    <br></br>
                    Seat: 
                    <input type="number" name="seat"  />
                    <br></br>
                    <button onClick={newWindow}>Submit</button>
                    </form>
                 
    </div>
  )
}

export default UserData
