import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import PropTypes from 'prop-types';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='expolre-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu of delicious dishes, all just a tap away! Whether you are craving comforting classics or exciting new flavors, our food delivery app brings your favorites straight to your door.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item' >
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,   // Expecting a string for category
    setCategory: PropTypes.func.isRequired   // Expecting a function for setCategory
};

export default ExploreMenu
