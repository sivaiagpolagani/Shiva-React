import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1>This is a About page</h1>
      <UserClass name={"Sam"} location={"Australia"} contact={"ABCD@gmail.com"} />
    </div>
  );
};

export default About;