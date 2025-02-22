/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from "prop-types"; 
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list,
    };

    return (
        
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};


StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default StoreContextProvider;
