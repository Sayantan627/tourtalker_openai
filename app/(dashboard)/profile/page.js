import { fetchUserTokensById } from "@/utils/action";
import { UserProfile, auth } from "@clerk/nextjs";

const ProfilePage = async () => {
  const { userId } = auth();
  // console.log(userId);
  // const currentTokens = await fetchUserTokensById(userId);
  return (
    <div>
      {/* <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Tokens Amount : {currentTokens}
      </h2> */}
      <UserProfile />
    </div>
  );
};
export default ProfilePage;
