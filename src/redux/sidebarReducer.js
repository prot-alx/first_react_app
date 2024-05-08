let initialState = [ 
    {id: 1, menuName: 'Profile', menuAddress: '/profile'},
    {id: 2, menuName: 'Messages', menuAddress: '/messages'},
    {id: 3, menuName: 'Music', menuAddress: '/music'},
    {id: 4, menuName: 'Options', menuAddress: '/options'},
    {id: 5, menuName: 'Help', menuAddress: '/help'},
];

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;