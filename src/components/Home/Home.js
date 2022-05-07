import React from 'react';
import Books from './Books/Books';
import PopulerBooks from './PopulerBooks/PopulerBooks';
import Slider from './Slider/Slider';
import UpcommingBook from './UpcommingBook/UpcommingBook';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Books></Books>
            <PopulerBooks></PopulerBooks>
            <UpcommingBook></UpcommingBook>
        </div>
    );
};

export default Home;