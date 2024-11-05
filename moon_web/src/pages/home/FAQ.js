import React from "react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = [
    {
      question: "What is your mobile app development process?",
      answer:
        "We follow a structured process to ensure quality and efficiency...",
    },
    {
      question: "How long does it take to develop an app?",
      answer:
        "The time to develop an app depends on complexity, typically ranging from a few weeks to several months...",
    },
    {
      question: "How do you ensure the security of the apps you develop?",
      answer:
        "We implement industry-standard security practices to safeguard your app...",
    },
    {
      question: "Do you offer post-launch support and updates?",
      answer:
        "Yes, we provide ongoing support and updates to keep your app running smoothly...",
    },
    {
      question: "Can you develop apps for both iOS and Android platforms?",
      answer:
        "We also offer cross-platform solutions to ensure that your apps reach more users on multiple devices.",
    },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {faqItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#2b3e50",
              color: "#ffffff",
              padding: "15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => toggleOpen(index)}
          >
            <h3 style={{ margin: 0, fontSize: "1.1em", lineHeight: "1.4" }}>
              {item.question}
            </h3>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              {openIndex === index ? "×" : "+"}
            </button>
          </div>
          {openIndex === index && (
            <div
              style={{
                backgroundColor: "#4a6fa1",
                color: "#ffffff",
                padding: "15px",
                borderRadius: "5px",
                marginTop: "5px",
                transition: "max-height 0.3s ease",
                overflow: "hidden",
              }}
            >
              <p style={{ margin: 0, fontSize: "1em", lineHeight: "1.5" }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
