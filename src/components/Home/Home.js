import React from 'react';
import Books from './Books/Books';
import PopulerBooks from './PopulerBooks/PopulerBooks';
import Slider from './Slider/Slider';
import UpcommingBooks from './UpcommingBooks/UpcommingBooks';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Books></Books>
            <PopulerBooks></PopulerBooks>
            <UpcommingBooks></UpcommingBooks>
        </div>
    );
};

export default Home;