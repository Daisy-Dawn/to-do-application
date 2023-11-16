import { useEffect } from "react";
import { account } from "../../appwrite/config";
import "./Home.css";
import { Carousel } from "antd";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { ForthPage } from "./ForthPage";

export const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="w3-col" style={{width: "100%"}}>
        <Carousel afterChange={onChange} effect="fade">
          <div>
          <FirstPage></FirstPage>
          </div>
          <div>
          <SecondPage></SecondPage>
          </div>
          <div>
          <ThirdPage></ThirdPage>
          </div>
          <div>
          <ForthPage></ForthPage>
          </div>
        </Carousel>
      </div>
    </>
  );
};
