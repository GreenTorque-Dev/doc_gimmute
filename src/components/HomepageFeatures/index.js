import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Swift Recovery at 20x Speed',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Leveraging the G-Immute disk-cache Landing Zone, recent backups are stored
        for ultra-fast VM boots and restores — up to 20x faster than traditional
        solutions.
      </>
    ),
  },
  {
    title: 'Resilience with Retention Time-Lock',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Tiered backup with delayed deletes and immutable deduplicated objects
        delivers strong ransomware protection and ensures data integrity with
        rapid recovery.
      </>
    ),
  },
  {
    title: 'Tiered Backup Storage Architecture',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Combines a high-speed disk-cache landing zone, long-term retention
        repository, and scale-out design for reliable, future-ready backup
        storage.
      </>
    ),
  },
  {
    title: 'Ransomware-Ready Protection',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Defends backups with immutable storage, ensuring recovery even when
        primary systems are compromised.
      </>
    ),
  },
  {
    title: 'Instant VM Boot from Backup',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Boot virtual machines directly from G-Immute backup storage to minimize
        downtime and ensure business continuity.
      </>
    ),
  },
  {
    title: 'Exceptional Customer Support',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Every customer gets a dedicated Level-2 support engineer, proactive
        health monitoring, and inclusive upgrades for maximum reliability.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>

        <div className={styles.iconWrap}>
          <Svg className={styles.featureSvg} role="img" />
        </div>

        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
