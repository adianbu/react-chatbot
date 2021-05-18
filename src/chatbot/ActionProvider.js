class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {    
        widget: "options",     
    });

    this.addMessageToState(message)
  };

  handleFaq = () => {
    const message = this.createChatBotMessage(
      "These are the frequently asked questions:",
      {
        widget: "faq",
      }
    );

    this.addMessageToState(message);
  };

  handleBooking = () => {
    const message = this.createChatBotMessage(
      "Book tickets with ease with the help of our website",
      {
        widget: "book",
      }
    );

    this.addMessageToState(message);
  };

  handleTimings = () => {
    const message = this.createChatBotMessage(
      "Train timings:",
      {
        widget: "timings",
      }
    );

    this.addMessageToState(message);
  };

  handleContact=() =>{
    const message = this.createChatBotMessage(
      "Contact Us: ",
      {
        widget: "contact",
      }
    );

    this.addMessageToState(message);

  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;