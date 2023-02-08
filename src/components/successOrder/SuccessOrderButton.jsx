import React from 'react'
import { Link } from 'react-router-dom'

function SuccessOrderButton() {
  return (
        <Link className='success-order-button' to='/' >
            Перейти на главную
        </Link>
  )
}

export default SuccessOrderButton