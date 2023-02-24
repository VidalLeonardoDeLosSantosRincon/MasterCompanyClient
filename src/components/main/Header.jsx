import React, {Fragment} from 'react';

//assets
import employeesIcon from "../../assets/img/employees.png";

export const Header = () => {
    return (
        <Fragment>
            <header className='pg-header'>
                <img src={employeesIcon} alt="employees-icon" height="40px" />
                <h4 className='pg-header-title'>Master<span>Company</span></h4>
            </header>
            <style>{`
                .pg-header {
                    background-color:#212F3C;
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