import { useState } from "react";
const initialProduct = [
  {
    productName: "colgate",
    productImage: "https://i.pravatar.cc/48?u=118836",
    purchaseQuantity: 12,
    availableQuantity: 10,
    soldQuantity: 2,
    price: 1700,
    totalPrice: 3400,
  },
  {
    productName: "Soap",
    productImage: "https://i.pravatar.cc/48?u=118836",
    purchaseQuantity: 24,
    availableQuantity: 12,
    soldQuantity: 12,

    price: 3000,
    totalPrice: 36000,
  },
  {
    productName: "Cotex",
    productImage: "https://i.pravatar.cc/48?u=118836",
    purchaseQuantity: 32,
    availableQuantity: 30,
    soldQuantity: 2,
    price: 1000,
    totalPrice: 2000,
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProduct);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSold, setSelectedSold] = useState(null);

  function handleSelectedProduct(product) {
    setSelectedProduct(product);
    setShowAddForm(false);
  }

  function handleAddProduct(product) {
    setProducts((products) => {
      //check if the product name is already exist
      const isProductExist = products.some(
        (prod) => prod.productName === product.productName
      );
      if (isProductExist) {
        return products;
      }
      return [...products, product];
    });
    setShowAddForm(!showAddForm);
  }
  function handleShowAddForm() {
    setShowAddForm((showAddForm) => !showAddForm);
    setSelectedProduct((selectedProduct) =>
      selectedProduct ? !selectedProduct : null
    );
    setSelectedSold(null);
  }
  function handleSold(product) {
    setSelectedSold(product);
    setShowAddForm(false);
    setSelectedProduct(null);
  }
  function handleUpdateSold(product) {
    setProducts((products) =>
      products.map((prod) =>
        prod.productName === product.productName
          ? { ...prod, ...product }
          : prod
      )
    );
    setSelectedSold(!product);
  }

  return (
    <div className="container">
      <div className="grouping">
        <ProductList
          products={products}
          onSelectedProduct={handleSelectedProduct}
          onSold={handleSold}
        />

        <SingleProduct
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <SoldOut selectedSold={selectedSold} onUpdateSold={handleUpdateSold} />
      </div>

      <Button bgColor="#6161d4" onClik={handleShowAddForm}>
        {showAddForm ? "Close Form" : "Add New Product"}
      </Button>
      {showAddForm && <AddProduct onAddProduct={handleAddProduct} />}
    </div>
  );
}
function Button({ onClik, children, bgColor }) {
  return (
    <button
      className="button"
      style={{
        background: bgColor,
        color: "#fff",
        marginRight: "5px",
        padding: "4px 8px",
        fontSize: "16px",
      }}
      onClick={onClik}
    >
      {children}
    </button>
  );
}
function ProductList({ products, onSelectedProduct, onSold }) {
  return (
    <div className="product">
      {/* avQ=quantity-soldq */}
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>Product-Name</th>
            <th>purchase-Quantity</th>
            <th>available-Quantity</th>
            <th>Sold-Quantity</th>
            <th>Price</th>

            <th>Product-Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <Product
              key={product.productName}
              product={product}
              index={index}
              onSelectedProduct={onSelectedProduct}
              onSold={onSold}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Product({ product, index, onSelectedProduct, onSold }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.productName}</td>
      <td>{product.purchaseQuantity}</td>
      <td>{product.availableQuantity}</td>
      <td>{product.soldQuantity}</td>
      <td>{product.price}</td>
      <td>
        <img src={product.productImage} alt={product.productName}></img>
      </td>
      <td>
        <Button bgColor="#6161d4" onClik={() => onSelectedProduct(product)}>
          View
        </Button>
        <Button bgColor="red" onClik={() => onSold(product)}>
          Sold
        </Button>
        <Button bgColor="green">Update</Button>
      </td>
    </tr>
  );
}

function AddProduct({ onAddProduct }) {
  const [name, setName] = useState("");
  const [pQuantity, setPQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleAddNewProduct(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!name || !pQuantity || !price) return;
    const soldQuantity = 0;
    const newProduct = {
      productName: name,
      purchaseQuantity: pQuantity,
      availableQuantity: pQuantity,
      soldQuantity: 0,
      price: price,
      totalPrice: price * soldQuantity,
      productImage: `${image}?u=${id}`,
    };
    onAddProduct(newProduct);
    setName("");
    setPQuantity("");
    setPrice("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <div className="addProduct">
      <form onSubmit={handleAddNewProduct}>
        <div className="group">
          <label>Product-Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="group">
          <label>Purchase Quantity</label>
          <input
            type="number"
            value={pQuantity}
            onChange={(e) => setPQuantity(Number(e.target.value))}
          />
        </div>
        <div className="group">
          <label>Available Quantity</label>
          <input type="number" value={pQuantity} disabled />
        </div>
        <div className="group">
          <label>Sold Quantity</label>
          <input type="number" value={0} disabled />
        </div>

        <div className="group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="group">
          <label>Product-Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Button bgColor="#6161d4"> Add Product</Button>
        </div>
      </form>
    </div>
  );
}
function SingleProduct({ selectedProduct, setSelectedProduct }) {
  if (!selectedProduct) return null;
  return (
    <div className="singleProduct">
      <div className="pro">
        <p>Product Name</p>
        <h3>{selectedProduct.productName}</h3>
      </div>
      <div className="pro">
        <img
          src={selectedProduct.productImage}
          alt={selectedProduct.productName}
        />
        <p>Purchase Quantity</p>
        <h3>{selectedProduct.purchaseQuantity}</h3>
      </div>
      <div className="pro">
        <p>Quantity Available</p>
        <h3>{selectedProduct.availableQuantity}</h3>
      </div>
      <div className="pro">
        <p>Sold Quantity</p>
        <h3>{selectedProduct.soldQuantity}</h3>
      </div>
      <div className="pro">
        <p>Price</p>
        <h3>{selectedProduct.price}</h3>
      </div>
      <div className="pro">
        <p>Total Price</p>
        <h3>{selectedProduct.totalPrice}</h3>
      </div>
      <Button
        bgColor="#6161d4"
        onClik={() => setSelectedProduct(!selectedProduct)}
      >
        Close
      </Button>
    </div>
  );
}
function SoldOut({ selectedSold, onUpdateSold }) {
  const [sold, setSold] = useState(0);
  if (!selectedSold) return null;
  const price = selectedSold.price;
  const newObject = {
    ...selectedSold,
    soldQuantity: sold,
    totalPrice: sold * price,
  };
  function handleSold(e) {
    e.preventDefault();
    if (newObject.soldQuantity > newObject.availableQuantity) return;
    const newProduct = {
      ...newObject,
      availableQuantity: newObject.availableQuantity - newObject.soldQuantity,
    };
    onUpdateSold(newProduct);
  }
  return (
    <div className="soldout">
      <form onSubmit={handleSold}>
        <div className="group">
          <label>Product-Name </label>
          <input type="text" value={newObject.productName} disabled />
        </div>

        <div className="group">
          <label>Available Quantity</label>
          <input type="number" disabled value={newObject.availableQuantity} />
        </div>
        <div className="group">
          <label>Sold Quantity</label>
          <input
            type="number"
            value={sold}
            onChange={(e) => setSold(Number(e.target.value))}
          />
        </div>

        <div className="group">
          <label>Price</label>
          <input type="number" value={newObject.price} disabled />
        </div>
        <div className="group">
          <label>Toal Price</label>
          <input type="number" value={newObject.totalPrice} disabled />
        </div>

        <div className="buttons">
          <Button bgColor="#6161d4"> Sold</Button>
        </div>
      </form>
    </div>
  );
}
function Update() {
  return (
    <div className="soldout">
      <form>
        <div className="group">
          <label>Product-Name </label>
          <input type="text" />
        </div>
        <div className="group">
          <label>Purchase Quantity</label>
          <input type="number" />
        </div>
        <div className="group">
          <label>Available Quantity</label>
          <input type="number" disabled />
        </div>
        <div className="group">
          <label>Sold Quantity</label>
          <input type="number" disabled />
        </div>

        <div className="group">
          <label>Price</label>
          <input type="number" />
        </div>
        <div className="group">
          <label>Product-Image</label>
          <input type="text" />
        </div>
        <div className="buttons">
          <Button bgColor="#6161d4"> Add Product</Button>
        </div>
      </form>
    </div>
  );
}
