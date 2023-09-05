import data from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random()*data.length)
    if(randomNumber === index){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }
  const nxtPerson = () => {
    setIndex((currentIndex)=>{
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex)=>{
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    })
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={text} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nxtPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="btn btn-hipster" onClick={randomPerson}>Surprise Me!</button>
      </article>
    </main>
  );
};
export default App;
