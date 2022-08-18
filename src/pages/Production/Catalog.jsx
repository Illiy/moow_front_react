import React, { useState } from "react";
import zerno from '../../assets/catalog/1.svg'
import rozsada from '../../assets/catalog/2.svg'
import ovoch from '../../assets/catalog/3.svg'
import hudoba from '../../assets/catalog/4.svg'
import fruits from '../../assets/catalog/5.svg'
import dobruvo from '../../assets/catalog/6.svg'
import {Link} from "react-router-dom";

const Catalog = () => {

    return(
        <main>
            <div style={{paddingTop: 125}}>
                <div className="container">
                    <div className="catalog-container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/zerno'>
                                    <img src={zerno}/>
                                    <p>Зерно</p>
                                </Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/rozsada'>
                                    <img src={rozsada}/>
                                    <p>Розсада</p>
                                </Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/ovoch'>
                                    <img src={ovoch}/>
                                    <p>Овочі</p>
                                </Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/hudoba'>
                                    <img src={hudoba}/>
                                    <p>Худоби</p>
                                </Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/fruits'>
                                    <img src={fruits}/>
                                    <p>Фрукти</p>
                                </Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <Link to='/unit-list/dobruvo'>
                                    <img src={dobruvo}/>
                                    <p>Добрива</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Catalog