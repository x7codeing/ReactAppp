// src/components/Header.js
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/Header.css'; // تأكد من استيراد ملف CSS

const Header = ({ cartItemCount }) => {
  return (
    <header>
        <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/products">Product Listing</Link>
        <Link to="/cart">
          <span>Cart ({cartItemCount})</span>
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default Header;
