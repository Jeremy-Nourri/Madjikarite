import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

import noix from 'src/assets/imgs/search_bar_noix.png';

import { changeSearch, displaySearchRequest } from '../../actions/searchBar';

import './style.scss';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = useSelector((state) => state.searchBar.search);

  const products = useSelector((state) => state.products.listProducts);

  const filteredProducts = products.filter((product) => (
    product.product_name.toLowerCase().includes(search.toLowerCase())
       || product.category_name.toLowerCase().includes(search.toLowerCase())
      )
      );

  const handleChange = (event) => {
    dispatch(changeSearch(event.target.value));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(displaySearchRequest(filteredProducts));
    navigate('/search');
  };

  return (
    
    <div className="search">
      <IoSearch className="search__icon" />
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Rechercher un article..."
          value={search}
          onChange={handleChange}
        />
      </form>
      <img 
        src={noix} 
        className="search__noix" 
        alt="noix de karité" 
        onClick={handleSubmit}>
      </img>
    </div>
  );
}

export default Search;
