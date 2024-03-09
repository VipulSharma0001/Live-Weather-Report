import React, { useEffect, useState } from "react";
import imgsrc from "./street-view-doll.png";

const Temp = () => {
    const [data, setData] = useState("pune");
    const [city1, setCity1] = useState(null); // Initialize city1 with null to handle loading state

    const city = (event) => {
        setData(event.target.value);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=0fa66687a9fbb7a83f39a37854c109bb`;

            const response = await fetch(url);
            const repApi = await response.json();
            setCity1(repApi.main);
        }
        
        fetchApi();
    }, [data]);
console.log(city1)
    return (
        <div className="box mt-4 col-md-10 col-lg-8 col-xl-6 col-12 container-fluid position-relative mx-auto">
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
            <div className="d-flex pt-2 justify-content-center">
                <input className="col-5 input" name={data} value={data} onChange={city} type="search" />
            </div>
            {!city1 ? (
                <p>Loading...</p>
            ) : (
                <div className="text-center pp">
                    <div className="d-flex justify-content-center">
                        <img src={imgsrc} className="image imgAnimation" alt="Street view doll" />
                        <h1>{data}</h1>
                    </div>
                    <h2>Tempreture {city1.temp} °C</h2>
                    
                    <h3>Max Temp: {city1.temp_max} °C, Min Temp: {city1.temp_min} °C</h3>
                    <h3>humidity:{city1.humidity}</h3>
                    <h3>Pressure: {city1.pressure}</h3>
                </div>
            )}
        </div>
    );
};

export default Temp;
