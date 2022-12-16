import { v4 as uuidv4 } from "uuid";

const dummyData = [{
  id: uuidv4(),
  title: "Todo ASAP",
  tasks: [
    {
      id: uuidv4(),
      title: "Studying React"
    },
    {
      id: uuidv4(),
      title: "Go study at a cafe"
    },
    {
      id: uuidv4(),
      title: "Send resume"
    }
  ]
},
{
  id: uuidv4(),
  title: "Todo Soon",
  tasks: [
    {
      id: uuidv4(),
      title: "Studying Javascript"
    },
    {
      id: uuidv4(),
      title: "Go study at a cafe"
    },
    {
      id: uuidv4(),
      title: "Send resume"
    }
  ]
},
{
  id: uuidv4(),
  title: "Todo Later",
  tasks: [
    {
      id: uuidv4(),
      title: "Studying CSS"
    },
    {
      id: uuidv4(),
      title: "Go study at a cafe"
    },
    {
      id: uuidv4(),
      title: "Send resume"
    }
  ]
}
];

export default dummyData;
