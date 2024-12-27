interface Props {
	href: string;
	svgName: string;
	cName: string;
	altName: string;
}

const IconImage = (props: Props) => {
	return (
		<a href={props.href} target="_blank">
			<img src={props.svgName} className={props.cName} alt={props.altName} />
		</a>
	);
};

export default IconImage;
