import React, { useState, useEffect } from "react";

const MainContent = () => {
  const [game_card, setGame_card] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "91d77e6229msh8741ef6eb672ff2p1a5478jsn2e5b6cc73068",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    const url = "https://gamerpower.p.rapidapi.com/api/giveaways";

    const response = await fetch(url, options);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    if (responseJSON) setGame_card(responseJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItems = game_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumbnail} alt={item.title} title={item.description} />
      </div>
      <div className="card_header">
        <h2>{item.title}</h2>
        <p>{item.instructions}</p>
        {
          <p className="platform">
            {item.platforms} - {item.type}
          </p>
        }
        <a href={item.open_giveaway} target="_blank" className="btn">
          Giveaway Link
        </a>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <h3>Games</h3>
      {listItems}
    </div>
  );
};

export default MainContent;
