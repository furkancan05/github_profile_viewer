import "@/assets/styles/app.css";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import { DetailsType } from "@/types/details";
import SkeletonLoader from "./pages/SkeletonLoader";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const object: DetailsType = {
    Repositories: 4,
    Followers: 2,
    Following: 5,
    Gists: 12
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Details data={object} />
        </>
      )}
    </div>
  );
}
