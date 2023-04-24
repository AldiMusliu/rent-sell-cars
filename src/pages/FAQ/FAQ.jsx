import faqs from '../../data/faqs'
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>If you can’t find what you’re looking for,{" "}
        <a href=".hdcdsh"> reach out to us</a>.
      </p>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq) => (
          <Accordion.Item  value={`item-${faq.key}`} eventKey={faq.key}>
            <Accordion.Header >{faq.question}</Accordion.Header>
            <Accordion.Body >{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;