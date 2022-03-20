import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { OpenModel, CloseModel,SetOpenCart } from "../../redux/actions/action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styles = {
  position: "absolute",
  top: "10%",
  left: "10%",
  overflow: "scroll",
  height: "100%",
  display: "block",
};

export default function TransitionsModal() {
  const mystate = useSelector((state) => state.ChangeModelState);
  const cardData = useSelector((state) => state.ChangeCardState);
  const dispatch = useDispatch();
  // const handleOpen = () => {
  //   dispatch(OpenModel());
  // };
  const handleClose = () => dispatch(CloseModel());
const OpenCart=()=>{
  dispatch(SetOpenCart())
}
  return (
    <div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={mystate}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={styles}
      >
        <Fade in={mystate}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div className="modal-header">
                <h2 className="modal-title font-weight-bold" id="modalTitle">
                  {cardData}&nbsp;
                  <img
                    src="//sitecontent-menufycom.netdna-ssl.com/halal.png?lu=b20e8270b65ceee2e351fc45021ca208"
                    title="Halal"
                    style={{ height: "21px" }}
                  />
                </h2>
                <button
                  type="button"
                  className="close"
                  aria-label="Close Menu Item Modal"
                  onClick={handleClose}
                >
                  <i className="fas fa-times fa-fw"></i>
                </button>
              </div>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="modal-body">
                <div className="container-fluid p-0">
                  <div className="row no-gutters mb-3">
                    <div className="col-12">
                      <div className="item-page-image text-center">
                        <img
                          src="https://menufyproduction.imgix.net/637214473082140799+168284.png?auto=compress,format&amp;h=400&amp;w=600&amp;fit=max"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters mb-3">
                    <div className="col-12">
                      Burgers are homemade from Black Angus beef. They can be
                      served with a variety of free optional toppings of your
                      choice such as Route 66 sauce , tomatoes, lettuce,
                      pickles, jalapeños, and onions.
                    </div>
                  </div>
                  <form>
                    <div className="row"></div>
                    <br />
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div id="item-quantity" className="form-group">
                          <label for="quantity-input" className="font-weight-bold">
                            Quantity:
                          </label>
                          <div className="input-group d-flex">
                            <div className="input-group-prepend">
                              <button
                                className="btn border quantity-inc"
                                data-increment="-1"
                                title="Decrease Quantity"
                                type="button"
                              >
                                <i className="fas fa-fw fa-minus"></i>
                              </button>
                            </div>
                            <input
                              className="form-control"
                              data-val="true"
                              data-val-number="The field Quantity must be a number."
                              data-val-range="Quantity must be between 1 to 50."
                              data-val-range-max="50"
                              data-val-range-min="1"
                              data-val-required="The Quantity field is required."
                              id="quantity-input"
                              max="50"
                              min="1"
                              name="OrderItem.Quantity"
                              required="required"
                              title="Quantity"
                              type="number"
                              value="1"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn border quantity-inc"
                                data-increment="1"
                                title="Increase Quantity"
                                type="button"
                              >
                                <i className="fas fa-fw fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6">
                        <div id="item-size" className="form-group">
                          <label
                            for="OrderItem_SizeId"
                            className="font-weight-bold"
                          >
                            Choice of Sides:
                          </label>
                          <select
                            className="custom-select"
                            id="OrderItem_SizeId"
                            name="OrderItem.SizeId"
                            style={{width:"100%"}}
                          >
                            <option selected="selected" value="Size1">
                              No Sides
                            </option>
                            <option value="Size2">
                              Add Small Side &amp; Fountain Soda ($3.49)
                            </option>
                            <option value="Size3">
                              Add Large Side &amp; Fountain Soda ($4.99)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="item-multiselects row">
                      <div className="item-multiselects row">
                        <fieldset className="col-12">
                          <legend className="border-bottom">
                            <strong>Bun Substitutions</strong>{" "}
                            <span
                              className="text-muted"
                              id="multiselect-limit-1142736"
                            >
                              (up to 1 max)
                            </span>
                          </legend>
                          <div
                            className="row mx-2 my-3 item-option-multiselect"
                            data-error-id="multiselect-limit-1142736"
                            id="multiselect-1142736"
                            data-min="0"
                            data-max="1"
                            data-name="Bun Substitutions"
                          >
                            <div className="col-12 col-md-6 p-1">
                              <label className="item-option-checkbox custom-control custom-checkbox">
                                <input
                                  className="custom-control-input item-option-multiselect-checkbox"
                                  data-parent-id="multiselect-1142736"
                                  data-price="0.00"
                                  id="21609293"
                                  name="21609293"
                                  type="checkbox"
                                  value="true"
                                />
                                <input
                                  name="21609293"
                                  type="hidden"
                                  value="false"
                                />{" "}
                                <span
                                  className="custom-control-label"
                                  for="21609293"
                                >
                                  Lettuce Wrap
                                </span>
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div id="item-comments" className="col-12 mt-3 form-group">
                      <div id="item-comments-header"></div>
                      <label for="OrderItem_Comments" className="font-weight-bold">
                        Special Instructions
                      </label>
                      <textarea
                        className="form-control"
                        cols="20"
                        data-val="true"
                        data-val-maxlength="The field Comments must be a string or array type with a maximum length of '200'."
                        data-val-maxlength-max="200"
                        id="OrderItem_Comments"
                        maxlength="200"
                        name="OrderItem.Comments"
                        placeholder="Food allergy? all of our meats are well done only. We will not be able to put any of the toppings on the side, sorry. If your requested side is not in the sides section then we don't have it. Thanks"
                        rows="3"
                      ></textarea>
                      <div id="item-comments-disclaimer"></div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      id="add-to-cart-btn"
                      className="btn btn-primary success-modal-btn d-flex flex-row text-left"
                    >
                      <span className="flex-grow-1" onClick={()=>OpenCart()}>
                        <i
                          className="fas fa-circle-notch fa-spin"
                          style={{ display: "none" }}
                          role="status"
                          aria-live="polite"
                          aria-label="Loading"
                        ></i>{" "}
                        Add to Cart
                      </span>{" "}
                      <span id="item-price-display">$0.00</span>
                    </button>
                  </div>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      
    </div>
  );
}
