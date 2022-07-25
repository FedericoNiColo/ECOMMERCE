import './ItemListContainer.css';
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = () => {

    const producto1 = {
        nombre: "VueJS",
        precio: 2500,
        img: './img/1.jpg',
        stock: 7
    }
    const producto2 = {
        nombre: "Angular",
        precio: 2300,
        img: './img/2.jpg',
        stock: 4
    }
    const producto3 = {
        nombre: "React JS",
        precio: 3200,
        img: './img/3.jpg',
        stock: 12
    }

    return (
        <main className="contenedor">
            <h1>Nuestros productos</h1>
            <div className="grid">
                <ItemProduct data={producto1} />
                <ItemProduct data={producto2} />
                <ItemProduct data={producto3} />
              {/*   <ItemProduct nombre="ReduxS" precio="2500" img={'img/4.jpg'} />
                <ItemProduct nombre="Node.js" precio="2800" img={'img/5.jpg'} />
                <ItemProduct nombre="SASS" precio="2000" img={'img/6.jpg'} />
                <ItemProduct nombre="HTML5" precio="1800" img={'img/7.jpg'} />
                <ItemProduct nombre="GitHub" precio="2700" img={'img/8.jpg'} />
                <ItemProduct nombre="Bulma" precio="3200" img={'img/9.jpg'} />
                <ItemProduct nombre="TypeScript" precio="2500" img={'img/10.jpg'} />
                <ItemProduct nombre="Drupal" precio="2800" img={'img/11.jpg'} />
                <ItemProduct nombre="Javascript" precio="2000" img={'img/12.jpg'} />
                <ItemProduct nombre="GraphQL" precio="1800" img={'img/13.jpg'} />
                <ItemProduct nombre="WordPress" precio="2700" img={'img/14.jpg'} /> */}
                <div className="grafico grafico--camisas"></div>
                <div className="grafico grafico--node"></div>
            </div>
        </main>
    )
}

export default ItemListContainer;