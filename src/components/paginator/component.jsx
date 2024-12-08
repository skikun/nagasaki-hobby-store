import "./style.css";

const Component = ({ total, current, onClick }) => {
	return (
		<div className="paginator">
			{total.map((page) => {
				console.log("sdfsdf", page, current);
				return (
					<button
						disabled={page === current ? "true" : ""}
						onClick={() => onClick(page)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Component;
