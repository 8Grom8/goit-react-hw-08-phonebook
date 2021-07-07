import React from 'react'

const styles = {
    container: {
        minHeight: "calc(100vh -50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "600",
        fontSize: "50",
        textAlign: "center",
    },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Greeting page of my service
      <span role="img" aria-label="Greeting Icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;