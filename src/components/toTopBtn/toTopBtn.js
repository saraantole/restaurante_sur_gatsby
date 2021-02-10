import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import "./toTopBtn.style.css"

const ToTopBtn = ({ offset }) => {

    return (
        <div>
            {
                offset >= 500 &&
                <FontAwesomeIcon icon={faArrowAltCircleUp}
                    className='topBtn container pulsate-fwd'
                    onClick={() => {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    }} />
            }
        </div>
    )
}

export default ToTopBtn