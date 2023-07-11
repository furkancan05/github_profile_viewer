import styles from "./details.module.css";
import { detailItems } from "@/config/detailItems.config";
import { PersonContext } from "@/context/personContext";
import { useContext } from "react";

export default function Details() {
  const { userDatas } = useContext(PersonContext);
  interface IDatas {
    repositories: number;
    followers: number;
    following: number;
    gists: number;
  }

  if (userDatas === null) return null;

  const datas: IDatas = {
    repositories: userDatas.public_repos,
    followers: userDatas.followers,
    following: userDatas.following,
    gists: userDatas.public_gists
  };

  return (
    <div className={styles.container}>
      {Object.entries(datas).map(([key, value], i) => {
        return (
          <div className={styles.card} key={i}>
            <div
              className={styles.icon}
              style={{ backgroundColor: detailItems[i].color }}
            >
              {detailItems[i].icon}
            </div>
            <div className={styles.texts}>
              <p className={styles.value}>{value as number}</p>
              <a
                href={`https://github.com/${userDatas.login}?tab=${key}`}
                className={styles.name}
                target="_blank"
                rel="norefeerer noopenner"
              >
                {key as string}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
