
import paper from "./images/icon-paper.svg";
import scissor from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

const basicGame = [
  {
    variant: "paper",
    borderColors: ["hsl(230, 89%, 65%)", "hsl(230, 89%, 62%)"],
    img: { paper },
  },
  {
    variant: "scissor",
    borderColors: ["hsl(40, 84%, 53%)", "hsl(39, 89%, 49%)"],
    img: { scissor },
  },
  {
    variant: "rock",
    borderColors: ["hsl(349, 70%, 56%)", "hsl(349, 71%, 52%)"],
    img: { rock },
  },
];

export default basicGame