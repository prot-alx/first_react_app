//import {v1} from 'uuid';

const DO_NOTHING = 'DO-NOTHING'

let initialState = [ 
    {id: 1, menuName: 'Profile', menuAddress: '/profile'},
    {id: 2, menuName: 'Messages', menuAddress: '/messages'},
    {id: 3, menuName: 'Music', menuAddress: '/music'},
    {id: 4, menuName: 'Options', menuAddress: '/options'},
    {id: 5, menuName: 'Help', menuAddress: '/help'},
];

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case DO_NOTHING:
            console.log('TEST')
            return state;
        default:
            return state;
    }
}

export const doNothing = () => { return {type: DO_NOTHING} };    

export default sidebarReducer;