import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

export const Nav = () => {
  return (
    <div className='nav'>
        <h2>Eclipse</h2>
        <ul>
            <li>
                <a href='#features'>Features</a>
            </li>
            <li>
                <a href='#pricing'>Pricing</a>
            </li>
            <li>
                <a href='#FAQs'>FAQs</a>
            </li>
        </ul>
        <button>
            Start now
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    </div>
  )
}
