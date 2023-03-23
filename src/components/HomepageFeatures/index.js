import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comunicação',
    Svg: require('@site/static/img/message.svg').default,
    description: (
      <>
        Introdução às redes de computadores, sockets, protocolos, pilhas
        de protocolos.
      </>
    ),
  },
  {
    title: 'Segurança',
    Svg: require('@site/static/img/key.svg').default,
    description: (
      <>
        Introdução à segurança, algoritmos de criptografia, 
        criptografia simétrica, assimétrica e assinatura digital.
      </>
    ),
  },
  {
    title: 'Cloud e Docker',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Virtualização, computação em nuvem, Docker, imagens e containers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
