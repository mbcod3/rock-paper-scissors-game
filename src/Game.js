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
    maxWidth: "432px",
    background: `url(${triangle}) no-repeat center 75% `,
    position: 'relative',
    '@media (max-width:768px)': {
      maxWidth: '384px',
      backgroundPositionY: '120%'
    },
    '@media (max-width:507px)': {
      maxWidth: '300px',
      backgroundPositionY: '200%',
      backgroundSize: '250px 250px',
    }
  },
  advanceStyles: {
    background: `url(${pentagon}) no-repeat center 50%`,
    maxWidth: "480px",
    '@media (max-width:768px)': {
      maxWidth: '432px',
      backgroundPositionY: '40%'
    },
    '@media (max-width:507px)': {
      maxWidth: '327px',
      backgroundPositionY: '50%',
      backgroundSize: '220px 220px'
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
