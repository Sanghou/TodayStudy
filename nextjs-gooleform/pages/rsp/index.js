import React, { useState, useEffect } from "react";

const TestPage = () => {
  const [gameCount, setGameCount] = useState(0);
  const [gameStart, setGameStart] = useState(0);
  const [score, setScore] = useState([]);
  const [computer, setComputer] = useState("");
  const [user, setUser] = useState("");
  const [timer, setTimer] = useState(0);

  const rsp = ["rock", "scissor", "paper"];
  const isLoseCondition = (computer, user) => {
    return (
      (computer === "rock" && user === "scissor") ||
      (computer === "scissor" && user === "paper") ||
      (computer === "paper" && user === "rock") ||
      !user
    );
  };

  const compareScore = (computer, user) => {
    if (computer === user) {
      setScore([...score, "tie"]);
    } else if (isLoseCondition(computer, user)) {
      setScore([...score, "loose"]);
    } else {
      setScore([...score, "win"]);
    }
  };

  useEffect(() => {
    if (!gameStart) {
      return null;
    }
    const t = setInterval(
      () => setTimer((timer) => (!timer ? 3 : timer - 1)),
      1000
    );
    return () => clearInterval(t);
  }, [gameStart]);

  useEffect(() => {
    console.log("update timer", timer);
    if (timer === 0) {
      compareScore(computer, user);
    }

    if (timer === 3) {
      setComputer(rsp[Math.floor(Math.random() * 3)]);
      setUser("");
    }
  }, [timer]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="number"
        value={gameCount}
        onChange={(e) => setGameCount(e.target.value)}
      />
      <button onClick={() => setGameStart(gameCount)}> 게임 시작</button>
      <div className="timer">남은 시간 : {timer}</div>
      <div className="score">최근 전적 : {score[score.length - 1]}</div>

      <div
        className="values"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div className="computer" style={{ margin: `10px` }}>
          <h2>Computer</h2>
          <p>{computer}</p>
        </div>
        <div className="user" style={{ margin: `10px` }}>
          <h2>User</h2>
          <p>{user}</p>
        </div>
      </div>
      <div>
        <h2>Choice one</h2>
        {rsp.map((choice) => {
          return (
            <button
              key={choice}
              onClick={(e) => setUser(e.target.value)}
              value={choice}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TestPage;
