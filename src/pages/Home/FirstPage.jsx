import "./Home.css"
export const FirstPage = () => {
  return (
    <>
        <div className="w3-col firstPage-wrapper" style={{height: "90vh"}}>
            <div className="w3-col">
                <div className="w3-content">
                    <div className="w3-container">
                        <div className="w3-col s12">
                        <div className="first-page-content">
                            <span className="firstPage-img-container">
                                <img className="firstPage-img" src="/images/Home/home main3.png" alt="" />
                            </span>
                            <h2 className="firstPage-intro">Welcome to <span>CreativeME</span>  - Simplify Your Life with a To-Do App</h2>
                            <p className="leading-6 first-Page-paragraph">Your ultimate companion for staying organized, productive, and on top of your tasks. In today's fast-paced world, it's crucial to manage your responsibilities effectively, and that's where our to-do app comes in. <br />
                           In a world filled with countless commitments, deadlines, and goals, it's easy to feel overwhelmed and struggle to keep track of everything. That's why a to-do app is an essential tool for modern life. <span>CreativeME</span> is designed to help you streamline your tasks, prioritize effectively, and achieve your goals with ease.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
