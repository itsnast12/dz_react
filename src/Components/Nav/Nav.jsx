import React from 'react'
import s from './Nav.module.sass'
import logolink from '../Media/logo.png'
import Button from '../../UI/Button/Button'


export default function Nav() {
    return (
        <div className={s.background}>
            <div className={s.form}>
                <div className={s.logo}>
                    <img src={logolink} alt="logo" />
                </div>
                <div className={s.nav}>
                    <div>О нас</div>
                    <div>Услуги</div>
                    <div>Аренда</div>
                </div>
                <div className={s.connection}>
                    <Button>Связаться</Button>
                </div>
            </div>
        </div>
    )
}
