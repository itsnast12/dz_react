import React from 'react'
import s from './Button.module.sass'

export default function Button({ children }) {
  return (
    <button className={s.btn}>
      {children ?? 'Подробнее'}
    </button>
  )
}
