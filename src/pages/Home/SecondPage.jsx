import "./Home.css"
import { CheckCircleFilled } from '@ant-design/icons';

export const SecondPage = () => {
    const secondPageText = [
        {
            text: "Stay Organized: CreativeME provides a centralized platform to keep all your tasks in one place."
        },
        {
            text: "Boost Productivity: By having a structured system in place, you can prioritize your tasks efficiently."
        },
        {
            text: "Track Progress: Visualize your progress and accomplishments."
        }
    ]
  return (
    <>
        <div className="w3-col secondPage-wrapper" style={{height: "90vh"}}>
            <div className="w3-col">
                <div className="w3-content">
                    <div className="w3-container">
                    <div className="w3-col l6 s12">
                            <div className="secondPage-img">
                            <div className="second-img-container">
                                <img className="second-img" src="/images/Home/home1.png" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="w3-col l6 s12">
                        <div className="secondPage-content" >
                            <h2 className="second-intro">Why Do You Need <span className="app-name">CreativeME</span>?</h2>
                            <p className="leading-6 second-paragraph">Managing your tasks manually or relying on memory alone can be unreliable and stressful. Here are some compelling reasons why you need a CreativeME in your life:</p>
                            <ul className="secondPage-unordered-lists">
                                {secondPageText.map((second, index)=> (
                                    <div className="w3-col"  key={index}>
                                    <div className="w3-col s1">
                                        <span><CheckCircleFilled /></span>
                                    </div>
                                    <div className="w3-col s11">
                                        <li> {second.text} </li>
                                    </div>
                                    </div>
                                ))}
                            </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
