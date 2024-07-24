import React, { useState } from "react";

const GoogleForms = () => {
  const [showForm, setShowForm] = useState(false);
  const formName = "Feedback Form"; // Replace with the actual name of your form

  const openGoogleForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h2>Google Forms</h2>
      {!showForm ? (
        <button onClick={openGoogleForm}>Open {formName}</button>
      ) : (
        <div>
          <button onClick={() => setShowForm(false)}>Close Form</button>
          {/* Embed the Google Form */}
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfAUDVkGbgyS8ea97nf5Pubx1AdoYYeBDbsz91C8qdigwp6gg/viewform?embedded=true"
            width="640"
            height="1551"
            frameBorder="0"
          >
            Loading...
          </iframe>
        </div>
      )}
    </div>
  );
};

export default GoogleForms;
