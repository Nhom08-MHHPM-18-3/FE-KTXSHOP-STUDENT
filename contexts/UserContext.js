import React, { useEffect, useReducer } from "react";
let account;
export const UserContext = React.createContext();
const userReducer = (state, action) => {

    // User Logout
    if (action.type === 'USER_LOGOUT') {
        window.localStorage.clear();
        return {
            ...state,
            login: false
        }
    }

    // Check if load page
    if (action.type === 'CHECK_USER_LOGIN') {

        return {
            ...state,
            account: action.payload,
            login: true
        }

    }

    // User Login
    if (action.type === 'USER_LOGIN') {
        localStorage.setItem('jwt-ktxshop', action.account.id);
        if (action.account) {
            return {
                ...state,
                account: action.account,
                login: true
            }
        } else {
            return {
                ...state,
                login: false
            }
        }
    }

}

export const UserProvider = ({ children }) => {
    const [user, dispatchUser] = useReducer(userReducer, {
        account: {},
        login: false
    })
    const userLogin = (account) => {
        dispatchUser({ type: 'USER_LOGIN', account })
    }
    const userLogout = (account) => {
        dispatchUser({ type: 'USER_LOGOUT', account })
    }
    useEffect(() => {
        checkUserLogin();
    }, [])
    const checkUserLogin = async () => {
        const jwt = localStorage.getItem('jwt-ktxshop');
        if (jwt != null && jwt != undefined) {
            let data;
            const qs = require('qs');
            const query = qs.stringify({
                filters: {
                    id: {
                        $eq: Number(jwt),
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
            await fetch(process.env.API_HOST + `/api/accounts?${query}`)
                .then(response => response.json())
                .then(res => {
                    if (res.data && res.data[0] && res.data[0].attributes) {
                        data = res.data[0];
                    }
                });
            console.log(data);
            if(data){
                dispatchUser({ type: 'CHECK_USER_LOGIN', payload: data })
            }
        }
    }
    return (
        <UserContext.Provider
            value={{
                login: user.login,
                account: user.account,
                userLogin: userLogin,
                userLogout: userLogout,
            }}>
            {children}
        </UserContext.Provider>
    );

}