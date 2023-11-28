import React from 'react'
type counterProps = {
	counter: number,
	setCounter: React.Dispatch<React.SetStateAction<number>>
}
const Counter = ({ setCounter, counter }: counterProps) => {
	return (
		<div className='main'>
			<p className='counter-text'>Counter App </p>
			<p className='text-counter'>{counter}</p>
			<div className='sub-main'>
				<button onClick={() => setCounter(prev => prev + 1)} className='btn-add' type='button'>+</button>
				<button onClick={() => setCounter(prev => prev > 1 ? prev -1 : 0 )} className='btn-minus' type='button'>+</button>
			</div>
		</div>
	)
}

export default Counter