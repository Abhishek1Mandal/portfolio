const Contact = () => {
  const handleSendEmail = () => {
    const subject = "Subject of your email";
    const body = "Message content goes here";
    const recipient = "abhisheksinghmandal@gmail.com"; // Replace with the recipient's email address

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <section id="contact" className="bg-gray-300 pb-16">
        <div className="container">
          <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
            Get in touch
          </h2>

          <div className="md:flex justify-between items-center">
            <div className="w-full md:w-1/2 h-300px sm:h-[450px]">
              <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243480.10411949045!2d78.40654642627248!3d17.537246397442562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb84ad48255d29%3A0x410841a999b3433!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1694087346199!5m2!1sen!2sin"
                className="border-0 w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
              <form className="w-full">
                {/* <div className="mb-5">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                  ></input>
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Enter your email"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                  ></input>
                </div> */}
                {/* <div className="mb-5">
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Write Your Message"
                    className="w-full p-3 rounded-[5px]"
                  ></textarea>
                </div> */}

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full p-3 bg-gray-600 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
