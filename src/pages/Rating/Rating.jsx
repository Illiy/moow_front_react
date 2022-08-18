import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getToRating } from '../../API/api'
import star from '../../assets/star.png'

const Rating = () => {
    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if (isRegister) { }
        else {
            history("/sign-in")
        }
    }, [])

    const [ratingList, setRatingList] = useState()

    useEffect(() => {
        getToRating(setRatingList)
    }, [])

    return (
        <main>
            <div className='container' style={{ paddingTop: 125 }}>
                <div className='favorite-container'>
                    <div className='col-md-12' style={{ paddingLeft: 0, flex: 'none' }}>
                        <h2>Вибране користувача</h2>
                    </div>
                    {ratingList === undefined ? '' : ratingList.data.length === 0 ?
                        <span className='zaglushka'>Вы не обрали ваші улюблені оголошення</span>
                        :
                        <div className='row rating-item'>
                            {ratingList === undefined ? '' : ratingList.data.map((el, key) =>
                                <Link to={'/unit/' + el.id} className="rw-item">
                                    <div style={{ backgroundImage: `url(http://82.144.203.3:5000/${el.img[0]})` }} className="img"></div>
                                    <div className="right">
                                        <h2>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h2>
                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                        <span className="harakter">1200/кв.м.</span>
                                        <div className="bottom">
                                            <div>
                                                <img src={star} alt="" />
                                                <span>4.8</span>
                                            </div>
                                            <span className='price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                            <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}

export default Rating