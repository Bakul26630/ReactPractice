import React, { useState, useEffect } from "react";

const Weather = () => {
    const [search, setSearch] = useState("Ghaziabad");
    const [cityWeather, setCityWeather] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4608aa91f50b40f9827e67b3dbc76d3f`);
                const Jdata = await data.json()
                setCityWeather(Jdata.main);
                console.log(cityWeather);
            } catch (error) {
                console.log(error)
            }

        }
        getData();
    }, [search,cityWeather]);
    return (
        <>
            <div className="container">
                <div className="d-flex vh-100 w-100 align-items-center justify-content-center flex-column">
                    <div className="w-50 h-75 main-box">
                        <div className="w-100 d-flex justify-content-center mt-5 h-25">
                            <input type="search" className="input-field" value={search} onChange={(e) => {
                                setSearch(e.target.value);
                            }} />
                        </div>
                        {
                            !cityWeather ? (<p className="error_msg">City Not Found</p>)
                                : (<div>
                                    <div className="second-div mx-auto">
                                        <i className="fa-solid fa-street-view street-logo" />
                                        <h1 className="country">
                                            {search}</h1>
                                    </div>
                                    <div className="third-div">
                                        <h1 className="temperature">{cityWeather.temp}°C</h1>
                                        <h3 className="temp_min_max">MIN:{cityWeather.temp_min}°C | MAX:{cityWeather.temp_max}°C</h3>
                                    </div>
                                    <div className="wave -one"></div>
                                    <div className="wave -two"></div>
                                    <div className="wave -three"></div>
                                </div>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;