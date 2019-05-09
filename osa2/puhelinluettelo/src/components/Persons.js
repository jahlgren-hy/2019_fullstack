import React from 'react'

const Person = ( {person, onClickHandler} ) => {
  return (<li>
    {person.name} {person.number}
    <button onClick={onClickHandler(person.id)}>Poista</button>
  </li>);
}
  
const Persons = ( {persons,showNames,onClickHandler} ) => {
    return persons
      .filter(person => 
        person.name.toLowerCase().startsWith(showNames))
      .map(person =>
        <Person
          key={person.name}
          person={person}
          onClickHandler={onClickHandler}
        />
      )
}

  
export default Persons