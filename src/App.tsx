import "@/assets/styles/app.css";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import Main from "./components/main/Main";
import SkeletonLoader from "./pages/SkeletonLoader";
import { IFollowingDatas, IUserDatas, User } from "@/types/userDatas";
import { useState, useEffect } from "react";
import { PersonContext } from "./context/personContext";
import GithubService from "./utils/githubService";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [userDatas, setUserDatas] = useState<IUserDatas | null>(null);
  const service = new GithubService();

  const [followingUsers, setFollowingUsers] = useState<
    IFollowingDatas[] | null
  >(null);

  const user: User = {
    userDatas,
    followingUsers
  };

  useEffect(() => {
    service.getUserData("furkancan05", setUserDatas);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <PersonContext.Provider value={user}>
      <div className="container">
        <Header />
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <Details />
            <Main />
          </>
        )}
      </div>
    </PersonContext.Provider>
  );
}
