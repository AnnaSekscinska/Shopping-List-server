import {useState} from 'react'



const url = "http://192.168.1.124:6767/api/products";

export function getProducts() {



    fetch(url)
        .then(res =>  res.json())
        .then(data => {console.log(data);})


}

//export async function putProducts() {

//    const response =  await fetch(url, {
//        method: "PUT",
//        headers: {
//            "Content-Type": "application/json"
//        },
//        body: JSON.stringify({
//            name:
//        })
//    });

//    console.log(response.status);
//}


export function ShoppingListPage() {

    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState<string[]>([]);

    const  addProduct = async () => {
        if (productName.trim() === "") return;

        setProducts([...products, productName]);
        setProductName("");

        const response =  await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${productName}`
    })
    });

console.log(response);


    }


    return (
        <div>
            <h1>Shopping List</h1>

            <input type="text" id="productNameInput" value={productName} onChange={(e) => setProductName(e.target.value)}
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