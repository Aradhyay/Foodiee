import PropTypes from 'prop-types';
import { assets } from '../../assets/assets'
import './FoodItem.css'

const FoodItem = ({ name, price, description, image }) => {

    
  
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
    </div>
    <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>{price}</p>
    </div>

    </div>
  )
}
FoodItem.propTypes = {
            // Assuming id is a string
  name: PropTypes.string.isRequired,        
  price: PropTypes.number.isRequired,        
  description: PropTypes.string.isRequired,  
  image: PropTypes.string.isRequired,        
};

export default FoodItem
