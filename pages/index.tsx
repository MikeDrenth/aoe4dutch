import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import internal from "stream";
import List from "../components/List";
import styles from "../styles/Home.module.css";
import { Player } from "../components/model";
import { useState, useEffect } from "react";
import { clear } from "console";

const PlayerInfo: Player[] = [
  {
    name: "Liquid.DeMuslim",
    rank: 1,
    rating: 2069,
    winRate: "83.5%",
    games: 212,
    lastGame: "1 Day ago",
  },
  {
    name: "BeastyQT",
    rank: 2,
    rating: 2030,
    winRate: "91.3%",
    games: 136,
    lastGame: "1 Day ago",
  },
  {
    name: "GL.TheViper",
    rank: 3,
    rating: 1794,
    winRate: "77.1%",
    games: 249,
    lastGame: "9 Hours ago",
  },
];

console.log(PlayerInfo);

const Home: NextPage = () => {
  const [searchPlayer, setSearchPlayer] = useState("");

  const onInputChange = (event: any) => {
    setSearchPlayer(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Age Of Empires IV</h1>
        <div className="top-list p-5 rounded-md bg-gray-50">
          <h2>Leaderboard</h2>
          <ul className="grid grid-cols-6">
            <li>#</li>
            <li>Player</li>
            <li>Ranking</li>
            <li>Win %</li>
            <li>Games</li>
            <li>Last game</li>
          </ul>
          <List playerInfo={PlayerInfo} />
          <input
            onChange={onInputChange}
            type="text"
            value={searchPlayer}
            placeholder="Search for player"
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
