import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";

const myLoader = ({ src, width, quality }) => {
  return `https://andysantisteban.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="yo2.jpg"
      alt="AndySantisteban"
      width={250}
      height={250}
      className={props.className}
      loading={"lazy"}
      unoptimized={true}
    />
  );
};
const Index = () => (
  <Layout>
    <div className="layout__index">
      <div>
        <MyImage className="layout__index__img" />
      </div>
      <Fade Left>
        <div className="layout__index__container">
          <h2>I'm Andy Santisteban. </h2>
          <h3>Software developer </h3>
          <p>There is no development without discipline.</p>
          <p>There is no discipline without intelligence</p>
          <hr />
          <div className="container__footer">
            <button
              type="button"
              className="btn btn__primary"
              onClick={() => {
                window.open("/Profile.pdf");
              }}
            >
              CV
            </button>
            {/* <Link href="/contacto">
              <button type="button" className="btn btn__primary">
                Contact me
              </button>
            </Link> */}
            <Link href="/sobremi">
              <button type="button" className="btn btn__primary">
                About me
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
    <style jsx>
      {`
        .layout__index {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          border: none;
        }

        .container__footer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }

        .btn__primary {
          background: white;
          color: #1f2227;
          border: none;
          padding: 10px 5px;
          cursor: pointer;
          margin: 5px;
        }

        .btn__primary:hover {
          background: #1f2227;
          color: white;
        }

        .layout__index__container {
          padding: 20px;
        }

        @media (max-width: 768px) {
          .layout__index {
            flex-direction: column;
          }
        }
      `}
    </style>
    <style jsx global>
      {`
        .layout__index__img {
          border-radius: 50%;
        }
      `}
    </style>
  </Layout>
);

export default Index;
