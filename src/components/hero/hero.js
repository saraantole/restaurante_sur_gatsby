import React, { useEffect, useState } from 'react'
import './hero.style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import chuleton from '../../images/chuleton.png'
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import { useViewportScroll, useTransform, motion } from 'framer-motion'

const words = [
    <FormattedMessage id="IndexPage.hero.headSpan.1" />,
    <FormattedMessage id="IndexPage.hero.headSpan.2" />,
    <FormattedMessage id="IndexPage.hero.headSpan.3" />
]

const Hero = () => {
    const { scrollYProgress } = useViewportScroll()
    const moveAnim = useTransform(scrollYProgress, [0, 1], [0, 500])
    const rotate = useTransform(scrollYProgress, [0, 1], [-20, -20])

    let i = -1
    const [word, setWord] = useState(words[i])

    useEffect(() => {
        setInterval(() => {
            i++
            if (i < words.length) {
                setWord(words[i])
            } else {
                i = -1;
            }
        }, 800)
        return
    }, [words])

    return (
        <div className='hero'>
            <h1><FormattedMessage id="IndexPage.hero.headTitle" />
                <span >
                    {word}
                </span>
            </h1>
            <h2><FormattedMessage id="IndexPage.hero.sub" /></h2>
            <div className="hero-btn">
                <button><Link to="/carta">
                    <FormattedMessage id="IndexPage.hero.seeMenu" />
                </Link></button>
                <button><a href="tel:0034952792876">
                    <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
                    <FormattedMessage id="nav.reserva" />
                </a></button>
            </div>
            <motion.img src={chuleton} alt="carne" className='carne'
                style={{ x: moveAnim, rotate: rotate }} />
        </div>
    )
}

export default Hero


