import "./big-card.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useState, useEffect } from "react";

function BigCard({ id, theme, url, opt }) {
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detailFoodData = fetch(`${url}/${id}`, opt);
    Promise.all([detailFoodData])
      .then(([responseDetailFoodData]) => responseDetailFoodData.json())
      .then((data) => {
        setFoodData(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [theme, url, opt]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-info">
      <div className="main-part">
        <h1>{foodData.title}</h1>
        <h2>
          Difficulty: <span>{foodData.difficulty}</span>
        </h2>
        <p>Description: {foodData.description}</p>

        <div className="details">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="describe-item">
                    <img
                      className="icon-small"
                      src="/icons/ingredients.png"
                      alt="food"
                    />
                    <label>Ingredients: {foodData.ingredients.length}</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="describe-details-item">
                  <ul>
                    {foodData.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="describe-item">
                    <img
                      className="icon-small"
                      src="/icons/steps.png"
                      alt="weather"
                    />
                    <label className="day">Steps</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="describe-details-item">
                  <ol>
                    {foodData.method.map((step, index) => (
                      <li key={index}>{step[`Step ${index + 1}`]}</li>
                    ))}
                  </ol>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="asside-part">
        <img
          className="food-picture"
          src={foodData.image}
          alt={`Picture of ${foodData.title}`}
        ></img>
        <h4>{foodData.portion}</h4>
        <h4>{foodData.time}</h4>
      </div>
    </div>
  );
}
export default BigCard;
