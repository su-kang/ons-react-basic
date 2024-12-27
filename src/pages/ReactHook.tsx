import { createContext, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Context = createContext<{ hello: string } | undefined>(undefined);

const ReactHook = () => {
	const [context, setContext] = useState('react context');
	const handlerRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		console.log('>> ReactHook Mount');
		return () => {
			console.log('>> ReactHook Unmount');
		};
	}, []);

	const chgContext = () => {
		setContext(context => context + ' add');
	};

	const onClickChildEvent = () => {
		handlerRef.current?.addNumber();
	};

	return (
		<>
			<Context.Provider value={{ hello: context }}>
				<div>
					<h2>ReactHook Test</h2>
					<div className="box">
						<SateComponent />
					</div>
					<div className="box">
						<ContextComponent />
						<button onClick={() => chgContext()}>change context</button>
						<button onClick={() => setContext('react context')}>init context</button>
					</div>
					<div className="box">
						<RefComponent />
					</div>
					<div className="box">
						<ImperativeHandleComponent ref={handlerRef} name="ImperativeHandle Component" />
						<button onClick={onClickChildEvent}>Ref Click</button>
					</div>
				</div>
			</Context.Provider>
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
		console.log('>> ReactHook value update', value);
		// 초기화
		// return () => {
		// 	console.log('>> ReactHook value clear');
		// };
	}, [value]);

	return (
		<>
			<h3>UseSateComponent</h3>
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
	const value = useContext(Context);
	return (
		<>
			<h3>ChildComponent</h3>
			<div>{value ? value.hello : ''}</div>
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
			<h3>RefComponent</h3>
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
			<h3>ImperativeHandleComponent</h3>
			<div>
				{props.name} : {value}
			</div>
		</>
	);
});
