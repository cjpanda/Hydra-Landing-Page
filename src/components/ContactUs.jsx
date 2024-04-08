const ContactUs = () => {
  return (
    <section className="max-width padding-x pt-10 pb-20" id="contactus">
      <div className="mx-auto items-center w-full flex flex-col gradient-circle p-10 rounded-[60px]">
        <h1 className="h1-style">Join Hydra</h1>
        <div className="line-contact" />
        <h2 className="text-2xl font-extralight text-center">
          Lets Build Your VR Experience{" "}
        </h2>
        <form className="form-field" action="submit">
          <div className="form-input-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className="form-input "
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-input-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="form-input"
            />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
              required
              className="form-input"
            />
          </div>
          <div className="subject-input">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="subject-field"
            />
          </div>
          <div className="textarea-input">
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell Us Something"
              required
              className="text-area"
            />
          </div>

          <button
            type="submit"
            className="button-gradient button-hover mx-auto uppercase"
          >
            send to hydra
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
