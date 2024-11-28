import { useRef, useEffect, useState } from "react";

function SettingsIcon({ isSettingsOpen, setIsSettingsOpen }) {
	const handleClick = () => setIsSettingsOpen((prev) => !prev);

	return (
		<svg
			className="settings-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			onClick={handleClick}
		>
			<g fill="none">
				<path
					fill="black"
					d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
				></path>
			</g>
		</svg>
	);
}

function TestTimeButton({
	duration,
	index,
	selectedButtonIndex,
	setSelectedButtonIndex,
	setTime,
}) {
	const handleClick = () => {
		setSelectedButtonIndex(index);
		setTime(duration);
	};

	return (
		<button
			onClick={handleClick}
			className={`test-time-btn ${
				selectedButtonIndex === index ? "active-btn" : ""
			}`}
		>
			{duration}
		</button>
	);
}

function Header({
	settingsOpened,
	setSettingsOpened,
	time,
	setTime,
	currentTime,
	setCurrentTime,
}) {
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(1);

	useEffect(() => {
		setTime([15, 30, 60, 120][selectedButtonIndex]);
	}, [selectedButtonIndex]);

	return (
		<header className="container-column">
			<div className="home container">
				<h1 className="main-title">Typing test</h1>
				<SettingsIcon
					isSettingsOpen={settingsOpened}
					setIsSettingsOpen={setSettingsOpened}
				/>
			</div>

			<div className="button-list container">
				{[15, 30, 60, 120].map((duration, index) => (
					<TestTimeButton
						key={duration}
						duration={duration}
						index={index}
						selectedButtonIndex={selectedButtonIndex}
						setSelectedButtonIndex={setSelectedButtonIndex}
						setTime={setTime}
					/>
				))}
			</div>
		</header>
	);
}

export default Header;