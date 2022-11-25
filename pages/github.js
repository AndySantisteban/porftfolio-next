import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import IconStack from "../components/IconStack";
import Layout from "../components/Layout";

const Github = () => {
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [nameRepos, setNameRepos] = useState("");
  const [descriptionRepos, setDescriptionRepos] = useState("");
  const GithubRepos = () => {
    fetch("https://api.github.com/users/AndySantisteban", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsername(data.login);
        setLocation(data.location);
        setBio(data.bio);
        setFollowing(data.following);
        setFollowers(data.followers);
        setRepos(data.public_repos);
        setEmail(data.twitter_username);
      });
  };
  const GithubNameRepos = () => {
    fetch("https://api.github.com/users/AndySantisteban/repos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNameRepos(
          data.map((repo) => {
            return repo.name;
          })
        );
        setDescriptionRepos(
          data.map((repo) => {
            return repo.html_url;
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  useEffect(() => {
    GithubRepos();
  }, []);
  return (
    <Layout>
      <Fade>
        <div className="container__profile">
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              <div className="container__profile__hero">
                <div>
                  <button
                    onClick={() => {
                      GithubNameRepos();
                    }}
                  >
                    Load repositories
                  </button>
                  <div className="container__profile__hero__repos">
                    <div className="container__profile__hero__repos__descriptions">
                      <h3>Names:</h3>
                      {nameRepos == [] ? (
                        <p>Not Repositories</p>
                      ) : (
                        nameRepos.map((item) => {
                          return (
                            <Fade left>
                              <span className={"item_repo"}>
                                {item}
                                <br />{" "}
                              </span>
                            </Fade>
                          );
                        })
                      )}
                    </div>
                    <div className="container__profile__hero__repos__descriptions">
                      <h3>Url:</h3>
                      {descriptionRepos == [] ? (
                        <p>Not Descriptions</p>
                      ) : (
                        descriptionRepos.map((item) => {
                          return (
                            <Fade left>
                              <span className={"item_repo"}>
                                {item === null ? (
                                  <span>Not Description</span>
                                ) : (
                                  <a href={item} target={"__blank"}>
                                    {item}
                                  </a>
                                )}
                                <br />
                              </span>
                            </Fade>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
                <div className="card__body">
                  <p className="card__body__span">
                    This data was taken from the Github API.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <h2>Github Profile</h2>
                </div>
                <div className="card__body">
                  <p className="card__body__tittle">User name:</p>
                  <Fade>
                    <p className="card__body__content">{username}</p>
                  </Fade>
                  <p className="card__body__tittle">Location:</p>
                  <Fade>
                    <p className="card__body__content">{location}</p>
                  </Fade>
                  <p className="card__body__tittle">Twitter:</p>
                  <Fade>
                    <p className="card__body__content">
                      @{email ? email : "Not Twitter"}
                    </p>
                  </Fade>
                  <p className="card__body__tittle">Biography:</p>
                  <Fade>
                    <p className="card__body__content">{bio}</p>
                  </Fade>
                </div>
                <div className="card__body">
                  <p className="card__body__span">
                    This data was taken from the Github API.
                  </p>
                </div>
                <div className="card__footer">
                  <Fade>
                    <p className="card__footer__item">
                      <IconStack
                        src={
                          "https://img.icons8.com/material-outlined/12/000000/code-fork.png"
                        }
                        props={"N° Repositories"}
                      />{" "}
                      : {repos}
                    </p>
                  </Fade>
                  <Fade>
                    <p className="card__footer__item">
                      <IconStack
                        src={
                          "https://img.icons8.com/fluency/12/000000/star.png"
                        }
                        props={"Followers"}
                      />{" "}
                      : {followers}
                    </p>
                  </Fade>
                  <Fade>
                    <p className="card__footer__item">
                      <IconStack
                        src={
                          "https://img.icons8.com/external-prettycons-flat-prettycons/12/000000/external-favorite-essentials-prettycons-flat-prettycons.png"
                        }
                        props={"Following"}
                      />{" "}
                      : {following}
                    </p>
                  </Fade>
                </div>
              </div>
            </>
          )}
        </div>
      </Fade>
      <style jsx>
        {`
          .container__profile {
            display: flex;
            flex-direction: row-reverse;
          }

          .container__profile__hero {
            width: 60%;
            font-size: 12px;
            margin: 0 10px;
            margin-bottom: 20px;
            box-shadow: 0px 0px 50px #eaeaea;
          }

          .card {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 0px 50px #eaeaea;
            font-size: 12px;
          }

          .card__secondary {
            margin-top: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 0px 50px #eaeaea;
            font-size: 12px;
          }

          .card__header {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 30%;
            background: #1f2227;
            color: #fff;
            border-bottom: 1px solid #eaeaea;
          }

          .card__body {
            width: 100%;
            height: 30%;
            padding: 0 50px;
          }

          .card__footer {
            width: 100%;
            height: 30%;
            padding: 0 50px;
          }

          .card__footer__item {
          }

          .container__profile__hero__repos {
            margin: 10px;
            padding: 20px;
            display: flex;
          }

          .container__profile__hero__repos__descriptions {
            width: 50%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .card__body__secondary {
            display: flex;
            justify-content: space-around;
            padding: 10px;
          }

          .card__body__tittle {
            font-weight: bold;
          }

          .card__body__content {
            margin-left: 2rem;
          }

          .card__body__span {
            margin-left: 2rem;
            color: #6b7280;
          }

          .card__footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            flex-direction: row;
            background: #eaeaea;
          }

          .card__footer__item {
            margin: 10px 10px;
          }

          @media (max-width: 768px) {
            .container__profile {
              flex-direction: column-reverse;
            }

            .container__profile__hero {
              margin: 20px 0;
              width: 100%;
            }

            .card {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0px 0px 50px #eaeaea;
            }

            .card__header {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 30%;
            }

            .card__body {
              width: 100%;
              height: 30%;
              padding: 0 50px;
            }

            .card__footer {
              width: 100%;
              height: 30%;
              padding: 0 50px;
            }
          }
        `}
      </style>
      <style jsx global>
        {``}
      </style>
    </Layout>
  );
};
export default Github;
