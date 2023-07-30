import React from 'react'
import Card from './Card'

const Cards = ({ data }) => {
  return (
    <div className="container mx-auto m-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map(({ _id, name, category, brand, image, value, stock }) => (
          <div key={_id}>
            <Card name={name} image={image} category={category} brand={brand} value={value} stock={stock} id={_id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards