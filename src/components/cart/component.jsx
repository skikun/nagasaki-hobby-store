import "./style.css";

const Component = ({ open, onChange }) => {
	return (
		<div>
			<button onClick={() => onChange(!open)}>Ocultar</button>
			<aside open={open}>
				<h3>Carrito de compras</h3>
				<button>Hola</button>
			</aside>
		</div>
	);
};

export default Component;
