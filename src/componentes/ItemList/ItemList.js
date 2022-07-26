
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList = ( {listProducts} ) => {
    return (
        <>

            {listProducts.map((product) => {

                return <ItemProduct key={product.id} data={product}/>
            })}


        </>
    )
}

export default ItemList;