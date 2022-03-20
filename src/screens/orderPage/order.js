import React from "react";
import SimpleAccordion from "../../components/orderPage/accordion";
import Cart from "../../components/orderPage/cart";
import Footer from "../../components/orderPage/footer";
import Header from "../../components/orderPage/header";
import Info from "../../components/orderPage/hotelnfo";
import "./order.css";
import TransitionsModal from "../../components/orderPage/modal";
export default function Order() {
  return (
    <div>
      <Header />
      <div className="container-fluid pb-5 pb-lg-0">
        <main className="row">
          <div className="col-12 col-lg-8 col-xl-9 px-xl-5">
            <div className="secNav">
              <a href="#">Group Order</a>
              <a href="#">Sign Up For Deals</a>
            </div>
            {/* info about resturant */}
            <Info />
            {/* check availibultiy  */}
            <div className="row" id="settings-row">
              <div className="col-12 p-3 border-top border-bottom d-flex justify-content-center">
                <div className="d-inline-flex flex-column">
                  <div className="text-center">Start your carryout order.</div>
                  <div className="text-center p-1">
                    <a href="#" className="btn btn-primary font-weight-bold">
                      Check Availability
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* expand menu button before accordion starts  */}
            <SimpleAccordion />
          </div>

          {/* div for making cart side-bar */}
          <div className="col-12 col-lg-4 col-xl-3 px-0 cartDiv ">
            <Cart />
          </div>
          {/* cart button */}
          <TransitionsModal/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
