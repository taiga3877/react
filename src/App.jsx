import React from 'react';
import Header from './Header/Header';
import SectionOne from './SectionOne/section';
import SectionTwo from './SectionTwo/section2';

const App = () => {
    return (
        <div>
            <Header></Header>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <br />
            <br />
            <br />
            <Header></Header>
        </div>
    );
}

export default App;
