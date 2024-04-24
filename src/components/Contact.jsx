function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        </div>
        <div>
        <input type="text" id="name" name="name" />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        </div>
        <div>
        <input type="email" id="email" name="email" />
        </div>
        <div>
        <label htmlFor="message">Message:</label>
        </div>
        <div>
        <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default contact;