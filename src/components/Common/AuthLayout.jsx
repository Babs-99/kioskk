import React, { Component, useEffect, useState } from 'react';

import { Route } from 'react-router-dom';

import CustomNavbar from '../../components/CustomNavbar';

import { reactLocalStorage } from 'reactjs-localstorage';

import { useHistory } from 'react-router-dom';

const DashboardLayout = ({ children, ...rest }) => {
    return (
        <>
            {/* <CustomNavbar /> */}
            {children}
        </>
    );
};

const AuthLayout = ({ component: Component, ...rest }) => {
    let history = useHistory();

    const [isLoggedIn, set_isLoggedIn] = useState(false);

    useEffect(() => {
        // async function anyNameFunction() {
        //     const auth = reactLocalStorage.getObject('user_data');
        //     if (Object.keys(auth).length === 0) {
        //         history.push('/signin');
        //     }
        //     set_isLoggedIn(true);
        // }
        // anyNameFunction();
    });

    return (
        <>
            <Route
                {...rest}
                render={(matchProps) => (
                    <DashboardLayout>
                        <Component {...matchProps} />
                    </DashboardLayout>
                )}
            />
        </>
    );
};

export default AuthLayout;
