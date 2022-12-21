import React from 'react'

const Parent = () => {
  const style = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100vh'
}
  return (
    <div style={style}> <p> THIS IS MY Parent PAGE</p></div>
  )
}

export default Parent