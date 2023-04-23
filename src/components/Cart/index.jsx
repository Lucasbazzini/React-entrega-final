import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import ItemCart from '../ItemCart'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import './totalPrice.css'



const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.mail.value;
    const emailRepeat = event.target.elements["mail-repeat"].value;

    if (email === emailRepeat) {
      if (event.target.checkValidity()) {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const order = {
          comprador: {
            name: event.target.elements.nombre.value,
            email: event.target.elements.mail.value,
            phone: event.target.elements.phone.value,
          },
          items: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
          })),
          total: totalPrice(),
        };
        addDoc(ordersCollection, order)
          .then(({ id }) => alert(id))
          .catch((error) => console.error("Error adding order: ", error));
      }
    } else {
      alert("Los correos electrónicos no coinciden");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="containerMasCompras">
        <p>¡No hay elementos cargados en el carrito!</p>
        <Link className="buttonMasCompras" to="/">
          Ver los productos
        </Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="totalPrice">Total: ${totalPrice()}</p>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
        className="input-formulario"
          required
          type="text"
          name="nombre"
          id=""
          placeholder="Nombre Completo"
        />
        <input
        className="input-formulario"
          required
          type="number"
          name="phone"
          id=""
          placeholder="Numero de telefono"
        />
        <input
        className="input-formulario"
          required
          type="email"
          name="mail"
          id=""
          placeholder="E-Mail"
        />
        <input
        className="input-formulario"
          required
          type="email"
          name="mail-repeat"
          id=""
          placeholder="Repetir E-Mail"
        />
        <button type="submit" className="comprar">
          Comprar
        </button>
      </form>
    </>
  );
};

export default Cart;
