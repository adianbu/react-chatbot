import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Contact from "../components/Contact/Contact";
import Book from "../components/Book/Book";
import Timings from "../components/Timings/Timings";

const config = {
  botName: "HelpingBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "faq",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Do trains run on weekends?",
            answer:
              "Yes they do.",
            id: 1,
          },
          {
            question: "Do we get refund after booking",
            answer:
              "Half of the money will be refunded as per policies.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName:"book",
      widgetFunc: (props) => <Book/>,
    },
    {
      widgetName:"timings",
      widgetFunc: (props) => <Timings/>,
    },
    {
      widgetName:"contact",
      widgetFunc: (props) => <Contact/>,
    },
  ],
};

export default config;