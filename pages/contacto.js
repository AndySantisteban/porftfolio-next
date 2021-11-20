import Layout from '../components/Layout'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
};

const Contacto = () => {
  const [state, handleSubmit] = useForm('xqkwgkzk')
  const [success, setSuccess] = useState(false  )

  function closeModal() {
    setSuccess(!success)
  }
  function openModal() {
    if (state.succeeded) {
      return  setSuccess(!success)
    }
  }

  return (
    <Layout>
      <div className="box">
        <p className={"tittle"}>Contact me, you won't regret it</p>
        <div className="container">
          <form name="contact" method="POST" onSubmit={handleSubmit}>
            <div className="container__email">
              <label htmlFor="email" className="container__email__label">
                Email:
              </label>
              <input
                  id="email"
                  type="email"
                  name="email"
                  className="container__email__input"
                  placeholder="example@domain.com"
                  required={true}
              />
              <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
              />
            </div>
            <div className="">
              <label htmlFor="email" className="container__email__label">
                Message:
              </label>
              <textarea
                  className="container__email__input"
                  id="message"
                  name="message"
                  rows="10"
                  required={true}
              />
              <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
              />
            </div>
            <div className="container-btn">
              <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state.submitting}
                  onClick={openModal}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <p className={"subtitle"}>You can also contact me from:</p>
        <div className="container__networks">
          <a href="https://www.facebook.com/AndySantisteban1607/" className="container__networks__item" target="_blank">
            <img src="https://img.icons8.com/color/40/000000/facebook.png" alt={"..."}/>
          </a>
          <a href="https://wa.link/5ayf76" className="container__networks__item" target="_blank">
            <img src="https://img.icons8.com/office/40/000000/whatsapp--v1.png"  alt={"..."}/>
          </a>
          <a href="https://www.linkedin.com/in/andy-santisteban/" className="container__networks__item" target="_blank">
            <img src="https://img.icons8.com/fluency/40/000000/linkedin.png"   alt={"..."}/>
          </a>
        </div>
      </div>
      <Modal
          isOpen={success}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
        <div>
          <h2>Thank you for your message!</h2>
          <p>I will get back to you as soon as possible.</p>
          <button onClick={closeModal}>Close</button>
        </div>

      </Modal>
      <style jsx>
        {`  
          .tittle{
            text-align: center;
            font-weight: bold;
            margin-bottom: 30px;
          }
          .subtitle{
            text-align: center;
            margin-bottom: 15px;
          }
          .box {
            margin: 0 auto;
            width: 100%;
            max-width: 800px;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
          }
          .container{
          width: 100%;
          }
          .container__email{
          width: 100%;
          }
          .container__email__label{
          width: 100%;
          }
          .container__email__input{
          padding: 10px;
          width: 100%;
          margin: 10px 0;
          border:none;
          border-bottom: 1px solid #ccc;
          resize: none;
          }
          .container-btn{
          width: 100%;
          display: flex;
          justify-content: center;
          }
          .container__networks{
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 10px 0;
          }
          .container__networks__item{
          margin: 0 10px;
          }
          .btn:active{
          background: #ccc;
          
          }
        `}

      </style>
    </Layout>
  )
}
export default Contacto
