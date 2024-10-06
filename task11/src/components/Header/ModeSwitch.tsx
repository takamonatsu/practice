import React from 'react'

const ModeSwitch = () => {
  return (
    <div className='switchArea'>
      <input type="checkbox" id="switchBtn" />
      <label htmlFor="switchBtn"><span></span></label>
      <div className="switchImg"></div>
    </div>
  )
}

export default ModeSwitch
