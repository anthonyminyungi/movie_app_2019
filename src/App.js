import React from 'react';
import PropTypes from 'prop-types';




const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image:
    "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg"
    },
  {
    id:2,
    name : "Steak",
    image : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/zyulungyz94xotkznw79/.jpg",
    rating : 12
  }
];


function Food({name, pic, rating}) {

  return (<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={pic} alt={name} ></img>
  </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
};


function App() {
  return  (
  <div>
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />))}
    </div>
    );
}

export default App;
