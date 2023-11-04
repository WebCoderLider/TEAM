import React from 'react'
import './hero.scss'

import HeroImg from '../../assets/images/heroImg.png'

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__inner  ">
            <div className="hero__left">
              <h1 className="hero__title">
                Sifatli <span className="hero__title__span">Arzon Kurslar</span>{' '}
                to’plami!
              </h1>
              <p className="hero__text">
                Eng sifatli kurslar faqat bizning saytda, malakali o’qituvchilar
                va sifatli darslar orqali tez fursat ichida professional ta'lim
                olasiz!
              </p>
              <div className="hero__form">
                <input
                  type="text"
                  className="hero__input"
                  placeholder="Markazni izlash. Tuman | Shaxar"
                />
                <button className="hero__button" type="button">
                  Izlash
                </button>
              </div>
            </div>
            <div className="hero__right">
              <img className="hero__img" src={HeroImg} alt="" width={'770px'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
