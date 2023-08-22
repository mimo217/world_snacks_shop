import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      const cart = await ordersAPI.getCart();
      setOrders(orders);
      setCart(cart);
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  async function handleChangeQty(itemId, newQty) {
    if (newQty < 0) {
      newQty = 0;
    }

    const updatedCart = await ordersAPI.setItemQtyInCart(activeOrder._id, itemId, newQty); // Use activeOrder's _id
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.OrderHistoryPage}>
       <div className={styles.TopLine}>
        <Logo />
        <h1 className={styles.Title}>Taste Trekker</h1>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </div>
      <div className={styles.OrderContent}>
        <OrderList
          orders={orders}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
        />
        {activeOrder && (
          <OrderDetail
            order={activeOrder}
            cart={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
          />
        )}
      </div>
    </main>
  );
}
