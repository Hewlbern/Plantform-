import React, { useState } from 'react'
import Link from "next/link";
import Footer from "components/Layout/Footer";

import Hero from "components/Content/Hero"


import Layout from "components/Layout/Layout.js";

export default function Home() {

  return (
   

    <Layout title = "Greenr Space">
    <Hero testingphase="A better way to enjoy sharing your plants" 
    image = "/static/example_photos/silveryanne.JPG" 
    subtitle="Plants are love. Plants are life."/>
          <Footer/>
    </Layout>
   

  );
}
