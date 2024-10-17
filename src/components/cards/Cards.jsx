import React from "react";
import { BsCheck2 } from "react-icons/bs";

export default function cards(plans) {
  console.log(plans);
  return (
    <div className="cards-plan">
      <div className="card-basic">
        <h3 className="title-card">Basic</h3>
        <div className="price-table">
          <span className="price">{plans.plans.price1}</span>
          <sub className="date">{plans.plans.date}</sub>
        </div>
        <hr />
        <ul className="card-optionitem">
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>elit. Unde, quae</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>elit. Asperiores, laborum</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Perspiciatis, deleniti</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>adipisicing elit. Eius, tempora</span>
          </li>
        </ul>
        <button className="button-pricing">Get Started</button>
      </div>
      <div className="card-proffesional">
        <h3 className="title-card">proffesional</h3>
        <div className="price-table">
          <span className="price">{plans.plans.price2}</span>
          <sub className="date">{plans.plans.date}</sub>
        </div>
        <hr />
        <ul className="card-optionitem">
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Unde, quae</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Asperiores, laborum</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Perspiciatis, deleniti</span>
          </li>
        </ul>
        <button className="button-pricing">Get Started</button>
      </div>
      <div className="card-custom">
        <h3 className="title-card">Custom</h3>
        <div className="price-table">
          <span className="price">{plans.plans.price3}</span>
          <sub className="date">{plans.plans.date}</sub>
        </div>
        <hr />
        <ul className="card-optionitem">
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Lorem ipsum</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Lorem ipsum dolor</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Perspiciatis, deleniti</span>
          </li>
          <li className="option-item">
            <span>
              <BsCheck2 style={{ display: "flex" }} />
            </span>
            <span>Eius, tempora</span>
          </li>
        </ul>
        <button className="button-pricing button-custom">Get Started</button>
      </div>
    </div>
  );
}
