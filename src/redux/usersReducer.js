//import {v1} from 'uuid';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Jordan Olson', followed: true, status: 'Quis illum dolorem voluptatem quia.', location: { city: 'Gorinchem', country: 'Estonia' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Jacklyn Pfeffer', followed: false, status: 'Non ipsam rem aspernatur laborum aut non odit.', location: { city: 'South Vergie', country: 'Cyprus' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Brett Padberg', followed: false, status: 'Suscipit aut dignissimos rerum atque rerum neque et.', location: { city: 'New Enola', country: 'Comoros' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Caroline Cartwright', followed: false, status: 'Rerum minus asperiores maiores eveniet velit et.', location: { city: 'Port Vernie', country: 'Philippines' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Vladimir Grigoriev', followed: false, status: 'Ratione rerum iste fugit aut qui in quae.', location: { city: 'Baton Rouge', country: 'Tunisia' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Georgina Corkery', followed: true, status: 'In ipsam dolores fuga repellat et sit dolor.', location: { city: 'Lake Deshawn', country: 'Papua New Guinea' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Angelita Hauck', followed: true, status: 'Soluta sed odit aliquam et ad maiores.', location: { city: 'Grahamfurt', country: 'El Salvador' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Amos Herzog', followed: true, status: 'Consectetur perspiciatis consequatur ut autem et.', location: { city: 'East Verliechester', country: 'Malawi' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Rosanna Brekke', followed: true, status: 'Et dolores magni natus earum qui voluptas.', location: { city: 'Funkburgh', country: 'Bhutan' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Liza Bergnaum', followed: true, status: 'Rerum ut illum officia autem ea suscipit.', location: { city: 'Luettgenland', country: 'Singapore' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Cruz Powlowski', followed: false, status: 'Eos recusandae aut consequatur recusandae quidem maiores aut.', location: { city: 'North Mariano', country: 'Belgium' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Gail Stroman', followed: true, status: 'Omnis exercitationem aut ut officiis doloribus est voluptatem.', location: { city: 'Emmetborough', country: 'Grenada' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Alaina Bins', followed: true, status: 'Laborum aut non accusamus rerum ut et ut.', location: { city: 'East Alessandromouth', country: 'Bahamas' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Asha Bahringer', followed: false, status: 'Dolorum et quia dolorum voluptates sed.', location: { city: 'East Arlie', country: 'Brazil' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Edna Kunde', followed: true, status: 'Quasi veniam voluptatem vero maiores qui eius architecto.', location: { city: 'Gleichnermouth', country: 'Iraq' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Tomasa O\'Connell', followed: false, status: 'Rerum magni adipisci eius qui quo ut aut.', location: { city: 'Nienowshire', country: 'Grenada' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Fernando Kub', followed: true, status: 'Voluptates fugit voluptates sed id ullam.', location: { city: 'Hortenseton', country: 'Grenada' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Myrna Stroman', followed: true, status: 'Quidem cumque maiores necessitatibus quod cumque veritatis cumque.', location: { city: 'Kulasstad', country: 'Algeria' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Luz Hickle', followed: true, status: 'Et rerum expedita tempore fugit iste non velit.', location: { city: 'Chesleymouth', country: 'Bouvet Island (Bouvetoya)' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Katheryn Monahan', followed: false, status: 'Ut iusto doloribus et corrupti.', location: { city: 'Port Roosevelt', country: 'Svalbard & Jan Mayen Islands' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Lacey Sipes', followed: false, status: 'Sit et non possimus molestiae quo.', location: { city: 'East Maxiemouth', country: 'Iceland' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Carmelo Weimann', followed: true, status: 'Quia facilis at molestiae fugiat fugit sunt.', location: { city: 'Kochton', country: 'Ukraine' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Marty Terry', followed: true, status: 'Voluptatem illo ut qui dolore aut aliquam aut.', location: { city: 'Port Maximilliamouth', country: 'Saudi Arabia' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Jaunita Dickens', followed: true, status: 'Ducimus explicabo rerum repudiandae alias molestiae veritatis.', location: { city: 'Riceshire', country: 'Kazakhstan' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Margarito Grant', followed: false, status: 'Qui sapiente labore aut autem dignissimos repudiandae sint.', location: { city: 'East Lornaville', country: 'French Guiana' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Maeve Marquardt', followed: true, status: 'Nihil eaque odio id doloribus reprehenderit.', location: { city: 'Lake Micaelashire', country: 'Sierra Leone' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Brennon Balistreri', followed: true, status: 'Mollitia quia impedit veniam eum aut voluptatum.', location: { city: 'North Brandyfurt', country: 'Albania' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Gregoria Herzog', followed: false, status: 'Tempore rerum dolor qui voluptatem exercitationem.', location: { city: 'Funkmouth', country: 'Venezuela' } },
        // { id: v1(), photoUrl: 'https://cs16planet.ru/steam-avatars/543', fullName: 'Ocie Stiedemann', followed: true, status: 'Quo iusto recusandae voluptatem in eum et.', location: { city: 'South Elvie', country: 'Central African Republic' } },
    ]
}

//{ id: 1, photoUrl: 'https://...', fullName: 'Jordan Olson', follow: true, status: 'Quis illum dolorem voluptatem quia.', location: {city: 'Gorinchem', country: 'Estonia'}},

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;