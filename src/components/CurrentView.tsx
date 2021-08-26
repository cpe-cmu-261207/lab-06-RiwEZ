import axios from "axios";
import { useEffect, useState } from "react";

const CurrentView = () => {
	const [price, setPrice] = useState(0);
	const [date, setDate] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios.get("https://api.coindesk.com/v1/bpi/currentprice/thb.json")
			.then(resp => {
				setPrice(resp.data.bpi.THB.rate_float)
				setDate(resp.data.time.updated)
				setLoaded(true);
			})
			.catch(err => console.log(err))
		setLoaded(false);
	}, [])

	return (
		<div className="text-center space-y-3">
				<p className="text-2xl font-semibold">Current price</p>
				{loaded ? 
					<div>
						<p className="text-2xl">{(price).toLocaleString()} THB</p>
						<p> (Last updated {date})  </p>
					</div>
					: <p className="text-2xl">Loading ...</p>
				}
		</div>
	);
};

export default CurrentView;
