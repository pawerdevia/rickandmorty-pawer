import { useEffect, useRef, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  //ESTADOS Y CONSTANTES

  //Por nombre
  const [inputValueString, setinputValueString] = useState('Earth (C-137)')
  const url2 = `https://rickandmortyapi.com/api/location/?name=${inputValueString}`
  const [location2, getLocation2, hasError2, isLoading2] = useFetch(url2)
  //console.log(location2?.results[0].residents)



  //Por id
  const [inputValue, setInpoutValue] = useState(getRandomNumber(126))
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'error'}`
  const [location, getLocation, hasError, isLoading] = useFetch(url)


  //Locations 
  let namesLocations = []
  const [countPages, setCountPages] = useState(1)
  const urlLocations = `https://rickandmortyapi.com/api/location?page=${countPages}`
  const [locationAll, getLocationAll] = useFetch(urlLocations)

  useEffect(() => {
    getLocationAll()
  }, [countPages])


  locationAll?.results.map(i => {
    namesLocations.push(i.name)
  })







  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)
  const lastPostIndex = currentPage * postPerPage;
  const firstPostPage = lastPostIndex - postPerPage
  const currentPost = location?.residents.slice(firstPostPage, lastPostIndex)




  useEffect(() => {
    getLocation()
    getLocation2()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInpoutValue(inputSearch.current.value.trim())
    inputSearch.current.value = ''
    setCurrentPage(1)
  }



  return (
    <div className='principal'>
      <div className="container__image">
        <img src="https://i.postimg.cc/zvxW6gHF/banner.png" alt="banner-header" className='banner-top img1' />
        <img src="https://i.postimg.cc/RhgMqWsh/background2.png" alt="banner-header" className='banner-top img2' />
      </div>
      <form onSubmit={handleSubmit} className='form_search'>
        <input type="text" ref={inputSearch} className='form__input-search' placeholder='Search universe for number' />
        <button className='form__button' type='submit'>
          <i className='bx bx-search'></i>
          <span className='button__text'>Search</span>
        </button>
      </form>
      {isLoading
        ? <Loader />
        : (
          hasError
            ? <h2> Error...</h2>
            : (
              <>
                <LocationInfo
                  location={location}
                />
                <div className='cantainer-cards'>
                  {
                    currentPost?.map(url => (
                      <ResidentCard
                        key={url}
                        url={url}
                      />
                    ))
                  }
                </div>
                <Pagination
                  totalPosts={location?.residents.length}
                  postsPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            )
        )
      }
    </div>
  )
}

export default App
