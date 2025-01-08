import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useAuth } from '../components/AuthContextProvider';

const ReactHook = () => {
	const handlerRef = useRef<HTMLFormElement>(null);

	const onClickChildEvent = () => {
		handlerRef.current?.addNumber();
	};

	return (
		<>
			<div>
				<h2>ReactHook Test</h2>
				<div className="box">
					<SateComponent />
				</div>
				<div className="box">
					<ContextComponent />
				</div>
				<div className="box">
					<RefComponent />
				</div>
				<div className="box">
					<ImperativeHandleComponent ref={handlerRef} name="ImperativeHandle Component" />
					<button onClick={onClickChildEvent}>Ref Click</button>
				</div>
			</div>
		</>
	);
};

export default ReactHook;

/**
 * useState 예제
 * @returns
 */
const SateComponent = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log('>> ReactHook mount', value);
	}, []);

	useEffect(() => {
		console.log('>> ReactHook value update', value);
		// 초기화
		// return () => {
		// 	console.log('>> ReactHook unmounte');
		// };
	}, [value]);

	return (
		<>
			<h3>UseSate Component</h3>
			<div>{value}</div>
			<div>
				<button onClick={() => setValue(value + 1)}>Click</button>
				<button onClick={() => setValue(0)}>Clear</button>
			</div>
		</>
	);
};

/**
 * useContext 예제
 * @returns
 */
const ContextComponent = () => {
	const { isAuth, setIsAuth } = useAuth();

	return (
		<>
			<h3>Context Component</h3>
			<div>{isAuth ? '권한 존재' : '권한 미존재'}</div>
			<button onClick={() => setIsAuth(!isAuth)}>Contenxt 변경</button>
		</>
	);
};

/**
 * useRef 예제
 * @returns
 */
const RefComponent = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onClickEvent = () => {
		inputRef.current?.focus();
	};
	return (
		<>
			<h3>Ref Component</h3>
			<div>
				<input ref={inputRef} type="text" placeholder="canal frame test" />
			</div>
			<div>
				<button onClick={onClickEvent}>focus</button>
			</div>
		</>
	);
};

/**
 * useImperativeHandle 예제
 */
const ImperativeHandleComponent = forwardRef((props: any, ref: any) => {
	const [value, setValue] = useState(0);

	const addNumber = () => {
		setValue(value + 1);
	};

	useImperativeHandle(ref, () => ({ addNumber }));

	return (
		<>
			<h3>ImperativeHandle Component</h3>
			<div>
				{props.name} : {value}
			</div>
		</>
	);
});
