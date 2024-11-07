function Portfolio() {
    return (
        <section>
            <div className="row">   
                <div className="col-md-6">
                    <a href="https://github.com/jclark-bcamp/employee-tracker">
                    <img src="./public/portfolio_images/photo1.png" alt="Employee Tracker" height="350px" width="350px"/></a>
                    <p>Employee Tracker</p>
                </div>
                <div className="col-md-6">
                    <a href="https://github.com/jclark-bcamp/challengeSeven">
                    <img src="./public/portfolio_images/stars.png" alt="README Generator" height="350px" width="350px"/></a>
                    <p>README Generator</p>
                </div>
                <div className="col-md-6">
                    <a href="https://github.com/jclark-bcamp/vehicle-builder">
                    <img src="./public/portfolio_images/vehicle.png" alt="Vehicle Builder" height="350px" width="350px"/></a>
                    <p>Vehicle Builder</p>
                </div>
                <div className="col-md-6">
                    <img src="./public/portfolio_images/sunset.png" alt="Weather API" height="350px" width="350px"/>
                    <p>Weather API - WIP</p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;  // Exporting the Portfolio component