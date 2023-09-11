import React from 'react'
import '../assets/styles/loader.css'
import '../assets/styles/locationinfo.css'

const LocationInfo = ({location}) => {



    return (
        <article className='container-location'>
            <h2 className='location__title'>{location?.name}</h2>
            <ul className='location__info'>
                <li className='info__description type'><span>Type:</span><span>{location?.type}</span></li>
                <li className='info__description demension'><span>Dimension:</span><span> {location?.dimension || ' Unknown'}</span></li>
                <li className='info__description population'><span>Population:</span><span></span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo