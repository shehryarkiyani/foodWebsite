import { Block } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
export default function Cart(props) {
  const state=useSelector((state)=>state.ChangeCartState)
  const state1=useSelector((state)=>state.ChangeCardState)
  const [flag, setFlag] = useState(state);
  const [cartToggle, setCartToggle] = useState(true);
  // const [reso, setReso] = useState(
  //   window.matchMedia("(max-width: 922px)").matches
  // );

  // useEffect(() => {
  //   window.matchMedia("(max-width: 922px)").matches
  //     ? console.log("not")
  //     : console.log("width");
  // }, []);

  return (
    <div>
      <div
        // id="cartDisplay"
        style={{
          display: cartToggle == true ? "inline-block" : "none",
        }}
      >
        {state == false ? (
          <div className="col-12 col-lg-4 col-xl-3 px-0 cartMain ">
            <div id="cart-content" className="p-2 pb-4">
              <div id="cart-items" className="d-flex flex-column mb-3">
                <div className="text-center cartText py-4">
                  Your cart is empty.
                </div>
                <div className="text-center">
                  <div className="col-12 pt-2 payment-types">
                    <div>
                      <i
                        className="fab fa-cc-apple-pay"
                        title="Accepts Apple Pay"
                      ></i>
                    </div>
                    <div>
                      <i
                        className="fab fa-cc-paypal"
                        title="Accepts PayPal"
                      ></i>
                    </div>
                    <div>
                      <img
                        src="//sitecontent-menufycom.netdna-ssl.com/google_pay_mark.svg?lu=cf44cd3474c8b0bf717ebf03dff9bae6"
                        alt="Accepts Google Pay"
                        title="Accepts Google Pay"
                      />
                    </div>
                    <div>
                      <img
                        src="//sitecontent-menufycom.netdna-ssl.com/blue_venmo_acceptance_mark.svg?lu=7a3280d8dc085164952fbd8bfac0505f"
                        alt="Accepts Venmo"
                        title="Accepts Venmo"
                      />
                    </div>
                    <br />
                    <div>
                      <i className="fab fa-cc-visa" title="Accepts Visa"></i>
                    </div>
                    <div>
                      <i
                        className="fab fa-cc-mastercard"
                        title="Accepts Mastercard"
                      ></i>
                    </div>
                    <div>
                      <i
                        className="fab fa-cc-discover"
                        title="Accepts Discover"
                      ></i>
                    </div>
                    <div>
                      <i
                        className="fab fa-cc-amex"
                        title="Accepts American Express"
                      ></i>
                    </div>
                    <br />
                    <div>
                      <i
                        className="fab fa-bitcoin"
                        title="Accepts Bitcoin, Bitcoin Cash, Ethereum, Ripple and USD coins"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div class="col-12 col-lg-4 col-xl-3 px-0" id="menufy-cart">
              <div id="cart-content" class="p-2 pb-4">
                <div id="cart-items" class="d-flex flex-column mb-3">
                  <div class="mb-3">
                    <h2 class="border-bottom font-weight-bold p-1 h5">
                      Your items
                    </h2>
                    <div class="d-flex">
                      <a
                        class="flex-grow-1 p-1"
                        title="Modify Item or Quantity"
                        href="#/Item/1582117/157789?cartId=159502988"
                      >
                        1 x {state1}
                      </a>
                      <div class="p-1">Price</div>
                      <a
                        class="p-1"
                        aria-label="Remove 1 x Single Cheeseburger (3.7 oz)"
                        title="Remove 1 x Single Cheeseburger (3.7 oz)"
                        href="#remove/159502988"
                      >
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </div>
                    <div class="d-flex p-1 border-bottom">
                      <small>No Sides</small>
                    </div>
                  </div>
                </div>

                <div id="cart-summary" class="d-flex flex-column p-1 mt-3">
                  <div class="d-flex">
                    <div class="flex-grow-1">Subtotal:</div>
                    <div class="">$0.00</div>
                  </div>
                  <div class="d-flex">
                    <div class="flex-grow-1">Convenience Fee:</div>
                    <div>$0.00</div>
                  </div>
                  <div class="d-flex">
                    <div class="flex-grow-1">Tax:</div>
                    <div>$0.00</div>
                  </div>
                  <div class="d-flex font-weight-bold">
                    <div class="flex-grow-1">Total:</div>
                    <div>$0.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-lg-4 col-xl-3 border-top p-3 d-flex flex-row"
              id="menufy-cart-checkout-btn"
            >
              <button
                onClick={() => {
                  setCartToggle(false);
                }}
                className="btn btn-secondary m-1 d-lg-none font-weight-bold"
                type="button"
              >
                Close Cart
              </button>
              <button
                className="btn btn-success flex-grow-1 m-1 d-flex text-left font-weight-bold"
                id="checkout-btn"
                disabled="disabled"
              >
                <span className="flex-grow-1">
                  <i
                    className="fas fa-circle-notch fa-spin"
                    role="status"
                    aria-live="polite"
                    aria-label="Loading"
                  ></i>{" "}
                  Checkout
                </span>
                <span className="cart-total">$0.00</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div class="fixed-bottom d-lg-none w-100 border-top p-3 view-cart-btn-mobile">
        <button
          type="button"
          class="btn btn-success btn-block text-left d-flex font-weight-bold cartToggleBtn"
          onClick={() => {
            setCartToggle(true);
          }}
        >
          <span class="flex-grow-1">
            View Cart <span class="cart-count">0</span>
          </span>
          <span class="cart-total">$0.00</span>
        </button>
      </div>
    </div>
  );
}
