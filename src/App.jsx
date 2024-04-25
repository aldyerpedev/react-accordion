import Accordion from "./components/Accordion";

const faqs = [
  {
    title: "HOW DO I FIGURE OUT WHAT TO LEARN?",
    text: "The most important thing is that you want to learn something that interests you, because once you start learning, you’ll be with this topic for a while. Choosing something just because it’s popular or what others are doing isn’t the way to go because if you don’t have a true interest in it, you’ll lose the motivation to learn! Spend some time seriously looking into the different tech career paths before choosing one to go down.",
  },
  {
    title: "WHICH PROGRAMMING LANGUAGE IS THE BEST TO LEARN?",
    text: "I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript. The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile apps. It has many use cases, which is why I think it’s smart to learn.",
  },
  {
    title: "IS IT POSSIBLE TO DO BOTH GRAPHIC DESIGN AND CODING?",
    text: "If you have an interest in coding and graphic design, then there’s nothing to say you shouldn’t learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both areas could be desirable for certain career paths. You could also think about pursuing something in between like UI design, which is a very in-demand career right now!",
  },
];

export default function App() {
  return (
    <div>
      <h1 className="main-title">ReactJS Accordion by Aldy Rizky Putra</h1>
      <div className="container">
        <Accordion data={faqs} />
      </div>
    </div>
  );
}
