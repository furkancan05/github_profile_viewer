import styles from "./main.module.css";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import { PersonContext } from "@/context/personContext";
import { useContext } from "react";

export default function Main() {
  const { userDatas: datas, followingUsers } = useContext(PersonContext);
  if (datas === null) return null;
  return (
    <main className={styles.main}>
      <div className={styles.userDatas}>
        <div className={styles.userMainDatas}>
          <div className={styles.profilePhoto}>
            <img
              src={datas.avatar_url}
              alt="profilePhoto"
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.userTexts}>
            <p className={`${styles.nameText} ${styles.text}`}>{datas.name}</p>
            {datas.twitter_username ? (
              <a
                href={`https://twitter.com/${datas.twitter_username}`}
                className={`${styles.usernameText} ${styles.text}`}
                target="_blank"
                rel="norefeerer noopenner"
              >
                {datas.twitter_username}
              </a>
            ) : (
              <span className={styles.noContentText}>No twitter</span>
            )}
          </div>
          <a
            href={datas.html_url}
            className={styles.followButton}
            target="_blank"
            rel="norefeerer noopenner"
          >
            Follow
          </a>
        </div>
        <div className={styles.userDescription}>
          <p className={`${styles.content} ${styles.text}`}>{datas.bio}</p>
          <div>
            <FaLocationDot className={styles.icons} />
            {datas.location ? (
              <span className={`${styles.location} ${styles.text}`}>
                {datas.location}
              </span>
            ) : (
              <span className={styles.noContentText}>No location</span>
            )}
          </div>
          <div>
            <FaLink className={styles.icons} />
            {datas.blog ? (
              <a
                href={
                  datas.blog.startsWith("http")
                    ? datas.blog
                    : `https://${datas.blog}`
                }
                target="_blank"
                rel="norefeerer noopenner"
                className={`${styles.link} ${styles.text}`}
              >
                {datas.blog}
              </a>
            ) : (
              <span className={styles.noContentText}>No blog</span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.followingUsers}>
        {/* {followingUsers.map(({ profilePhoto, username, githubPage }, i) => {
          return (
            <div className={styles.fcard} key={i}>
              <div className={styles.fprofilePhoto}></div>
              <p className={styles.fusername}>{username}</p>
              <button type="button" className={styles.fviewButton}>
                VIEW
              </button>
            </div>
          );
        })} */}
      </div>
      <div className={styles.pageButtons}>
        <button type="button" className={styles.pageButton}>
          {1}
        </button>
        <button
          type="button"
          className={`${styles.pageButton} ${styles.activePageButton}`}
        >
          {2}
        </button>
        <button type="button" className={styles.pageButton}>
          {3}
        </button>
        <button type="button" className={styles.pageButton}>
          {4}
        </button>
        <button type="button" className={styles.pageButton}>
          {5}
        </button>
      </div>
    </main>
  );
}
