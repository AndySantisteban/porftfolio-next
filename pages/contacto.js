import Layout from '../components/Layout'

const Contacto = () => (
  <Layout>
    <h1 className="text-center">Contact</h1>
    <div className="container p-2">
      <form name="contact" method="POST" data-netlify="true">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="example@domain.com"
            required={true}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required={true}
          ></textarea>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary d-flex ">
            Send
          </button>
        </div>
      </form>
    </div>
    <div className="container d-flex justify-content-center ">
      <a href="https://www.facebook.com/andy.santisteban123" className="m-3">
        <img src="https://img.icons8.com/metro/40/000000/facebook-new--v2.png" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=51915935693&text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
        className="m-3"
      >
        <img src="https://img.icons8.com/pastel-glyph/40/000000/whatsapp--v2.png" />
      </a>
    </div>
  </Layout>
)
export default Contacto
