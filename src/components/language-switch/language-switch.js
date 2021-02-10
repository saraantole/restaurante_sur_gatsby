import React from "react"
import EsFlag from '../../images/espana.inline.svg'
import EnFlag from '../../images/reino-unido.inline.svg'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
    en: <EnFlag />,
    es: <EsFlag />
}

const LanguageSwitch = () => {
    return (
        <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
                languages.map(language => (
                    <div key={language} className='flag'
                        onClick={() => changeLocale(language)}
                        onKeyUp={() => changeLocale(language)}
                        role='presentation'
                        style={{
                            display: currentLocale === language ? 'none' : 'block',
                            margin: '5px 0'
                        }}>
                        {languageName[language]}
                    </div>
                ))
            }
        </IntlContextConsumer>
    )
}


export default LanguageSwitch