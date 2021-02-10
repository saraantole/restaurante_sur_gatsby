import React, { useState } from "react"
import './carta.style.css'
import { FormattedMessage } from "gatsby-plugin-intl"
import { carta_data } from './carta_data'

const CartaContainer = () => {


    const [category, setCategory] = useState('')

    return (
        <div className='carta-container'>
            <h1 style={{ textAlign: 'center' }}><FormattedMessage id="MenuPage.menuTitle" /></h1>
            <div className='filter container'>
                <button onClick={() => setCategory('')} className={`${category === '' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.all" />
                    </a>
                </button>
                <button onClick={() => setCategory('entradas')} className={`${category === 'entradas' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.starters" />
                    </a>
                </button>
                <button onClick={() => setCategory('parrilla')} className={`${category === 'parrilla' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.grilledMeat" />
                    </a>
                </button>
                <button onClick={() => setCategory('cocina')} className={`${category === 'cocina' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.cuisine" />
                    </a>
                </button>
                <button onClick={() => setCategory('pescado')} className={`${category === 'pescado' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.fish" />
                    </a>
                </button>
                <button onClick={() => setCategory('salsas')} className={`${category === 'salsas' && 'active-btn'}`}>
                    <a href="#carta">
                        <FormattedMessage id="MenuPage.buttons.sauces" />
                    </a>
                </button>
                <button onClick={() => setCategory('guarniciones')} className={`${category === 'guarniciones' && 'active-btn'}`}>
                    <FormattedMessage id="MenuPage.buttons.sideDishes" />
                </button>
                <button id='carta' onClick={() => setCategory('postres')} className={`${category === 'postres' && 'active-btn'}`}>
                    <FormattedMessage id="MenuPage.buttons.desserts" />
                </button>
            </div>
            <div className='carta container'  >

                {
                    category !== '' ?
                        (carta_data.filter(item => item.categoria === category).map((filteredItem, i) => (
                            <div className='item-container' key={i}>
                                <h2>{filteredItem.nombre} - {filteredItem.precio}</h2>
                                <p>{filteredItem.descr}</p>
                            </div>
                        )))
                        :
                        (carta_data.map((item, i) => (
                            <div className='item-container' key={i}>
                                <h2>{item.nombre} - {item.precio}</h2>
                                <p>{item.descr}</p>
                            </div>
                        )))
                }

            </div>
            <p className='iva'>*Servicio de mesa (I.V.A. incluido) - 1,50 €</p>
        </div>
    )
}

export default CartaContainer

