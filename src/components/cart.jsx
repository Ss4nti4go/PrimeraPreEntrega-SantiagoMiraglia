import React from 'react';
import { useState } from 'react';
import { useCart } from './cartContext';
import Form from './form';
import Swal from 'sweetalert2'
import { collection, addDoc, getFirestore } from 'firebase/firestore';


const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [error, setError] = useState({
    name: '',
    email: ''
  });
  const [buyer, setBuyer] = useState({
    name: '',
    email: ''
  });
  const addToCart = (purchase) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, purchase).then(({ id }) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue registradaa',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Hubo un error',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const localError = {}
    if (!buyer.name) {
      localError.name = 'Por favor ingresa tu nombre'

    }
    if (!buyer.email || !buyer.email.includes('@')) {
      localError.email = 'Por favor ingresa un correo valido'
    }

    if (Object.keys(localError).length === 0) {
      const purchase = {
        buyer,
        items: cart,
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
      }
      setBuyer({ name: '', email: '' })
      setError({ name: '', email: '' });
      addToCart(purchase);
      clearCart();
      setError({});

   
    } else {
      setError(localError)
    }
  };

  return (
    <div className="p-8">

      <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío. Debes agregar productos para mandar una orden</p>
      ) : (
        < >
          <div className="mb-4 flex flex-col justify-between items-center">
            <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={buyer} className="mb-4" error={error} />

          </div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg">{item.name}</h3>
                  <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <div className=" bg-gray-100 p-4 w-1/3 text-center ">
              <p className="text-lg">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              <button className="bg-blue-500 text-white mt-3 w-1/2 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 justify-center item-center " onClick={handleSubmit}>Crear orden</button>
            </div>

          </div>

          <div className="mt-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
