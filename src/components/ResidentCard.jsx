import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import '../assets/styles/residentcard.css'


const ResidentCard = ({ url }) => {

    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    const redBack = {
        backgroundColor: '#DB0708'
    };
    const grenBack = {
        backgroundColor: '#71A821'
    };
    const whiteBack = {
        backgroundColor: '#fff'
    };
    const handleStatus = resident?.status === 'Alive' ?  grenBack :(resident?.status === 'Dead' ? redBack : whiteBack);

    return (
        <article className="card">
            <header className="card__header">
                <img src={resident?.image} alt="" className="header__img"/>
                <div className="header__status">
                    <span className="status__radius" style={handleStatus}></span>
                    <span className="status__info">{resident?.status}</span>
                </div>
            </header>
            <section className="card__description">
                <h3 className="description_name">{resident?.name}</h3>
                <ul className="description__details">
                    <li className="detail">
                        <span className="detail__name">Specie </span>
                        <span>{resident?.species}</span>
                    </li>
                    <li className="detail">
                        <span className="detail__name">Origin </span>
                        <span>{resident?.origin.name}</span>
                    </li>
                    <li className="detail">
                        <span className="detail__name">Episodes where appear </span>
                        <span>{resident?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard