import React from 'react'
import { Nav } from './components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FeatureItem } from './components/FeatureItem';
import { PlanItem } from './components/PlanItem';
import { QuesItem } from './components/QuesItem';
export const Home = () => {
    return (
        <>
            <Nav />
            <div className='main'>
                <section className='main--first'>
                    <h2>
                        All-in-one Finance App you always wanted
                    </h2>
                    <p>Gain control of your finances with our all-in-one finance app. Track your spending, find investment opportunities, and learn.</p>
                    <button>Get Started<FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    <img src={require('../src/assets/__next_static_media_readme1.f23860ab.png')} />
                </section>
                <section id='features' className='main--second'>
                    <h4>
                        Start growing your wealth with Eclipse
                    </h4>
                    <p className='main--second--p'>All-in-one personal finance app that simplifies investment opportunities, expense tracking, and financial news for users..</p>
                    <div className='features--body'>
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                    </div>
                </section>
                <section className='main--third'>
                    <h2>Build a head start to your finances                    </h2>
                    <p>Eclipse is the perfect answer! Our platform enables you to create wealth, manage your expenses, stay up to date with the latest financial news, and get ready for upcoming tax season.</p>
                    <button>Start now <FontAwesomeIcon icon={faAngleRight} /></button>
                </section>
                <section id='pricing' className='main--fourth'>
                    <h2>Find a plan to power your finances
                    </h2>
                    <div className='planitem--div'>
                        <PlanItem name='planitem' />
                        <PlanItem name='planitem--purple' />
                        <PlanItem name='planitem' />
                    </div>
                </section>
                <section id='FAQs' className='main--fifth'>
                    <h2>Everything you need to know                    </h2>
                    <p className='main--fifth--p'>Here are the most questions people always ask about.</p>
                    <div className='ques--div'>
                        <QuesItem />
                        <QuesItem />
                        <QuesItem />
                        <QuesItem />
                        <QuesItem />
                        <QuesItem />
                    </div>
                    <h5>© 2023 Inside Labs. All rights reserved.</h5>
                </section>
            </div>
        </>
    )
}
