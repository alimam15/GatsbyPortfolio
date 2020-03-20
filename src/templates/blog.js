import React from 'react'
import Layout  from "../components/layout"
import {graphql} from "gatsby"

// Old Query for Markdown purpose
/*export const query = graphql`query(
  $slug : String!){markdownRemark(fields:{slug:{eq: $slug }})
            {frontmatter{titledate}html}}`*/
//Old formatting
  //const {title, date} = props.data.markdownRemark.frontmatter
  /*return(
      <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
      </Layout>)*/

export const query = graphql`query($slug : String!){
  contentfulBlogPost(slug:{eq: $slug}){
    title
    publishedDate(formatString:"MMMM Do, YYYY")

  }
}`

const Blog = (props) => {
   return(
     <Layout>
     <h1>{props.data.contentfulBlogPost.title}</h1>
     <p>{props.data.contentfulBlogPost.publishedDate}</p>
     </Layout>
   )
   }

 


export default Blog