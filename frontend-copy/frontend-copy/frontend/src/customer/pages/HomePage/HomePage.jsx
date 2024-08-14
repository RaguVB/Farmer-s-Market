import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Maincarousel from '../../components/Homecarousel/Maincarousel';
import HomeSection from '../../components/HomeSection/HomeSection';
import { siblings } from '../../../Data/Men/siblings';
import { electrical } from '../../../Data/Gouns/electrical';
import { edu } from '../../../Data/edu';


const HomePage = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">TOY TOWN</h1>
      </div>
      <Maincarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Link to="/plush/birds/siblings">
          <HomeSection data={siblings} sectionName={"Soft Plush Toys"} />
        </Link>
        <Link to="/car/wooden/electrical">
          <HomeSection data={electrical} sectionName={"Electrical Car Toys"} />
        </Link>
        <Link to="/educational/science/edu">
          <HomeSection data={edu} sectionName={"Educational Toys"} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
