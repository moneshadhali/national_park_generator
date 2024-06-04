const Home = ({ activities }) => {
  const activityList = activities.data?.map((activity, index) => {
    return <li key={index}>{activity.name}</li>;
  });

  return (
    <>
      <section className="welcome">
        <h1>Welcome to the Random National Park (US) Generator!</h1>
      </section>
      <section>
        <h2>About</h2>
        <p>
          Welcome to the wilderness at your fingertips! Our platform is designed
          to help you discover the perfect national park experience based on
          your preferred activities. Whether you're an avid hiker, a wildlife
          enthusiast, a photography buff, or simply seeking some tranquil
          moments in nature, we've got you covered.
        </p>
        <p>
          With a simple click, embark on a virtual journey through the diverse
          landscapes and natural wonders of the United States' national parks.
          Let serendipity guide you to your next outdoor adventure as you
          explore the myriad of activities available in these protected spaces.
        </p>
        <p>
          Get ready to be inspired, to connect with nature, and to create
          unforgettable memories. Let the Random National Park Generator be your
          gateway to exploration and discovery in the great outdoors!
        </p>
      </section>
      <section>
        <h2>Discover Your Perfect Park Experience</h2>

        <p>
          Looking for an exhilarating hike through rugged terrain, a peaceful
          spot for birdwatching, or a scenic backdrop for your next photography
          expedition? Our activity section allows you to tailor your national
          park exploration based on your interests.
        </p>
        <p>
          Discover your perfect national park adventure by exploring the
          activities listed in the following section.
        </p>
        <ul>{activities && activityList}</ul>
      </section>
    </>
  );
};

export default Home;
