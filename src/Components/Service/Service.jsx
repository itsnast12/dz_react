import React from 'react'
import Button from '../../UI/Button/Button'
import s from './Service.module.sass'

export default function Service({ serviceBox }) {
  return (
    <div className={s.service} style={{ backgroundColor: serviceBox.bgcolor }}>
      <div>{serviceBox.title}</div>
      <Button>Подробнее</Button>
    </div>
  )
}