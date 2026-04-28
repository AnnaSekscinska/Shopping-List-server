import {useState} from 'react'


export function ShoppingListPage() {

    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState<string[]>([]);

    const addProduct = () => {
        if (productName.trim() === "") return;

        setProducts([...products, productName]);
        setProductName("");
    }


    return (
        <div>
            <h1>Shopping List</h1>

            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}
                   placeholder="Add product" onKeyDown={(e) => {
                       if(e.key === "Enter" ) {
                           addProduct();
                       } }}/>
            <button onClick={addProduct}>Add</button>

            <ul>
                {products.map((p, index) => (
                    <li key={index}>{p}</li>
                ))}
            </ul>

        </div>
    );

}


export default ShoppingListPage;