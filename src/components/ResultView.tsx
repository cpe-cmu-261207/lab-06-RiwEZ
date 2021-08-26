import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

const ResultView = () => {
  let { search } = useLocation();
  const [startD, setStartD] =  useState("");
  const [endD, setEndD] = useState("");
  const [price, setPrice] = useState<Object>({});
	const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setStartD(search.slice(7,17))
    setEndD(search.slice(22))
    
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${startD}&end=${endD}`)
      .then(resp => {
        setPrice(resp.data.bpi)
        console.log(price)
        setLoaded(true)
      })
      .catch(err => console.log(err))

    setLoaded(false)
  }, [search, startD, endD])

  const renderPrice = () => {
    const arr = [];

    for (const [key, val] of Object.entries(price)) {
      arr.push([key, val])
    }

    return (
      <ul>
        {arr.map((item, i) => 
          <li key={i} className='text-xl'>{item[0]} - {(item[1]).toLocaleString()} THB</li>
        )}
      </ul>
    )
  }

  const render = () => {
    if (!loaded) {
      return <p className='text-2xl'>Loading ...</p>
    }
    else if (price === {}) {
      return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
    }
    else {
      return (
        <div> 
          <p className='text-xl font-semibold'> ( From {startD} To {endD})</p>
          {renderPrice()}
        </div>
      )
    }
  }

  return (
    <div className='text-center space-y-3'>
      <p className='text-2xl font-semibold'>Historical price</p>
      {render()}
    </div>
  )
}

export default ResultView;