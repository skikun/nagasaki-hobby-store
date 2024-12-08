import "./style.css";

const Component = ({ total, current, onClick }) => {
	return (
		<div className="paginator">
			{total.map((page) => {
				return (
					<button
						key={page}
						disabled={page === current}
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
