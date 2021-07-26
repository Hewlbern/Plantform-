import React, { useEffect } from "react";
import AuthSection from "components/Authentication/AuthSectionOld";
import Layout from "components/Layout/Layout";

import { useRouter } from "next/router";
// import { useAuth } from "util/auth";

function AuthPage(props) {
  const router = useRouter();
  // const { user } = useAuth();

  // useEffect(() => {
  //   if (user !== null && user !== false) {
  //     if (router.asPath === "/auth/signin") {
  //       console.log("Redirecting to Dashboard..");
  //       router.push("/dashboard/Home");
  //     }
  //   }
  // }, [user]);

  return (
    <Layout title="Account">
      <AuthSection
        bg="green"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        inputSize="lg"
        type={router.query.type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath={router.query.next || "/dashboard/Home"}
      />
    </Layout>
  );
}

// Tell Next.js to export static files for each auth page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: "signin" } },
    { params: { type: "signup" } },
    { params: { type: "forgotpass" } },
    { params: { type: "changepass" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthPage;
