import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "./card";
import burger from "../../assets/burger1.avif";
import burger2 from "../../assets/burger2.avif";
import burger3 from "../../assets/burger3.avif";
import burger4 from "../../assets/burger4.avif";
import chicken from "../../assets/chicken.avif";
import halal from "../../assets/halal.png";
import vegan from "../../assets/vegan.png";
import { useDispatch } from "react-redux";
import { OpenModel, CardData } from "../../redux/actions/action";
export default function SimpleAccordion() {
  const [open, setOpen] = React.useState(false);
  const [showInfo, setInfo] = React.useState(false);
  const dispatch = useDispatch();
  const [iconClasses, SetIconClass] = React.useState(
    "fas fa-plus-circle fa-fw"
  );
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);

  const openInfo = () => {
    if (showInfo == false) {
      document.getElementById("INFO").style.opacity = 1;
      setInfo(true);
    } else {
      document.getElementById("INFO").style.opacity = 0;
      setInfo(false);
    }
  };
  const handleChange = () => {
    if (open == true) {
      setExpanded1(false);
      setExpanded2(false);
      setExpanded3(false);
      setExpanded4(false);
      setExpanded5(false);
      setExpanded6(false);
      setExpanded7(false);
      setExpanded8(false);
      SetIconClass("fas fa-minus-circle fa-fw");
      setOpen(false);
    } else {
      setExpanded1(true);
      setExpanded2(true);
      setExpanded3(true);
      setExpanded4(true);
      setExpanded5(true);
      setExpanded6(true);
      setExpanded7(true);
      setExpanded8(true);
      setOpen(true);
      SetIconClass("fas fa-plus-circle fa-fw");
    }
  };
  useEffect(() => {
    if (
      expanded1 == false &&
      expanded2 == false &&
      expanded3 == false &&
      expanded4 == false &&
      expanded5 == false &&
      expanded6 == false &&
      expanded7 == false &&
      expanded8 == false
    ) {
      SetIconClass("fas fa-plus-circle fa-fw");
    } else {
      SetIconClass("fas fa-minus-circle fa-fw");
    }
  });
  const SetHandleChange = (panel) => {
    if (panel == "panel1") {
      if (expanded1 == false) {
        setExpanded1(true);
      } else {
        setExpanded1(false);
      }
    } else if (panel == "panel2") {
      if (expanded2 == false) {
        setExpanded2(true);
      } else {
        setExpanded2(false);
      }
    } else if (panel == "panel3") {
      if (expanded3 == false) {
        setExpanded3(true);
      } else {
        setExpanded3(false);
      }
    } else if (panel == "panel4") {
      if (expanded4 == false) {
        setExpanded4(true);
      } else {
        setExpanded4(false);
      }
    } else if (panel == "panel5") {
      if (expanded5 == false) {
        setExpanded5(true);
      } else {
        setExpanded5(false);
      }
    } else if (panel == "panel6") {
      if (expanded6 == false) {
        setExpanded6(true);
      } else {
        setExpanded6(false);
      }
    } else if (panel == "panel7") {
      if (expanded7 == false) {
        setExpanded7(true);
      } else {
        setExpanded7(false);
      }
    } else if (panel == "panel8") {
      if (expanded8 == false) {
        setExpanded8(true);
      } else {
        setExpanded8(false);
      }
    }
  };
  const CardClicked = (data) => {
    console.log(data);
    dispatch(OpenModel());
    dispatch(CardData(data));
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="info" id="INFO">
        <div className="info-header">Menu Icon Legend</div>
        <div className="info-txt">
          <img src={halal} style={{ height: "21px", paddingTop: "2px" }} />{" "}
          &nbsp; = halal
        </div>
        <div className="info-txt">
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-leaf"
          ></i>{" "}
          &nbsp; = Vegetarian
        </div>
        <div className="info-txt">
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          &nbsp; = Spicy 3x
        </div>
        <div className="info-txt">
          <i
            style={{ marginRight: "3px", marginTop: "4px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          &nbsp; = Spicy
        </div>
        <div className="info-txt">
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          <i
            style={{ marginRight: "2px", marginTop: "5px" }}
            class="fas fa-pepper-hot"
          ></i>{" "}
          &nbsp; = Spicy 2x
        </div>
        <div className="info-txt">
          <img src={vegan} style={{ height: "21px", paddingTop: "2px" }} />{" "}
          &nbsp; = Vegan
        </div>
      </div>
      <div
        class="col-12 pt-3 d-flex justify-content-between"
        style={{ marginBottom: "20px" }}
      >
        <button
          type="button"
          class="btn btn-link text-dark btn-sm p-0"
          id="expand-all-btn"
          data-expanded="false"
          onClick={handleChange}
        >
          <i class={iconClasses}></i> <span>Expand Menu</span>
        </button>

        <a class="btn btn-link text-dark btn-sm p-0" onClick={() => openInfo()}>
          <i class="fas fa-info-circle fa-fw"></i>
          <span>Menu Icon Legend</span>
        </a>
      </div>
      {/* <button onClick={handleChange}>Click me</button> */}
      <Accordion
        expanded={expanded1}
        onChange={() => SetHandleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className="myaccordian-header" id="ac-h1">
            BURGERS
          </h1>
          <span className="sub-header text-muted">
            All burgers made from custom culinary blend with 100% Black Angus
            beef. Try it in a combo!{" "}
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger}
                title={"Single Cheeseburger (3.7 oz)"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$4.69+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger2}
                title={"Double Cheeseburger (7.4 oz)"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$7.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Triple Cheeseburger (11.1 oz)"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$11.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Quad Cheeseburger (14.8 oz)"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$13.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Cheeseburger sub"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$5.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Single Hamburger (3.7 oz)"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$4.39+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Double Hamburger"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger3}
                title={"Triple Hamburger"}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$10.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Quad Hamburger "}
                description={
                  "Burgers are homemade from Black Angus beef. They can be served with a variety of free optional toppings of your choice such as Route 66 sauce , tomatoes, lettuce, pickles, jalapeños, and onions."
                }
                price={"$13.49+"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded2}
        onChange={() => SetHandleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1 className="myaccordian-header">PLANT BASED BURGERS</h1>
          <span className="sub-header text-muted">No Meat,just veggies </span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger}
                title={"Single Impossible Burger"}
                description={""}
                price={"$7.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger2}
                title={"Double Impossible Burger"}
                description={""}
                price={"$12.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Triple Impossible Burger"}
                description={""}
                price={"$18.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Quad Impossible Burger"}
                description={""}
                price={"$23.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                img={burger2}
                title={"Falafel Burger"}
                description={
                  "Long before hamburgers and cheesesteaks, there was falafel. The falafel burger patty is made out of chickpeas (also called garbanzo beans) ground with a mix of herbs and fresh veggies (the Palestinian recipe) served in our burger buns with your choice of toppings. We prefer it with cucumbers, ranch, and light hot sauce"
                }
                price={"$4.29+"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded3}
        onChange={() => SetHandleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <h1 className="myaccordian-header">FRESH SALADS</h1>
          <span className="sub-header text-muted">
            A mix of greens and your choice of the meat. Served with your choice
            of dressing.{" "}
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                hl={vegan}
                icon1={"fas fa-leaf fa-fw"}
                title={"Green Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$4.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Green Chicken Breast Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Chicken Tandoori Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Chicken Tikka Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Chicken Ranchero Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$6.99+"}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                icon1={"fas fa-leaf fa-fw"}
                title={"Flafel Burger Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Nashville Hot Chicken Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$8.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Fried Chicken Salad"}
                description={
                  "Comes with iceberg lettuce, onions, tomatoes, green peppers, cucumbers, and choice of dressing."
                }
                price={"$7.99+"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded4}
        onChange={() => SetHandleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <h1 className="myaccordian-header">TACOS</h1>
          <span className="sub-header text-muted">
            2 chicken tenders come with coleslaw, pickles and Route 66 Sauce on
            a pair of tortillas. Not your average tacos!{" "}
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                margin={"27px"}
                title={"Tender Tacos"}
                description={
                  "2 chicken tender tacos with pickles, coleslaw, and Route 66 Sauce on soft tortillas."
                }
                price={"$5.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                icon1={"fas fa-pepper-hot"}
                icon2={"fas fa-pepper-hot"}
                img={burger4}
                title={"Hot Tender Tacos"}
                description={
                  "2 Nashville Hot chicken tender tacos with pickles, coleslaw, and Route 66 Sauce on soft tortillas."
                }
                price={"$6.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                icon1={"fas fa-pepper-hot"}
                img={chicken}
                title={"Tandoori Tender Tacos"}
                description={
                  "2 Tandoori Tenders comes with Coleslaw, pickles and Route 66 Sauce on a pair of white soft tortillas. "
                }
                price={"$7.49+"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded5}
        onChange={() => SetHandleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <h1 className="myaccordian-header">KID'S MENU</h1>
          <span className="sub-header text-muted">Served with fries </span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                title={"Kid's Grilled Cheese & Fries"}
                description={""}
                price={"$3.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Kid's Chicken Nuggets & Fries"}
                description={""}
                price={"$3.99+"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded6}
        onChange={() => SetHandleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <h1 className="myaccordian-header">SIDE ORDERS</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                title={"Route 66 Sauce"}
                description={""}
                price={"$0.50"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"BBQ Sauce"}
                description={""}
                price={"$0.50"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Raunch Sauce"}
                description={""}
                price={"$0.50"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Honey Mustard"}
                description={""}
                price={"$0.50"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Homecut Fries"}
                description={""}
                price={"$2.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Steak Fries"}
                description={""}
                price={"$2.49"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Curly Fries"}
                description={"Seasoned"}
                price={"$2.49"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Waffle Fries"}
                description={""}
                price={"$2.49+"}
                margin={"29px"}
                CardClicked={CardClicked}
              />
            </div>

            <div className="col-12 col-sm-6">
              <Card
                title={"Onion Rings"}
                description={"Breaded"}
                price={"$2.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Mozzarella Sticks"}
                description={""}
                price={"$2.49+"}
                margin={"29px"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Chicken Nuggets"}
                description={""}
                price={"$2.49+"}
                margin={"49px"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Chicken Tenders"}
                description={
                  "Average of 2 tenders for the small and 4 tenders for the large. They both come with side of homecut fries."
                }
                price={"$4.49+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Mini Tender Fries"}
                margin={"28px"}
                description={
                  "5 battered wings for the small and 10 for the large."
                }
                price={"$3.99"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                icon1={"fas fa-pepper-hot"}
                icon2={"fas fa-pepper-hot"}
                title={"Nashville Hot Tender Fries"}
                description={
                  "Homecut fries topped with Nashville Hot Chicken Tenders, Route 66 Sauce, Coleslaw, and Puckels l."
                }
                price={"$6.99+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                hl={halal}
                title={"Tender Fries"}
                description={
                  "Homecut fries topped with chicken tenders, route 66 sauce, and pickles."
                }
                price={"$5.99"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded7}
        onChange={() => SetHandleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <h1 className="myaccordian-header">MILKSHAKES & ICE CREAM</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                margin={"28px"}
                title={"Ice Cream"}
                description={
                  "Vanilla, chocolate, or strawberry. Hand dipped ice cream. ALL OUR ICE CREAM MIGHT HAVE BEEN MIXED OR EXPOSED TO NUTS."
                }
                price={"$1.50+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Milkshake"}
                description={
                  "It comes in 16oz cups with one of the below flavors.  Vanilla Bean, Chocolate, Strawberry,  Chocolate Peanut Butter, Oreo, Vanilla Peanut Butter, Snickers or Coconut All used hand dipped ice cream. ALL OUR ICE CREAM MIGHT HAVE BEEN MIXED OR EXPOSED TO NUTS."
                }
                price={"$4.49"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Float"}
                description={
                  "Choice of fountain soda, mixed with selection of ice cream."
                }
                price={"$4.49"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded8}
        onChange={() => SetHandleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <h1 className="myaccordian-header">BEVERAGES</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Card
                title={"Fountain Drink"}
                description={
                  "Coca-Cola, Diet Coke, Cherry Coke, Sprite, Orange Fanta, Root Beer, Pibb Xtra, lemonade, or iced tea."
                }
                price={"$1.89+"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                margin={"29px"}
                title={"Bottled Soda"}
                description={"Coca-Cola, Sprite or orange fanta."}
                price={"$1.89"}
                CardClicked={CardClicked}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Card
                title={"Bottled Water"}
                description={"Deer Creek Spring Water."}
                price={"$0.99"}
                CardClicked={CardClicked}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
