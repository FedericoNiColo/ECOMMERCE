import './ItemListContainer.css';
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = () => {
    return (
        <main className="contenedor">
            <h1>Nuestros productos</h1>
            <div className="grid">
                <ItemProduct nombre="VueJS" precio="2500" img={'./img/1.jpg'}/>
                <ItemProduct nombre="Angular" precio="2300" img={'img/2.jpg'}/>
                <ItemProduct nombre="ReactJS" precio="3200" img={'img/3.jpg'}/>
                <ItemProduct nombre="ReduxS" precio="2500" img={'img/4.jpg'}/>
                <ItemProduct nombre="Node.js" precio="2800" img={'img/5.jpg'}/>
                <ItemProduct nombre="SASS" precio="2000" img={'img/6.jpg'}/>
                <ItemProduct nombre="HTML5" precio="1800" img={'img/7.jpg'}/>
                <ItemProduct nombre="GitHub" precio="2700" img={'img/8.jpg'}/>
            </div>
        </main>
    )
}

export default ItemListContainer;