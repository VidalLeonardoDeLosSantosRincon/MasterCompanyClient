import React, {Fragment, useState, useEffect} from 'react';

//utils
import { GetEmployeesAll } from '../Utils/Request/GetEmployeesAll';
export const EmployeesList = () => {

    const [employees, setEmployee] = useState([]);
    const [tag, setTag] = useState("ALL");

    const GetAll = () => {
        setTag("ALL");
        GetEmployeesAll()
        .then(res => {
            const data = res.data ?? {};
            if(data?.employees){
                setEmployee(data.employees);
            }else {
                setEmployee([]);
            }
        })
        .catch(error=> console.log(error));
    };

    const GetDeleted = () => {
        setTag("DELETED");
        GetEmployeesAll('deleted')
        .then(res => {
            const data = res.data ?? {};
            if(data?.employees){
                setEmployee(data.employees);
            }else {
                setEmployee([]);
            }
        })
        .catch(error=> console.log(error));
    };

    
    const GetDisabled = () => {
        setTag("DISABLED");
        GetEmployeesAll('disabled')
        .then(res => {
            const data = res.data ?? {};
            if(data?.employees){
                setEmployee(data.employees);
            }else {
                setEmployee([]);
            }
        })
        .catch(error=> console.log(error));
    };

    useEffect( ()=> {
        GetAll();
    }, []);

    return (
        <Fragment>
            <div className="ctr-employees">
                <div class="ctr-options">
                    <button className="all" onClick={GetAll}>All</button>
                    <button className="deleted" onClick={GetDeleted}>Deleted</button>
                    <button className="disabled" onClick={GetDisabled}>Disabled</button>
                </div>
                <h4 className="tbl-employees-title">List of {tag} Employees
                    <span className="counter">{employees.length}</span>
                </h4>
                <table className="tbl-employees">
                    <thead>
                        <tr>
                            <th><b>#</b></th>
                            <th><b>FullName</b></th>
                            <th><b>Document</b></th>
                            <th><b>Salary</b></th>
                            <th><b>Gender</b></th>
                            <th><b>StartDate</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ((employees.length > 0)?
                                employees.map((employee, index)=>{
                                    return (
                                        <Fragment key={index}>
                                            <tr>
                                                <td>{(index + 1)}</td>
                                                <td>{employee.name || "--"} {employee.lastName || "--"}</td>
                                                <td>{employee.document || "--"}</td>
                                                <td>{employee.salary || "--"}</td>
                                                <td>{employee.gender || "--"}</td>
                                                <td>{employee.startDate || "--"}</td>
                                            </tr>
                                        </Fragment>
                                    );
                                })
                            :   <tr className="tr-no-data">
                                    <td colspan="6">
                                        No Employees Found :(
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <style>{`
                .ctr-employees {
                    background-color:white;
                    min-height:200px;
                    width:100%;
                    padding:10px 30px;
                    padding-top:50px;
                    box-sizing:border-box;

                    display:flex;
                    flex-direction:column;
                    justify-content:flex-start;
                    align-items:flex-start;
                }

                .ctr-options {
                    background-color:white;
                    width:100%;
                    padding:5px;
                    margin-bottom:10px;
                    box-sizing:border-box;
                    border-bottom:2px solid rgba(0, 0, 0, 0.2) ;

                    display:flex;
                    gap:5px;
                    justify-content:flex-start;
                    align-items:center;
                }

                .ctr-options > button {
                    padding:5px 10px;
                    border-radius:3px;
                    border:none;
                    cursor:pointer;
                    color:white;
                }

                .ctr-options > button.all {
                    background-color:lightseagreen;
                }

                .ctr-options > button.deleted {
                    background-color:red;
                }

                
                .ctr-options > button.disabled {
                    background-color:orange;
                }

                .ctr-employees .tbl-employees-title {
                    font-size:22px;
                    font-weight:bold;
                    color:#34495E;
                }

                .ctr-employees .tbl-employees-title .counter {
                    background-color:dodgerblue;
                    color:white;
                    font-weight:bold;
                    font-size:12px;
                    margin:0 5px;
                    padding:3px 4.5px;
                    border-radius:50px;
                }

                .ctr-employees .tbl-employees {
                    background-color:white;
                    width:100%;
                    min-height:100px;
                    margin-top:10px;
                    border-radius:10px;
                    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.08);
                    padding-bottom:10px;
                }

                .ctr-employees .tbl-employees thead tr th{
                    border-bottom:3px solid rgba(0, 0, 0, 0.1);
                    text-align:left;
                    padding:10px;
                }

                .ctr-employees .tbl-employees tbody tr td {
                    border-bottom:0.1px solid rgba(0, 0, 0, 0.08);
                    text-align:left;
                    padding:10px;
                }

                .ctr-employees .tbl-employees tbody tr:hover {
                    background-color:rgba(0, 0, 0, 0.06);
                    border-top:2px solid lightgray;
                    border-bottom:2px solid lightgray !important;
                }

                .ctr-employees .tbl-employees tbody .tr-no-data {
                    background-color:rgba(0, 0, 0, 0.05);
                }

                .ctr-employees .tbl-employees tbody .tr-no-data td {
                    text-align:center;
                    font-weight:300;
                    font-size:18px;
                }
            `}</style>
        </Fragment>
    );
};