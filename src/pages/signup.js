import Head from 'next/head'
import Layout from "components/Layout/Layout.js"
import Link from "next/link";


export default function Signup() {
    return (
      <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
       
  
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Ready to 
            <a className="text-blue-600" href="https://moodmap.app">
              Join the leafs in the wind
            </a>
          </h1>
  
          <p className="mt-3 text-2xl">
            Join our waiting list!
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
  Signup now       </code>
          </p>
  
         
        </main>
  </div>
        </Layout>
    )
  }
  