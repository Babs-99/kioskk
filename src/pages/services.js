import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import HeaderNavigator from "../components/HeaderNavigator";
import CardComponent from "../components/CardComponent";

const OtherService = () => {
  const [isBrowser, setBrowser] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.process === "object" &&
      window.process.type === "renderer"
    ) {
      setBrowser(true);
    }
  }, []);
  return (
    <Layout page={"Services Page"}>
      {isBrowser && (
        <header>
          <HeaderNavigator title="Welcome" />
        </header>
      )}
      <main id="main">
        <div className="services">
          <div className="logo">
            <img src="./asset/img/logo.png" alt="econnect logo" />
          </div>
          <div className="service-wrapper">
            <div className="service-list">
              <CardComponent img="./asset/img/the-go.png" desc="On the go" />
              <CardComponent
                img="./asset/img/boarding-pass.png"
                desc="Print boarding pass"
              />
            </div>
            <div className="service-list mt-5">
              <CardComponent
                img="./asset/img/services.png"
                desc="other services"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default OtherService;
