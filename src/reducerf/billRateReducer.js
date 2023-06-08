const initialState = {
    items: [
        {
            title: 'Question making',
            subItems: [
                {
                    name: 'Theory',
                    price: 2000
                },
                {
                    name: 'Class test',
                    price: 300

                }
            ]
        },
        {
            title: 'Question Modfication',
            subItems: [
                {
                    name: 'Modification',
                    price: 2500
                }
            ]
        },
        {
            title: 'Script examining',
            subItems: [
                {
                    name: 'Semester Final',
                    price: 120
                },
                {
                    name: 'Semester Final 4 hours',
                    price: 150
                }
            ]
        },
        {
            title: 'Viva',
            subItems: [
                {
                    name: 'Examineer',
                    price: 60,
                },
                {
                    name: 'Officer',
                    price: 400,
                },
                {
                    name: 'Office assistant',
                    price: 350,
                },
                {
                    name: 'Lab attendent',
                    price: 250,
                },
            ]
        },
        { 
            title: 'Class test',
            subItems: [
                {
                    name: 'CT 1',
                    price: 10
                },
                {
                    name: 'CT 2',
                    price: 15
                }
            ]
        },
        {
            title: 'Class test',
            subItems: [
                {
                    name: 'CT 1',
                    price: 10
                },
                {
                    name: 'CT 2',
                    price: 15
                }
            ]
        },
        {
            title: 'Class test',
            subItems: [
                {
                    name: 'CT 1',
                    price: 10
                },
                {
                    name: 'CT 2',
                    price: 15
                }
            ]
        },
        {
            title: 'Midterm',
            subItems: [
                {
                    name: 'Midterm 1',
                    price: 20
                },
                {
                    name: 'Midterm 2',
                    price: 25
                }
            ]
        }
    ],
    showModal: false,
    newItem: {
        title: '',
        subItemName: '',
        subItemPrice: ''
    }
};

const billRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const { title, subItemName, subItemPrice } = action.payload;
            const newSubItem = {
                name: subItemName,
                price: subItemPrice
            };
            const updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex((item) => item.title === title);
            if (itemIndex > -1) {
                updatedItems[itemIndex].subItems.push(newSubItem);
            } else {
                updatedItems.push({
                    title,
                    subItems: [newSubItem]
                });
            }
            return {
                ...state,
                items: updatedItems
            };
        case 'SHOW_MODAL':
            return {
                ...state,
                showModal: true
            };
        case 'HIDE_MODAL':
            return {
                ...state,
                showModal: false
            };
        case 'UPDATE_NEW_ITEM':
            const { name, value } = action.payload;
            return {
                ...state,
                newItem: {
                    ...state.newItem,
                    [name]: value
                }
            };
        case 'RESET_NEW_ITEM':
            return {
                ...state,
                newItem: {
                    title: '',
                    subItemName: '',
                    subItemPrice: ''
                }
            };
        default:
            return state;
    }
};

export default billRateReducer;
