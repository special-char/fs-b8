import React, { useState } from 'react'

function Card({}) {
  const [showContent, setShowContent] = useState(false)

  const handleClick = () => {
    setShowContent(!showContent)
  }

  return (
    <div>
      <div className="flex gap-7 justify-between border-b-2">
        <div>
          <h2 className="font-bold">Free and finest digital</h2>
          <h2 className="text-secondary font-bold">business card</h2>{' '}
          {showContent && (
            <p>
              Make your digital card with all your career, personal detauls and
              links simple with one app
            </p>
          )}{' '}
        </div>
        <div>
          <button
            onClick={handleClick}
            className="rounded-full border-2 text-3xl "
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
