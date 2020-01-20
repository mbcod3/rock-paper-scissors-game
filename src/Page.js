import React from "react";
import Header from "./Header";
import Game from "./Game";
import { makeStyles } from "@material-ui/core/styles";
import Rules from "./Rules";
import winRules from "./winRules";
import basicGame from "./basicGameWeaponList";
import advancedGame from "./advancedGameWeaponList";

const useStyles = makeStyles({
  "@global": {
    html: {
      background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%)) no-repeat",
      overflowX: 'hidden'
    },
    body: {
      minHeight: '100vh',
      fontFamily: "Barlow Semi Condensed, sans serif",
      color: "white",
      letterSpacing: "1.5px",
      overflowX: 'hidden'
    },
    ".img-fluid": {
      maxWidth: "100%",
      height: "auto",
      alignSelf: "center",
    },
  },
  root: {
    padding: "1rem",
  },
});

export default function Page() {
  const [gameType, setGameType] = React.useState(3);
  const [score, setScore] = React.useState(0);
  const [won, setWon] = React.useState(0); //0 no win or draw, 1 = user win, -1 computer win
  const [clickedWeapon, setClickedWeapon] = React.useState(false);
  const [showingResults, setShowingResults] = React.useState(false);
  const [houseWeapon, setHouseWeapon] = React.useState({})

  const weaponsList = [basicGame, advancedGame];

  const handleClickWeapon = arg => {
    setShowingResults(true);
    const { variant, img, borderColors } = arg;
    setClickedWeapon({
      variant,
      img,
      borderColors,
    });
    console.log()
    
  };

  const playAgain = () => {
    setWon(0)
    setShowingResults(false);
  };

  React.useEffect(() => {
    if (!showingResults) {
      function getHouseWeapon () {
        const weapon = Math.floor(Math.random() * (gameType === 3 ? 3 : 5))
        setHouseWeapon([...basicGame, ...advancedGame][weapon])
      }
      getHouseWeapon()
    }
  },[gameType, showingResults])

  React.useEffect(() => {
    if (showingResults) {
      setTimeout(function() {
      setWon(
        winRules({
          gameType,
          userVariant: clickedWeapon.variant,
          houseVariant: houseWeapon.variant,
        })
      );
    }, 2100);
    }
  }, [showingResults, gameType, clickedWeapon, houseWeapon])

  React.useEffect(() => {
    if (won) {
      setTimeout(()=> {
        setScore(score + won)
      }, 500)
    }
  }, [won]);


  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Header gameType={gameType} score={score} />
      <Game
        gameType={gameType}
        setGameType={setGameType}
        weaponsList={weaponsList}
        clickedWeapon={clickedWeapon}
        handleClickWeapon={handleClickWeapon}
        showingResults={showingResults}
        houseWeapon={houseWeapon}
        playAgain={playAgain}
        won={won}
      />
      <Rules gameType={gameType} showingResults={showingResults} />
    </main>
  );
}
