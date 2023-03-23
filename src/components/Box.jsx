
const Box = () => {
return (
    <div className="main-container">
        <div className="title-container">
            <h3 className="title">A d v i c e  <span id="num"># 1</span></h3>
        </div>
        <div>
            <p className="main-text">
                "It is easy to situp and take <br />
                notice, what's difficult is getting <br />
                up and taking action."
            </p>
        </div>
        <div className="divider">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
                    <g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/>
                        <rect x="14" width="6" height="16" rx="3"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
)
}

export default Box