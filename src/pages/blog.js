import React from "react"
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
    /* Old query using markdonw Remark */
    /*const data = useStaticQuery(graphql`query{allMarkdownRemark{edges{ node{frontmatter{title
            date}  fields{slug }}}} } `)*/
    const data = useStaticQuery(graphql`query{
        allContentfulBlogPost(sort:{fields: publishedDate, order: DESC}){
            edges{
                node{
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
     } 
                `)
                              
   return(
    <Layout>
    <h1>Blog</h1>
    <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i)=> {
            return(
                <li key={i} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                    <h2>{edge.node.title} </h2>
                    
                    <p>{edge.node.publishedDate}</p>
                </Link>
                </li>
                
            )})
        }
    </ol>
    </Layout>
    )
}

export default BlogPage