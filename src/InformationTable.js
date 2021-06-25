function InformationTable({contacts}) {
    return (
      <table className='informationTable'>
        <thead> 
          <tr>
            <th >First name</th>
            <th >Last name</th>
            <th >Phone</th>
          </tr>
        </thead> 
        <tbody>
         {contacts ? contacts.map((user)=>{
          return <tr key={user.phone}>
          <td>{user.firstName}</td>
           <td>{user.lastName}</td>
           <td>{user.phone}</td>
           </tr>
         })
         : 'no contacts yet'}
        </tbody>
      </table>
    );
  }

  export default InformationTable