import { Country, State, City } from 'country-state-city';
import { useEffect, useState } from "react";

const CountryStateCity = () => {
    let countryData = Country.getAllCountries()
    let stateData = State.getAllStates()
    let cityData = City.getAllCities()

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const handleCountryChange = (value) => {
        if (value === "") {
            console.log("No country selected")
            setStates([])
            setCities([])
        } else {
            setStates([])
            setCities([])
            // console.log('inital values initiated')
            let allStates = stateData.filter(sta => sta.countryCode === value)
            setStates(allStates)
        }
    }

    // useEffect(() => {
    //     return
    // }, [states, cities])

    const handleStateChange = (value) => {
        let cou = value.split(",")[0]
        let sta = value.split(",")[1]
        if (value === "") {
            console.log("No State selected")
            setCities([])
        } else {
            let allCities = cityData.filter(city => city.countryCode === cou && city.stateCode === sta)
            setCities(allCities)
        }
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="selectCountry">Country *</label>
                <select required
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="form-control" id="selectCountry"
                >
                    <option value=""></option>
                    {countryData.map(cou => (
                        <option key={cou.name} value={cou.isoCode}>{cou.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="selectState">State *</label>
                <select required
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="form-control" id="selectState"
                >
                    <option value=""></option>
                    {states.map(sta => (
                        <option value={[sta.countryCode, sta.isoCode]}>{sta.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="selectCity">City *</label>
                <select required className="form-control" id="selectCity">
                    <option value=""></option>
                    {cities.map(sta => (
                        <option value={[sta.countryCode, sta.stateCode, sta.name]}>{sta.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default CountryStateCity