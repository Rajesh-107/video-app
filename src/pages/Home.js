import React from 'react';
import Footer from '../components/Footer';
import VideoGrid from '../components/grid/VideoGrid';
import Navbar from '../components/navbar/navbar';
import Tags from '../components/tags/tags';
import Pagination from '../components/ui/Pagination';


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Tags></Tags>
            <VideoGrid></VideoGrid>
            <Pagination></Pagination>
            <Footer></Footer>
        </>
    );
};

export default Home;