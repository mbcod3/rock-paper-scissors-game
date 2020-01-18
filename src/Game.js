import React from "react";
import { makeStyles } from "@material-ui/core";
import Weapon from "./Weapon";
import triangle from "./images/bg-triangle.svg";
import pentagon from "./images/bg-pentagon.svg";
import ToggleType from "./ToggleType";
import clsx from "clsx";
import GameNextSteps from "./GameNextSteps";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
  },
  gameContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "4rem auto 1rem"
  },
  basicStyles: {
    maxWidth: "27rem",
    background: `url(${triangle}) no-repeat center 75% `,
    '@media (max-width:768px)': {
      maxWidth: '24rem',
      backgroundPositionY: '120%'
    }
  },
  advanceStyles: {
    background: `url(${pentagon}) no-repeat center 50%`,
    maxWidth: "30rem",
    '@media (max-width:768px)': {
      maxWidth: '27rem',
      backgroundPositionY: '40%'
    }
  },
});

export default function Game(props) {
  const {
    gameType,
    setGameType,
    setScore,
    weaponsList,
    handleClickWeapon,
    clickedWeapon,
    showingResults,
    houseWeapon,
    playAgain,
    won
  } = props;

  const classes = useStyles(gameType);

  return (
    <div className={classes.root}>
      {!showingResults && (
        <div>
          <ToggleType gameType={gameType} setGameType={setGameType} />
          <div
            className={clsx(
              classes.gameContainer,
              gameType === 3 && classes.basicStyles,
              gameType === 5 && classes.advanceStyles
            )}
          >
            {weaponsList[0].map((weapon, i) => (
              <Weapon
                variant={weapon.variant}
                borderColors={weapon.borderColors}
                img={weapon.img}
                key={i + Math.random()}
                gameType={gameType}
                clickHandler={handleClickWeapon}
              />
            ))}
            {gameType === 5 &&
              weaponsList[1].map((weapon, i) => (
                <Weapon
                  variant={weapon.variant}
                  borderColors={weapon.borderColors}
                  img={weapon.img}
                  key={i + Math.random()}
                  gameType={gameType}
                  clickHandler={handleClickWeapon}
                />
              ))}
          </div>
        </div>
      )}
      {showingResults && (
        <GameNextSteps
          {...clickedWeapon}
          showingResults={showingResults}
          gameType={gameType}
          playAgain={playAgain}
          setScore={setScore}
          houseWeapon={houseWeapon}
          won={won}
        />
      )}
    </div>
  );
}
