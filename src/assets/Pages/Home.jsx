import React from 'react';
import Banner from '../Components/Banner';
import styles from "../Styles/Home.module.scss";
import HeaderBannerImg from "../Images/Img/banner-home.jpg";

const Home = () => {
    return (
        <main className={styles.home}>
            <Banner image={HeaderBannerImg} text="Chez vous, partout et ailleurs" bannerType="homeBanner" />
            <h1>Ma page d'accueil</h1>
            <div>
                <h2>Test accueil</h2>
            </div>
        </main>
    );
};

export default Home;