import React from "react";
import s from "./mainPage.module.css";
import backOne from "../../assets/images/main/back-one.jpg";
import backTwo from "../../assets/images/main/back-two.jpg";
import backThree from "../../assets/images/main/back-three.jpg";

function MainPage() {
  return (
    <div className={s.main}>
      <div
        style={{ background: `url(${backOne})` }}
        className={`${s.home} ${s.block}`}
      >
        <div className={s.backShadow}></div>
        <h1>Искусственный интеллект</h1>
      </div>
      <div
        style={{ background: `url(${backTwo})` }}
        className={`${s.study} ${s.block}`}
      >
        <div className={`container ${s.container}`}>
          <h2>Что такое искусственный интелект?</h2>
          <p>
            Современный искусственный интеллект — это система, которая способна
            воспринимать свою среду и принимать меры, чтобы максимизировать
            шансы на успешное достижение своих целей, а также интерпретировать и
            анализировать данные таким образом, чтобы они обучались и
            адаптировались по мере развития
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backThree})`,
          backgroundPosition: "left",
        }}
        className={`${s.for} ${s.block}`}
      >
        <div className={`container ${s.container}`}>
          <h2>Кто создал искусственный интелект?</h2>
          <p>
            Первое определение искусственного интеллекта (ИИ) дал один из его
            отцов-основателей, Марвин Минский, который описал его как «науку о
            том, как заставить машины делать вещи, которые требуют применения
            интеллекта, когда их делают люди». Суть этого определения верна и
            сегодня, однако современные специалисты в области вычислительных
            систем идут немного дальше и определяют ИИ как систему, способную
            воспринимать окружающую среду и предпринимать действия для
            максимизации шансов на успешное достижение своих целей, а также как
            способность этой системы интерпретировать и анализировать данные
            таким образом, чтобы она могла обучаться и адаптироваться по ходу
            дела.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
