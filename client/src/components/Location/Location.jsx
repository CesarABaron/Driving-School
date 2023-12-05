import React from "react";

const Location = () => {
  return (
    <div class="" id="location">
      <h3 className="shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center m-4">
        Donde estamos
      </h3>
      <div class="d-flex justify-content-center">
        <div>
          <h1>Nuestras Instalaciones</h1>
          <img></img>
        </div>
        <img
          className="w-500"
          src="https://cdn.discordapp.com/attachments/1179205116247691405/1181027017953648720/images.png?ex=657f901f&is=656d1b1f&hm=d6e901aae1bbbf54a2d606c2b4680cfacc9ec9c246ce800ab96481dff1ccaa10&"
          alt="testmap"
        />
      </div>
    </div>
  );
};

export default Location;
