import React,{Component} from 'react';
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import {FooterContainer}  from '../containers/footer';

export class Home extends Component{
    render()
    {
        return(
            <div>
            <NavigationBar />
            <Banner />
            <FooterContainer />

            </div>
        )
    }
}

export default Home ;