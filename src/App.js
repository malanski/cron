import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Digits } from './Digits';
import { Button } from './Button';

function App() {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false);
	const [paused, setPaused] = useState(false);


	// Inicializa o cronometro e é chamado no onClick do Start
	const start = () => {
		setRunning(true);
		setPaused(false)
		console.log('cron activated');
	}

	const pause = () => {
		setRunning(false);
		setPaused(true);
	}

	const reset = () => {
		pause();
		setTime(0);
		console.log('time is reseted')

	}
	useEffect(() => {
		let interval;

		if (running && !paused) {
			interval = setInterval(() => {
				setTime((time) => time + 10)
			}, 10);
		} else {
			clearInterval(interval);
			console.log('it is paused');
		};
		return () => {
			clearInterval(interval);
		};
	}, [running, paused]);

	return (
				<div className="App">
				<div className='cron-app'>

				<div className="social-media">
					<a href="https://github.com/malanski" title="github">
						<i className="socialfoot fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin">
						<i className="socialfoot fab fa-linkedin"></i>
					</a>
					<a href="https://www.facebook.com/ulisses.malanski/" title="facebook">
						<i className="socialfoot fab fa-facebook-square"></i>
					</a>
					<a href="https://www.instagram.com/ulissesmalanski_tattoo/" title="instagram">
						<i className="socialfoot fab fa-instagram"></i>
					</a>
				</div>

				<h1>Cron</h1>

				<Digits time={time} />

				<div className='actions'>
					<Button onClicou={start} disabled={running} className='btn btn-start'>
						Start
					</Button>
					<Button onClicou={pause} disabled={paused} className='btn btn-stop'>
						Stop
					</Button>
					<Button onClicou={reset} disabled={time === 0} className='btn btn-reset'>
						Reset
					</Button>
				</div>

				<div class="links">
				<h4>Links to Other Projects by Ulisses Malanski</h4>
				<ul class="projects">
					<li>
						<a href="https://malanski.github.io/pokeLoja2/" title="My Firts project">Ecommerce Card Game</a>
					</li>

					<li>
						<a href="https://malanski.github.io/Poke-Loja-3/" title="A different approach ">Ecommerce Clean</a>
					</li>

					<li>
						<a href="https://malanski.github.io/MyResume/" title="A short personal Resume">My Resume</a>
					</li>

					<li>
						<a href="https://malanski.github.io/CalculatorX/" title="JavaScript Calculator study">Calculator</a>
					</li>
					
					<li>
						<a href="https://malanski.github.io/DrumKit/" title="JavaScript study Drum Kit">Drum Kit</a>
					</li>
					
				</ul>
			</div>

			</div>
		</div>
	);
}

export default App;
