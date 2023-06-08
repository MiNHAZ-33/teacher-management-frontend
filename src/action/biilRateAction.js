
export const addItem = (title, subItemName, subItemPrice) => {
    return  {
        type: 'ADD_ITEM',
        payload: {
            title,
            subItemName,
            subItemPrice
        }
    };
};

export const showModalToUi = () => {
    return {
        type: 'SHOW_MODAL'
    };
};

export const hideModalToUi = () => {
    return {
        type: 'HIDE_MODAL'
    };
};

export const updateNewItem = (name, value) => {
    return {
        type: 'UPDATE_NEW_ITEM',
        payload: {
            name,
            value
        }
    };
};

export const resetNewItem = () => {
    return {
        type: 'RESET_NEW_ITEM'
    };
};
