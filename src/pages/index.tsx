import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const HOMEPAGE_CARDS: {
  title: string;
  description: JSX.Element;
  linkLabel: string;
  link: string;
}[] = [
  {
    title: "Documentation",
    description: (
      <>Learn about the key features of Cash Compass and how to use them.</>
    ),
    linkLabel: "Get Started",
    link: "/docs/app/welcome",
  },
  {
    title: "Releases",
    description: <>View the latest release notes for Cash Compass.</>,
    linkLabel: "View Releases",
    link: "/docs/releases",
  },
  {
    title: "Blog",
    description: (
      <>Read the latest news and updates from the Cash Compass team.</>
    ),
    linkLabel: "Read the Blog",
    link: "/blog",
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to the Cash Compass docs!</h1>
          <p className="hero__subtitle">
            If you're new to Cash Compass, or just want to learn more, you're in
            the right place.
          </p>
          <div className={styles.cards}>
            {HOMEPAGE_CARDS.map((card) => (
              <div className={styles.card} key={card.title}>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <Link
                  className="button button--secondary button--lg"
                  to={card.link}
                >
                  {card.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>
    </Layout>
  );
}
