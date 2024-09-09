import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const FeatureItem = () => {
  return (
    <div className='feature'>
        <FontAwesomeIcon icon={faBolt} />
        <h2>Automated Expense Tracking</h2>
        <p>Eclipse automatically tracks your expenses and provides a monthly report, in just a single click.</p>
    </div>
  )
}
