import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h4>Which technologies did you use?</h4>
        <p>
          React, Redux, SQL, Node, Express, and GIMP. GIMP is a free image
          manipulation program where you can edit images, draw free-form, and
          transcode between different image file formats.
        </p>

        <h4>What was the toughest challenge you overcame?</h4>
        <p>
          The toughest challenge I overcame was implementing a stored date that
          ensures three new random exercises are received every day.
        </p>

        <h4>What is the one next thing you are excited to tackle?</h4>
        <p>
          The next challenge I'm excited to tackle is implementing leaderboards
          to see other users' progress!
        </p>
        <br />
        <h2>Thank you!</h2>
      </div>
    </div>
  );
}

export default AboutPage;
