import React from 'react'


const FamilyMember = ({person, toggle, handleDelete}) => (
  <div>{person.name}
  <button onClick={() => toggle('put', person)}>Edit</button>
  <button onClick={() => handleDelete(person.id, 'family')}>Delete</button>
  </div>
)

export default FamilyMember