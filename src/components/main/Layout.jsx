import React, {Fragment} from 'react';

//components
import { Header } from './Header';

export const Layout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <div className="ctr-layout">
                {children}
            </div>
            <style>{`
                .ctr-layout {
                    background-color:white;
                    min-height:100vh;
                    width:100%;
                    padding:5px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:flex-start
                    align-items:flex-start;
                }
            `}</style>
        </Fragment>
    );
};