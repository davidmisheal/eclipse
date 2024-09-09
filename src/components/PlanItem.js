import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const PlanItem = (props) => {
    return (
        <div className={props.name}>
            <section>
                <h5>Starter</h5>
                <h3>$12 / mo</h3>
                <p>Ideal for growing finance</p>
            </section>
            <ul>
                <li><strong><FontAwesomeIcon icon={faCheck} /></strong>Automated Expense Tracking(Detail Analysis)</li>
                <li><strong><FontAwesomeIcon icon={faCheck} /></strong>Automated Expense Tracking(Detail Analysis)</li>
                <li><strong><FontAwesomeIcon icon={faCheck} /></strong>Automated Expense Tracking(Detail Analysis)</li>
                <li><strong><FontAwesomeIcon icon={faCheck} /></strong>Automated Expense Tracking(Detail Analysis)</li>
                <li><strong><FontAwesomeIcon icon={faCheck} /></strong>Automated Expense Tracking(Detail Analysis)</li>
            </ul>
            <button>Coming soon!</button>
        </div>
    )
}
