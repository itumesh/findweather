import React, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const InputEvent = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=10efb77a72330a0e72b72041cbfed994`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
      console.log(city);
    };

    fetchApi();
  }, [search]);

  const getDay = () => {
    const day = new Date().getDay();
    if (day === 1) {
      return "Monday";
    } else if (day === 2) {
      return "Tuesday";
    } else if (day === 3) {
      return "Wednesday";
    } else if (day === 4) {
      return "Thursday";
    } else if (day === 5) {
      return "Friday";
    } else if (day === 6) {
      return "Saturday";
    } else {
      return "Sunday";
    }
  };

  return (
    <>
      <div className="app-wrap">
        <header>
          <input
            onChange={InputEvent}
            type="text"
            className="search-box"
            placeholder="Search for a city..."
          />
        </header>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <main>
            <section className="location">
              <div className="city">{search}</div>
              <div className="date">{getDay()}</div>
            </section>

            <div className="current">
              <div className="temp">
                {city.temp}
                <span>°Cel</span>
              </div>
              {/* <div className="weather">Sunny</div> */}
              <div className="hi-low">
                Min : {city.temp_min}°cel | Max : {city.temp_max}°cel
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default TempApp;
