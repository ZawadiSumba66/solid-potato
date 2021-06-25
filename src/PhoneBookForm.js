import { useState } from "react"
import InformationTable from "./InformationTable"

function PhoneBookForm({ addEntryToPhoneBook }) {
    const [contact, setContact] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
   
    const handleFirstChange = (e) =>{
     setFirstName( e.target.value)
    }

    const handleLastChange = (e) =>{
      setLastName( e.target.value)
     }

     const handlePhoneChange = (e) =>{
      setPhone( e.target.value)
     }
  
    const handleSubmit = (e)=>{
       e.preventDefault()
       setContact([firstName, lastName, phone]);
       console.log(contact)
    }
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <br />
        <input
          className='userFirstname'
          name='userFirstname' 
          type='text'
          value = {firstName}
          onChange = {handleFirstChange}
          placeholder = 'Coder'
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input 
          className='userLastname'
          name='userLastname' 
          type='text' 
          value = {lastName}
          onChange={handleLastChange}
          placeholder='Byte'
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className='userPhone' 
          name='userPhone' 
          type='text'
          value = {phone}
          onChange ={handlePhoneChange}
          placeholder='8885559999'
        />
        <br/>
        <input 
          className='submitButton'
          type='submit' 
          value='Add User' 
        />
      </form>
      <InformationTable contacts={contact}/>
      </div>
    )
  }

  export default PhoneBookForm