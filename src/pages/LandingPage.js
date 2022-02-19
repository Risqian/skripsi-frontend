import React, { Component } from 'react'
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { InputText } from "elements/Form";

import { fetchPage } from "store/actions/page";
// import landingPage from 'json/landingPage.json'

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    state = {
        searchData: ""
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log("searchData : ", this.state.searchData)
    };

    componentDidMount() {
        document.title = "ShootFutsal";
        window.scrollTo(0, 0);

        if (!this.props.page.landingPage)
            this.props.fetchPage(`/landing-page`, "landingPage");
    }

    render() {
        const { page } = this.props;
        if (!page.hasOwnProperty("landingPage")) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
                {/* <div className="col-5 py-5" style={{ paddingLeft: 40 }}>
                    <label htmlFor="firstName">Search Data</label>
                    <InputText
                        id="searchData"
                        name="searchData"
                        value={this.state.searchData}
                        onChange={this.onChange}
                    />
                    {this.state.searchData}
                </div> */}
                <MostPicked
                    refMostPicked={this.refMostPicked}
                    data={page.landingPage.mostPicked}
                    search={this.state.searchData}
                />
                <Categories
                    data={page.landingPage.category}
                    search={this.state.searchData}
                />
                <Testimony data={page.landingPage.testimonial} />
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
