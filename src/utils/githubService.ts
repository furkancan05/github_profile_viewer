import { IUserDatas } from "@/types/userDatas";

class GithubService {
  private BASE_URL = "https://api.github.com/";

  //Default api request template
  private async callApi(username: string) {
    const result = await fetch(this.BASE_URL + username);

    return await result.json();
  }

  //Getting a specific user data
  public getUserData = async (
    username: string,
    setUserDatas: React.Dispatch<React.SetStateAction<IUserDatas | null>>
  ) => {
    const result = await this.callApi(`users/${username}`);
    console.log(result);

    setUserDatas({ ...result });
  };

  // const getFollowers = async (username: string) => {
  //   const followers = await fetch(
  //     `https://api.github.com/users/${username}/followers`
  //   ).then(res => res.json);

  //   setFollowingUsers({ ...followers });
  // };
}

export default GithubService;
