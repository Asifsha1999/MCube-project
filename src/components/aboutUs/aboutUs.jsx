import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About Us</h1>
      </header>
      <section style={styles.section}>
        <h2>Our Company</h2>
        <p>
          At MCube Construction, we are committed to delivering top-quality construction services
          to our clients. With over 20 years of experience in the industry, we have established
          ourselves as a trusted name in residential and commercial construction.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to build lasting relationships with our clients by providing exceptional
          craftsmanship, innovative solutions, and unparalleled customer service. We strive to
          exceed our clients' expectations on every project, big or small.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Our Team</h2>
        <p>
          Our team of skilled professionals includes architects, engineers, project managers,
          and construction workers who are dedicated to achieving excellence. We believe in
          continuous improvement and invest in training and development to stay at the forefront
          of the industry.
        </p>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2024 MCube Designs. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: '1.6',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '30px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '10px',
    borderTop: '1px solid #ccc',
  },
};

export default AboutUs;