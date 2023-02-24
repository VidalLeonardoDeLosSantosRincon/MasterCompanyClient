import React, {Fragment} from 'react';

export const Header = () => {
    return (
        <Fragment>
            <header className='pg-header'>
                <h4 className='pg-header-title'>Master<span>Company</span></h4>
            </header>
            <style>{`
                .pg-header {
                    background-color:#154360;
                    color:white;
                    min-height:60px;
                    width:100%;
                    padding:10px 25px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }

                .pg-header .pg-header-title {
                    font-size:28px;
                    font-weight:bold;
                }

                .pg-header .pg-header-title > span {
                    color:#5DADE2;
                    font-weight:300;
                }
            `}</style>
        </Fragment>
    );
};