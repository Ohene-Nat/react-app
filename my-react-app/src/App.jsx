import Footer from "./footer";
import Header from "./header";
import Food from "./food";
import Card from "./card";
import Students from "./students";
import UserGreeting from "./UserGreeting";
function App() {
  return (
    <div>
      <Header />
      <UserGreeting isLoggedin={true} username="Nathan"/>
      <Food />
      <Card />
      <Card />
      <Card />
      <Students name="Alice" age={20} isStudent={true} />
      <Students name="Bob" age={25} isStudent={false} />
      <Students name="Charlie" age={30} isStudent={true} />
      <Students />
      <Footer />
    </div>
  );
}

export default App
