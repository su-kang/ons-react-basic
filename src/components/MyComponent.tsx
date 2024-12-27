interface Props {
	name: string;
	children?: any;
}

const MyComponent = ({ name, children }: Props) => {
	return (
		<div className="box">
			{/* 하위 컴포넌트 렌더링 */}
			<h2>컴퍼넌트 샘플</h2>
			<div>
				이름: {name} <br />
				컴퍼넌트: {children}
			</div>
		</div>
	);
};

export default MyComponent;
