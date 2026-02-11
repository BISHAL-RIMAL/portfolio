function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <button
        onClick={() => window.open("https://github.com/BISHAL-RIMAL")}
      >
        GitHub
      </button>
      <button
        onClick={() => window.open("https://www.facebook.com/")}
      >
        Facebook
      </button>
    </div>
  );
}

export default Contact;