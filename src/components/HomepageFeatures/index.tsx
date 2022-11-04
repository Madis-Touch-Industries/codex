import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Ship Design",
    Svg: require("@site/static/img/space.svg").default,
    description: (
      <>
        We are dedicated ship builders that have been around since alpha and
        will probably be around till the end.
      </>
    ),
  },
  {
    title: "Market Domination",
    Svg: require("@site/static/img/astronaut.svg").default,
    description: <>We strive to use the markets as our play thing.</>,
  },
  {
    title: "Space Logistics",
    Svg: require("@site/static/img/stars.svg").default,
    description: <>Delivering parcels reliably and safely.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
