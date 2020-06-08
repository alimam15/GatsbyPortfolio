import React from "react"
import {Link} from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"

const indexPage = () => {
    return(
    <Layout>
        <Head title="home" />
        <h2>Hi everyone!!</h2>
        <h3>I'm Alimam M.A , a Full stack developer!</h3>
        <p>Need a developer? Contact me <Link to="/contact">Here</Link></p>
        <p>Find the about page here <Link to="/about">About</Link></p>
    </Layout>
)}




export default indexPage
