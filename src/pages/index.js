import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

const indexPage = () => (
    <Layout>
        <h1>Hi everyone!!</h1>
        <h2>I'm Alimam M.A , a Full stack developer!</h2>
        <p>Need a developer? Contact me <Link to="/contact">Here</Link></p>
        <p>Find the about page here <Link to="/about">About</Link></p>
    </Layout>
)

export default indexPage
