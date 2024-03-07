import React from 'react'
import { comments } from './overflowforum/commentData'
import Card from './overflowforum/card'
import './overflowforum/style.css'

function App() {
  return (
    <>
      <div className='wrapper'>
        <h1>Onine Forum where users provide their opininions over specific topic</h1>
        <h2>Following are 3 different opinions over cat</h2>
        {comments.map((item) => 
          <Card commentObject={item}/>
        )}
        
      </div>
    </>
  )
}

export default App
