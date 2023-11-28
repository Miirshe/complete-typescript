import React, { useState } from 'react'
import Counter from './components/Counter';
const App = () => {
	const [counter , setCounter] = useState<number>(1);
  return (
	<div className='hero'>
		<Counter setCounter={setCounter} counter={counter}/>
	</div>
  )
}

export default App