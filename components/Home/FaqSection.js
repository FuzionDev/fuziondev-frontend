import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import useFetch from ".././hooks/useFetch";

const FaqSection = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faqs?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="faq-area white-bg ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img">
              <img src="/images/faq-img.png" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-accordion">
              <div className="faq-title">
                <h2>Frequently Asked Questions</h2>
                <span>Just Find Your Answers Below</span>
              </div>

              <Accordion allowZeroExpanded preExpanded={[data[0].id]}>
                {data?.map((singleData) => (
                  <AccordionItem uuid={singleData.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {singleData.attributes.Question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{singleData.attributes.Answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-right-shape shape-three">
        <img src="/images/faq-right-shape.png" alt="Image" />
      </div>
    </div>
  );
};

export default FaqSection;
