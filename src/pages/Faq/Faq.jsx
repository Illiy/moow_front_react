import React, { useState, useEffect } from 'react'
import FaqItem from '../../components/Faq/Faqitem/FaqItem'
import FaqSolution from '../../components/Faq/FaqSolution/FaqSolution'
// import solution from '../../storage/solution'
import { faq, solutionApi } from '../../API/api'

const Faq = () => {
    const [faqArray, setFaqArray] = useState([]);
    const [solution, setSolution] = useState([]);
    const [moduleChecked, setModuleChecked] = useState(true)
    const [choosenName, setChoosenName] = useState()
    const [choosenContent, setChoosenContent] = useState()

    useEffect(() => {
        faq(setFaqArray)
        solutionApi(setSolution)
    }, [])

    const baoba = (name, content) => {
        setModuleChecked(false)
        setChoosenName(name)
        setChoosenContent(content)
    }

    return (
        <main>
            {   moduleChecked?
                <div className='container'>
                    <div className='faq-container'>
                        <div className='faq-subcontainer'>
                            <h2>Faq</h2>
                            {faqArray.map((el, key) =>
                                <FaqItem key={key} quess={el.quess} answer={el.answer} />
                            )}
                            <h2 style={{ marginTop: 45, marginBottom: 25 }}>Навчальні модулі</h2>
                            <div className='row'>
                                {solution.map((el, key) =>
                                    <div onClick={() => baoba(el.name,el.content)} className='col-md-6'>
                                        <div key={key} className='solution_container'>
                                            <img src={'http://82.144.203.3:5000/' + el.link} />
                                            <div>
                                                <p className='solution_hover'>{el.name}</p>
                                                <p className='solution_description'>{'Навчання за модулем ' + el.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className='col-md-6'></div>
                            </div>
                        </div>
                    </div>
                </div> :
                <FaqSolution name={choosenName} content={choosenContent} />
                }
        </main>
    )
}

export default Faq