import React from 'react'
import Layout  from "../components/layout"
import {graphql} from "gatsby"
import Head from "../components/head"
import {documentToReactComponent, documentToReactComponents} from "@contentful/rich-text-react-renderer"

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
    body{
      json
    }

  }
}`

const Blog = (props) => {
  const {title, publishedDate} = props.data.contentfulBlogPost
  const options ={
    renderNode: {
    "embedded-asset-block": (node) =>{
      const alt = node.data.target .fields.title['en-US']
      const url= node.data.target .fields.file['en-US'].url
      return <img alt = {alt} src = {url}/>
    }}
  }
   return(
     <Layout>
     <Head title={props.data.contentfulBlogPost.title} />
     <h1>{title}</h1>
     <p>{publishedDate}</p>
     {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
     </Layout>
   )
   }

export default Blog