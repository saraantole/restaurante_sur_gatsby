import React, { useState } from "react"
import './carta.style.css'

import { carta_data } from './carta_data'


const CartaContainer = () => {
    const [category, setCategory] = useState('')

    return (
        <div className='carta-container'>
            <h1 style={{ textAlign: 'center' }}>- Nuestra carta -</h1>
            <div className='filter container'>
                <button onClick={() => setCategory('')} className={`${category === '' ? 'active-btn' : null}`}>TODO</button>
                <button onClick={() => setCategory('entradas')} className={`${category === 'entradas' ? 'active-btn' : null}`}>ENTRADAS</button>
                <button onClick={() => setCategory('parrilla')} className={`${category === 'parrilla' ? 'active-btn' : null}`}>PARRILLA</button>
                <button onClick={() => setCategory('cocina')} className={`${category === 'cocina' ? 'active-btn' : null}`}>COCINA</button>
                <button onClick={() => setCategory('pescado')} className={`${category === 'pescado' ? 'active-btn' : null}`}>PESCADO</button>
                <button onClick={() => setCategory('salsas')} className={`${category === 'salsas' ? 'active-btn' : null}`}>SALSAS</button>
                <button onClick={() => setCategory('guarniciones')} className={`${category === 'guarniciones' ? 'active-btn' : null}`}>GUARNICIONES</button>
                <button onClick={() => setCategory('postres')} className={`${category === 'postres' ? 'active-btn' : null}`}>POSTRES</button>
            </div>
            <div className='carta container'>

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

