import React from 'react'
import Card from  './Card';

const CardList = ({robots}) => { 
    return robots.map((robot, i) =>
      <Card key={robot.id} email={robot.email} id={robot.id} name={robot.name} />
    )
}
export default CardList