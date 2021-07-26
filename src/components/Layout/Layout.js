import Head from "next/head";
import Navbar from "components/Layout/Navbar"

const Layout = (props)=> (

  <div >
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name='Greenr' content='Share your exotic plant collection' />
      <meta name='Greenr' content='Your Personal Greenhouse' />

      <link rel='manifest' href='/manifest.json' />
      <link href='/favicon.ico' rel='icon' type='image/png' sizes='48x48' />
      <link rel='apple-touch-icon' href='/icons/appleicons/apple-icon-120.jpg'></link>
      <meta name='theme-color' content='#317EFB' />

      <meta name="description" content={props.description}></meta>
 
 +       <meta property="og:title" content={props.title} key="ogtitle" />
 +       <meta property="og:description" content={props.description} key="ogdesc" />
    </Head>
    
<Navbar/>
    <div>{props.children}</div>
   

 
  </div>
 
  
);

export default Layout;