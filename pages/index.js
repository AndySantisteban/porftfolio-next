import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => (
  <Layout>
    <div className="container pl-3 pt-5 m-auto">
      <div className="jumbotron">
        <h2 className="display-6">I'm Andy Santisteban. </h2>
        <h3 className="display-10">Web developer </h3>
        <h6 className="display-10 mt-3">
          There is no development without discipline.
        </h6>
        <h6 className="display-10">
          There is no discipline without intelligence
        </h6>
        <hr className="my-4"></hr>
        <Link href="/contacto">
          <button type="button" className="btn btn-dark">
            Contact me
          </button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Index
