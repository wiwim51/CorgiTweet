import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetcherUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetcherUser) {
    return (
      <div
        className="flex justify-center items-center
    h-full"
      >
        <ClipLoader color="#FEA538" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label="User Profile" />
    </>
  );
};

export default UserView;
