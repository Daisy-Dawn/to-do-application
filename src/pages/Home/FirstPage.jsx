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
                            <p className="leading-6 first-Page-paragraph">Your ultimate companion for staying organized, productive, and on top of your tasks. In today's fast-paced world, it's crucial to manage your responsibilities effectively, and that's where our to-do app comes in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
