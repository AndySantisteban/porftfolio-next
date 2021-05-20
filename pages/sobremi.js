import Layout from "../components/Layout";
const Sobremi = () => (
  <Layout>
    <h1 className="text-center">About me</h1>
    <header className="row ">
      <div className="col-md-12 ">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn bg-dark">
          <div className="row">
            <div className="col-md-4">
              <img src="yo.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8 text-light">
              <h1 className="text-light">Andy Santisteban</h1>
              <h3 className="text-light">Web Developer</h3>
              <p className=" pt-3 pb-1">
                I am Andy Santisteban, web developer, I am 20 years old living
                in Chiclayo, Peru. 
              </p>
              <p className=" pt-3 pb-1">
                All my life I have liked to learn about
                computers and everything related. <br/>
                I worked in some companies in
                the general administration area, a long time ago I started to
                dedicate myself to web development.
              </p>
              <p>Skills:</p>
              <p>
              <img src="https://img.icons8.com/small/32/ffffff/html-5.png"/>
              <img src="https://img.icons8.com/material/32/ffffff/css3.png"/>
              <img src="https://img.icons8.com/material-rounded/32/ffffff/sass.png"/>
              <img src="https://img.icons8.com/ios-filled/32/ffffff/javascript.png"/>
              <img src="https://img.icons8.com/ios-filled/32/ffffff/jquery.png"/>
              <img src="https://img.icons8.com/windows/32/ffffff/php-logo.png"/>
              <img src="https://img.icons8.com/ios/32/ffffff/mysql-logo.png"/>
              <img src="https://img.icons8.com/windows/32/ffffff/node-js.png"/>
              <img src="https://img.icons8.com/carbon-copy/32/ffffff/react.png"/>
              
              </p>
              <p>
              Social media:
              </p>
              <a href="https://www.linkedin.com/in/andy-santisteban/"><img src="https://img.icons8.com/android/32/ffffff/linkedin.png"/></a>
            </div>

          </div>
        </div>
      </div>
    </header>
  </Layout>
);
export default Sobremi;
