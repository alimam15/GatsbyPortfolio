import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Head from "../components/head"

const NotFound = ()=>(
    <Layout>
        <Head title="404" />
        <h1>Page 404</h1>
        <p>Page not found!</p>
        <p><Link to="/">Head Home!</Link></p>
    </Layout>
)

export default NotFound