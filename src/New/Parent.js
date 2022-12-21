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
    <div style={style}> <h1>THIS IS MY PARENTS PAGE</h1></div>
  )
}

export default Parent