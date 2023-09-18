import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);

	function handleOne() {
		if (count < 21) {
			setCount(count + 1);
		}
	}
	function handleTwo() {
		if (count < 21) {
			setCount(count + 2);
		}
	}
	function handleThree() {
		if (count < 21) {
			setCount(count + 3);
		}
	}

	function handleSub() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	function handleReset() {
		setCount(0);
	}

	function handlesOne() {
		if (count1 < 21) {
			setCount1(count1 + 1);
		}
	}
	function handlesTwo() {
		if (count1 < 21) {
			setCount1(count1 + 2);
		}
	}
	function handlesThree() {
		if (count1 < 21) {
			setCount1(count1 + 3);
		}
	}

	function handlesSub() {
		if (count1 > 0) {
			setCount1(count1 - 1);
		}
	}

	function handlesReset() {
		setCount1(0);
	}

	return (
		<div>
			<div className='content'>
				<div className='box1'>
					<h2>Bulls</h2>
					<p>{count}</p>
					<button onClick={handleOne} className='one'>
						+1
					</button>
					<button onClick={handleTwo} className='two'>
						+2
					</button>
					<button onClick={handleThree} className='three'>
						+3
					</button>
					<br />
					<button onClick={handleSub} className='sub'>
						Sub
					</button>
					<button onClick={handleReset} className='reset'>
						Reset
					</button>
				</div>
				<div className='box1'>
					<h2>Lakers</h2>
					<p>{count1}</p>
					<button onClick={handlesOne} className='one'>
						+1
					</button>
					<button onClick={handlesTwo} className='two'>
						+2
					</button>
					<button onClick={handlesThree} className='three'>
						+3
					</button>
					<br />
					<button onClick={handlesSub} className='sub'>
						Sub
					</button>
					<button onClick={handlesReset} className='reset'>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
export default App;
