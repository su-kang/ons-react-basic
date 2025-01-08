import IconImage from '../components/IconImage';

import reactLogo from '../assets/react.svg';
import MyComponent from '../components/MyComponent';
import viteLogo from '/vite.svg';

const ComponentEx = () => {
	return (
		<div>
			<h2 style={{ color: 'gray' }}>Component Test</h2>
			<div className="box">
				<IconImage href="https://vite.dev" svgName={viteLogo} cName="logo" altName="Vite logo"></IconImage>
				<IconImage href="https://react.dev" svgName={reactLogo} cName="logo react" altName="React logo"></IconImage>
			</div>
			<div>
				<MyComponent name="Hello React!!">React 화면</MyComponent>
				<MyComponent name="Hello Vue!!">Vue 화면</MyComponent>
				<MyComponent name="Hello Angular!!">Angular 화면</MyComponent>
			</div>
		</div>
	);
};

export default ComponentEx;
