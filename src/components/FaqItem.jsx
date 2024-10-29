import React from 'react'

function FaqItem(title, content) {
  return (
    <div className='folds'>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default FaqItem