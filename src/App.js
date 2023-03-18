import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Brijesh Chauhan",
    location: "New Delhi, Hauz Khas",
    tagline: "I'm a Developer/Problem solver",
    email: "brijeshkme@gmail.com",
    availability: "Open for work/Problem Solving",
    brand:
      "My unique blend of technical expertise, creative thinking, and with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
