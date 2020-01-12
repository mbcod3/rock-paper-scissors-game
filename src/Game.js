import React from "react";
import { makeStyles } from "@material-ui/core";
import Weapon from "./Weapon";
import triangle from "./images/bg-triangle.svg";
import paper from "./images/icon-paper.svg";
import scissor from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import lizard from "./images/icon-lizard.svg";
import spock from "./images/icon-spock.svg";

const useStyles = makeStyles({
  root: {
    background: `url(${triangle}) no-repeat center 80% `,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "25rem",
    margin: "4rem auto 1rem",
  },
});

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

const advancedGame = [
  {
    variant: "lizard",
    borderColors: ["hsl(261, 72%, 63%)", "hsl(261, 73%, 60%)"],
    img: { lizard },
  },
  {
    variant: "spock",
    borderColors: ["hsl(189, 58%, 57%)", "hsl(189, 59%, 53%)"],
    img: { spock },
  },
];

export default function Game(props) {
  const classes = useStyles();
  const { type } = props;
  return (
    <div className={classes.root}>
      {basicGame.map((weapon, i) => (
        <Weapon
          variant={weapon.variant}
          borderColors={weapon.borderColors}
          img={weapon.img}
          key={i + Math.random()}
        />
      ))}
      {type === 5 &&
        advancedGame.map((weapon, i) => (
          <Weapon
            variant={weapon.variant}
            borderColors={weapon.borderColors}
            img={weapon.img}
            key={i + Math.random()}
          />
        ))}
    </div>
  );
}
