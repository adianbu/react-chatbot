class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      return this.actionProvider.greet();
    }

    if (lowercase.includes("faq")) {
      return this.actionProvider.handleFaq();
    }

    if (lowercase.includes("book") || lowercase.includes("booking") || lowercase.includes("ticket")) {
      return this.actionProvider.handleBooking();
    }

    if (lowercase.includes("timings") || lowercase.includes("time")) {
      return this.actionProvider.handleTimings();
    }

    if (lowercase.includes("contact") || lowercase.includes("help")) {
      return this.actionProvider.handleContact();
    }

    return this.actionProvider.handleDefault();

  }
}

export default MessageParser;