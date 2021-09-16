import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from 'json/itemDetails.json';

class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.title = "Details Page";
  }

  render() {

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                {/* <PageDetailDescription data={page[match.params.id]} /> */}
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  // itemDetails={page[match.params.id]}
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={ItemDetails.activities} />
        <Testimony data={ItemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}

export default DetailsPage;
