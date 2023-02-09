// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

// const IndexPage = () => (
//   <Layout>
//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/example.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         Welcome to <b>Gatsby!</b>
//       </h1>
//       <p className={styles.intro}>
//         <b>Example pages:</b>{" "}
//         {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> · </>}
//           </React.Fragment>
//         ))}
//         <br />
//         Edit <code>src/pages/index.js</code> to update this page.
//       </p>
//     </div>
//     <ul className={styles.list}>
//       {links.map(link => (
//         <li key={link.url} className={styles.listItem}>
//           <a
//             className={styles.listItemLink}
//             href={`${link.url}${utmParameters}`}
//           >
//             {link.text} ↗
//           </a>
//           <p className={styles.listItemDescription}>{link.description}</p>
//         </li>
//       ))}
//     </ul>
//     {moreLinks.map((link, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> · </>}
//       </React.Fragment>
//     ))}
//   </Layout>
// )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


// export const Head = () => <Seo title="Home" />






import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";




import { Tabs, Tab} from 'react-bootstrap';

import GPAForm from './calculateGPAForm.js';
import useLocalStorage from 'react-localstorage-hook';
import SemesterTable from './semesterTable.js';




function App() {
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);



  return (
      <div className='wrapper' style={{width:'60%',margin:"50px auto"}}>
        <h1 style={{textAlign:'center', fontWeight:'400',fontFamily:'Ubuntu', color:'#6E00FF'}}>Semester Grading Tracker</h1>
       <div className="tab-wrapper">
      <div className='container-fluid '  >
        <div className="row">
          <div className="col-sm-12"style={{ boxShadow: "1px 1px 15px  #FF00C2", borderRadius:"10px"}}>
            
            <Tabs defaultActiveKey="grade" >
              
              <Tab  justify variant="tabs" eventKey="grade" title="Grading Section" >
                <div className="tab-item-wrapper">
                  <h5 style={{textAlign:'center', fontSize:'25px'}}>Grade Point Average</h5>
                  <GPAForm/>
                </div>
              </Tab>

              <Tab eventKey="courselist" title="Course Listing">
                <div className="tab-item-wrapper">
                  <h5 style={{textAlign:'center', fontSize:'25px'}}>Computer Science</h5>
                  <SemesterTable  data={dataItems} setDataItems={setDataItems}/>
                
                 
                </div>
              </Tab>

             
            </Tabs>

          </div>
        </div>
      </div>
      </div>
    </div>
  ); 
}

export default App;
