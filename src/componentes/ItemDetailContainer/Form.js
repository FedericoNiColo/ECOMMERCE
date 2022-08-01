const Form = () => {
    return (
        <form className="formulario">
        <select className="formulario__campo">
            <option disabled selected>Seleccionar talle</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
        </select>
        <input className="formulario__campo" type="number" placeholder="Cantidad" min="1" />
        <input className="formulario__submit" type="submit" value="Agregar al carrito" />
    </form>
    )
}

export default Form;