import React from "react";

import Head from "next/head";
import styles from "../styles/Layout.module.scss";

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
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
