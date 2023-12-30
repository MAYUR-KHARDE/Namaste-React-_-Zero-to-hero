import "./App.css";
import React from "react";
import Card from "./Card/Card.jsx";
//APP Layout
//*******************Header*********************
// -logo
// -navitems
// -cart
//****************Body*****************************
// -Searchbar
// -restaurant list
// -restaurant Card
// -Image
// -Name
// -Rating
// -cuisness
const data = [
  {
    itemName: "Margherita Pizza",
    img: "https://source.unsplash.com/800x800/?pizza",
  },
  {
    itemName: "Spaghetti Bolognese",
    img: "https://source.unsplash.com/900x900/?spaghetti",
  },
  {
    itemName: "Chicken Alfredo Pasta",
    img: "https://source.unsplash.com/900x900/?pasta",
  },
  {
    itemName: "Sushi Platter",
    img: "https://source.unsplash.com/900x900/?sushi",
  },
  {
    itemName: "Grilled Salmon",
    img: "https://source.unsplash.com/900x900/?salmon",
  },
  {
    itemName: "Caesar Salad",
    img: "https://source.unsplash.com/900x900/?salad",
  },
  {
    itemName: "Tandoori Chicken",
    img: "https://source.unsplash.com/900x900/?tandoori",
  },
  {
    itemName: "Chocolate Fondue",
    img: "https://source.unsplash.com/900x900/?chocolate",
  },
  {
    itemName: "Mango Smoothie",
    img: "https://source.unsplash.com/900x900/?smoothie",
  },
  {
    itemName: "Garlic Butter Shrimp",
    img: "https://source.unsplash.com/900x900/?shrimp",
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="LOGO-CONTAINER">
        <img
          className="LOGO"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="not loaded img"
        />
      </div>
      <div className="name">NAMASTE KHANA KHAOGE</div>

      <div className="nav-items">
        <ul className="felx-box">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const BODY = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search what you Wanna Eat " />
      </div>
      <div className="card1">
        {data.map((iterator) => {
          return (
            <Card
              itemName={iterator.itemName}
              img={iterator.img}
              key={iterator.itemName}
            />
          );
        })}
      </div>
    </div>
  );
};
const Footer = () => {};
const AppLAYOUT = () => {
  return (
    <div>
      <Header />
      <BODY />
    </div>
  );
};

export default AppLAYOUT;
