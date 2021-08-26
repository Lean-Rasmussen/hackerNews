import React from "react";

import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Link from "next/link";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>Hack Stories</title>
      </Head>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/" passHref={true}>
            <p className={styles.navigation__element}>Home</p>
          </Link>
          <Link href="/stories" passHref={true}>
            <p className={styles.navigation__element}>Stories</p>
          </Link>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
