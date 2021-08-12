import Layout from '../components/Layout'
const Sobremi = () => (
  <Layout>
    <h1 className="text-center">About me</h1>
    <header className="row ">
      <div className="col-md-12 ">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn bg-dark">
          <div className="row">
            <div className="col-md-4 mx-auto text-center">
              <img
                src="yo.jpg"
                alt=""
                className="img-fluid mb-4 mt-4 rounded "
                width="90%"
              />
            </div>
            <div className="col-md-8 text-light">
              <h1 className="text-light">Andy Santisteban</h1>
              <h3 className="text-light">Web Developer</h3>
              <p className=" pt-3 pb-1">
                I am Andy Santisteban, web developer, I am 21 years old living
                in Chiclayo, Peru.
              </p>
              <p className=" pt-3 pb-1">
                All my life I have liked to learn about computers and everything
                related. <br />I worked in some companies in the general
                administration area, a long time ago I started to dedicate
                myself to web development.
              </p>
              <p>Skills:</p>
              <p>
                <img
                  src="https://img.icons8.com/small/32/ffffff/html-5.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/material/32/ffffff/css3.png"
                  className="ms-2"
                />

                <img
                  src="https://img.icons8.com/ios-filled/32/ffffff/javascript.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/ios-filled/32/ffffff/jquery.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/windows/32/ffffff/php-logo.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/ios/32/ffffff/mysql-logo.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/windows/32/ffffff/node-js.png"
                  className="ms-2"
                />
                <img
                  src="https://img.icons8.com/carbon-copy/32/ffffff/react.png"
                  className="ms-2"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
)
export default Sobremi
