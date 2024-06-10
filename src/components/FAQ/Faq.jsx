import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What does MCube Designs do?",
      answer: "We offer comprehensive services related to architecture and interior design, including project management, renovations, and custom builds."
    },
    {
      question: "Where is your design studio located?",
      answer: "Our design studio is located in Kazhakoottom, Trivandrum, Kerala, India."
    },
    {
      question: "Do you have branches elsewhere?",
      answer: "No, our main office is based in Kazhakoottom, Trivandrum."
    },
    {
      question: "Are you registered architects?",
      answer: "Yes, our team consists of registered architects with the Council of Architecture (COA) and members of the Indian Institute of Architects (IIA)."
    },
    {
      question: "Since when have you been practicing?",
      answer: "We have been in practice since 2005, with our principal architects having individual experience dating back to the early 2000s."
    },
    {
      question: "What style of architecture do you practice?",
      answer: "Our designs are primarily contemporary, focusing on modern aesthetics and functional spaces."
    },
    {
      question: "Do you practice Traditional Kerala Architecture?",
      answer: "No, our focus is on contemporary architecture. While we respect traditional styles, our designs are modern and innovative."
    },
    {
      question: "Do we have to travel to your design studio to meet you?",
      answer: "Ideally, yes. Visiting our studio helps you understand our working environment and design process."
    },
    {
      question: "Can we see any of your built works?",
      answer: "We can provide documentation of our completed projects through photographs and videos. Site visits to ongoing projects can also be arranged."
    },
    {
      question: "Do we need to take an appointment to meet you?",
      answer: "Yes, appointments are necessary to ensure availability and dedicated time for discussions."
    },
    {
      question: "What time is best to reach you over the phone?",
      answer: "You can reach us between 10:30 AM and 5:30 PM on weekdays."
    },
    {
      question: "When do we have the first meeting?",
      answer: "Once you're comfortable with our approach, we can schedule an initial meeting in our studio."
    },
    {
      question: "What documents should we bring when we come to meet you?",
      answer: "Please bring the village sketch of the site, detailed project requirements, and any site photographs or videos."
    },
    {
      question: "When do you visit the site?",
      answer: "Site visits are scheduled after the initial studio meeting."
    },
    {
      question: "Do we have to pay you for the first site visit?",
      answer: "Yes, a nominal fee plus travel expenses apply for site visits outside the city limits."
    },
    {
      question: "What services do you offer? What are your fees?",
      answer: "We provide a detailed services and fee statement upon request."
    },
    {
      question: "When/how do we get the ‘services and fee statement’ from you?",
      answer: "This is provided after an initial detailed discussion about the project."
    },
    {
      question: "Do we have to pay you an advance before starting the project?",
      answer: "Yes, an advance payment is required to commence the project."
    },
    {
      question: "If we are comfortable with each other’s ideas, what are the details required before designing our project?",
      answer: "We need site survey sketches, digital survey data in CAD format, land deed documents, tax receipts, and detailed project requirements."
    },
    {
      question: "When would you start designing our project?",
      answer: "Projects are taken up based on a scheduled waiting list. Contact us for the current waiting period."
    },
    {
      question: "How does the whole process of designing happen?",
      answer: "The process includes initial discussions, site visits, client requirement sessions, concept development, and detailed design meetings."
    },
    {
      question: "Who would design our project?",
      answer: "Our lead architects collaborate on every project, with one of them handling the project post the design phase."
    },
    {
      question: "Do you give us several options of designs to choose from?",
      answer: "No, we present the best design after thorough consideration of client requirements."
    },
    {
      question: "Do you take up Construction of your designs?",
      answer: "No, we do not handle the construction directly."
    },
    {
      question: "Do you supervise your projects?",
      answer: "We offer supervision visits at various stages but do not engage in full-time project management."
    },
    {
      question: "Do you handle Renovation / Extension / Conservation projects?",
      answer: "Currently, we are focused on new designs and do not take up renovation or extension projects."
    },
    {
      question: "If we already have a plan ready from some other source, would you detail/ design the rest of such a project?",
      answer: "No, we prefer starting projects from scratch to ensure the best outcome."
    },
    {
      question: "Do you do Elevations alone?",
      answer: "No, we believe in holistic project design rather than isolated elevation designs."
    },
    {
      question: "Do you design considering Vastu?",
      answer: "No, we prioritize functional design and modern aesthetics over traditional Vastu principles."
    },
    {
      question: "How can we contact you?",
      answer: "You can reach us by phone at +91 9061493673 or email at info@mcubedesigns.com."
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Frequently Asked Questions</h1>
      </header>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <h2 style={styles.question}>{faq.question}</h2>
            <p style={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 MCube Designs. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  faqList: {
    marginBottom: '30px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  answer: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '10px',
    borderTop: '1px solid #ccc',
  },
};

export default FAQ;
