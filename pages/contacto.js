import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react'

const Contacto = () => {
  const [state, handleSubmit] = useForm('xqkwgkzk')
  if (state.succeeded) {
    return <p>Thanks</p>
  }
  return (
    <Layout>

      <h1 className="text-center">Contact</h1>
      <div className="container p-2">
        <form name="contact" method="POST" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="example@domain.com"
              required={true}
              />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              required={true}
              />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary d-flex "
              disabled={state.submitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="container d-flex justify-content-center ">
        <a href="https://www.facebook.com/AndySantisteban1607/" className="m-3">
          <img src="https://img.icons8.com/metro/40/000000/facebook-new--v2.png" alt={"..."}/>
        </a>
        <a href="https://wa.link/5ayf76" className="m-3">
          <img src="https://img.icons8.com/pastel-glyph/40/000000/whatsapp--v2.png" alt={"..."} />
        </a>
        <a href="https://www.linkedin.com/in/andy-santisteban/" className="m-3">
          <img src="https://img.icons8.com/android/40/000000/linkedin.png" alt={"..."}/>
        </a>
      </div>
    </Layout>
  )
}
export default Contacto
