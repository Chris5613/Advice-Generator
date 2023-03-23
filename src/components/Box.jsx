import { useState, useEffect } from "react"

const Box = () => {
    const [advice, setAdvice] = useState([])
    const [num, setNum] = useState(0)

    const handleClick = async () => {
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json()
            setAdvice(data.slip)
            setNum(data.slip.id)
        }
    useEffect(() => {
        handleClick()
    }, [])

return (
    <div className="main-container">
        <div className="title-container">
            <h3 className="title">A d v i c e  <span id="num"># {num}</span></h3>
        </div>
        <div>
            <p className="main-text">
                {advice.advice}
            </p>
        </div>
        <div className="divider">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
                    <g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/>
                        <rect x="14" width="6" height="16" rx="3"/>
                    </g>
                </g>
            </svg>
        </div>
        <div className="dice">
            <svg onClick={handleClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
        <p id="footer">Created by Chris @2023</p>
    </div>
)
}

export default Box