import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.scss';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setFilteredItems(items); // Initialize filtered items with all items
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  const handleAddToOrder = async (itemId) => {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);

    // Navigate to OrderHistoryPage after adding an item
    navigate('/menu');
  }

  function handleCartIconClick() {
    // Navigate to OrderHistoryPage
    navigate('/orders/history');
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filtered);
    setSearchInput(searchTerm);
  }
  return (
    <main className={styles.NewOrderPage}>
      <div className={styles.TopLine}>
        <div className={styles.Logo}>

          <div className={styles.LogoPosition}>
            <Logo />
          </div>
          <h1 className={styles.Title}>Taste Trekker</h1>
        </div>
        <div className={styles.SearchBarContainer}>
          <input
            type="text"
            placeholder="Scour the Snacks"
            className={styles.SearchBar}
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.CartIconContainer}>
          <img
            src="https://i.imgur.com/BfEybWG.png"
            alt="Cart Icon"
            className={styles.CartIcon}
            onClick={handleCartIconClick}
          />
        </div>
        <UserLogOut user={user} setUser={setUser} />
      </div>
      <div className={styles.SecondLine}>
        <div className={styles.BurgerIcon}>
          <img
            src="https://i.imgur.com/sdfL9gG.png"
            alt="Hamburger Icon"
            className={styles.HamburgerIcon}
          />
        </div>
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
          style={{ backgroundColor: 'white' }}
        />
      </div>
    <div className={styles.ContentWrapper}>
      <div className={styles.MainContent}>
        <MenuList
          menuItems={filteredItems.filter(item => item.category.name === activeCat)}
          handleAddToOrder={handleAddToOrder}
        />
      </div>
      <aside className={styles.OrderDetailAside}>
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </aside>
      </div>
    </main>
  );
}
