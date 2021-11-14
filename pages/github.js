import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { Image } from 'next/image'
const Github = () => {
    const [error, setError] = useState(null)
    const [repos, setRepos] = useState([])
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    const [nameRepos, setNameRepos] = useState('')
    const [descriptionRepos, setDescriptionRepos] = useState('')
    const GithubRepos = () => {
        fetch('https://api.github.com/users/AndySantisteban',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            return res.json()
        }).then(data => {
            setUsername(data.login)
            setLocation(data.location)
            setEmail(data.email)
            setBio(data.bio)
            setFollowing(data.following)
            setFollowers(data.followers)
            setRepos(data.public_repos)
        })
    }
    const GithubNameRepos = () =>{
        fetch('https://api.github.com/users/AndySantisteban/repos',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            return res.json()
        }).then(data => {
            setNameRepos(data.map(repo => {
                return repo.name
            }))
            setDescriptionRepos(data.map(repo=> {
                return repo.description
            }))
        }).catch(err => {
            console.log(err)
            setError(err)
        })
    }
    useEffect(() => {
       GithubRepos()
    }, [])
    return (
        <Layout >
            <div className="container__profile">
                {
                    error?
                        <p>{error}</p>:
                        <>
                            <div className="container__profile__hero">
                                <div>
                                    <button onClick={()=>{GithubNameRepos()}}>Load Repositories</button>
                                    <div className="container__profile__hero__repos">
                                        <div className="container__profile__hero__repos__descriptions">
                                            <h3>Names:</h3>
                                            { nameRepos==[]?
                                                <p>Not Repositories</p>
                                                :
                                                nameRepos.map((item) =>{
                                                    return (<span>{item} ==><br/> </span>)
                                                })
                                            }
                                        </div>
                                        <div className="container__profile__hero__repos__descriptions">
                                            <h3>Descriptions:</h3>
                                            { descriptionRepos==[]?
                                                <p>Not Descriptions</p>
                                                :
                                                descriptionRepos.map((item) =>{
                                                    return (<span>{item===null? <span>Not Description</span>: item}<br/></span>)
                                                })

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__header">
                                    <h2>Github Profile</h2>
                                </div>
                                <div className="card__body">
                                    <p className="card__body__tittle">User name:</p>
                                    <p className="card__body__content">{username}</p>
                                    <p className="card__body__tittle">Location:</p>
                                    <p className="card__body__content">{location}</p>
                                    <p className="card__body__tittle">Email:</p>
                                    <p className="card__body__content">{email?email: "Not Email" }</p>
                                    <p className="card__body__tittle">Biography:</p>
                                    <p className="card__body__content">{bio}</p>
                                </div>
                                <div className="card__footer">
                                    <p className="card__footer__item"><img src="https://img.icons8.com/material-outlined/12/000000/code-fork.png" alt={"..."}/> : {repos}</p>
                                    <p className="card__footer__item"><img src="https://img.icons8.com/fluency/12/000000/star.png" alt="..."/> : {followers}</p>
                                    <p className="card__footer__item"><img src="https://img.icons8.com/external-prettycons-flat-prettycons/12/000000/external-favorite-essentials-prettycons-flat-prettycons.png" alt={"..."}/> : {following}</p>
                                </div>
                            </div>
                        </>
                }
            </div>
            <style jsx>{`
                .container__profile{
                  display: flex;
                  flex-direction: row;
                }
                .container__profile__hero{
                width: 60%;
                font-size: 12px;
                padding: 20px;
                margin: 0 10px;
                margin-bottom: 20px;
                box-shadow: 0px 0px 50px #eaeaea;
                border-radius: 10px;
                }
                .card {
                    width: 40%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 10px;
                    box-shadow: 0px 0px 50px #eaeaea;
                    font-size: 12px;
                }
                
                .card__header{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 30%;
                    background: #1F2937;
                    color: #fff;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    border-bottom: 1px solid #eaeaea;
                }
                .card__body{
                    width: 100%;
                    height: 30%;
                    padding: 0 50px;
                }
                .card__footer{
                    width: 100%;
                    height: 30%;
                    padding: 0 50px;
                }
                .card__footer__item{
                }
                .container__profile__hero__repos{
                    margin: 10px;
                    display: flex;
                }
                .container__profile__hero__repos__descriptions{
                  width: 50%;
                }
                .card__body__tittle{
                  font-weight: bold;
                }
                .card__body__content{
                  margin-left: 2rem;
                }
                .card__footer{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 0 10px;
                  flex-direction: row;
                  background: #eaeaea;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                }
                .card__footer__item{
                  margin: 10px 10px;
                }
                @media ( max-width: 768px) {
                    .container__profile{
                        flex-direction: column;
                    }
                    .container__profile__hero{
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
                        border-radius: 10px;
                       box-shadow: 0px 0px 50px #eaeaea;
                    }
                    .card__header{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 30%;
                        
                    }
                    .card__body{
                        width: 100%;
                        height: 30%;
                        padding: 0 50px;
                    }
                    .card__footer{
                        width: 100%;
                        height: 30%;
                        padding: 0 50px;
                    }

                    
                }
            `}
            </style>
            <style jsx global>
                {`
                `}
            </style>
        </Layout>
    )
}
export default Github
