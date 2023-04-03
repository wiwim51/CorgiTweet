import { useRouter } from "next/router";
import { useCallback } from "react";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const pate = "/images/patte-de-chien.png";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push("/");
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div
        className="
      mt-6
      lg:hidden
      rounded-full
      h-14
      w-14
      p-4
      flex
      items-center
      justify-center
      bg-roux
      hover:bg-opacity-80
      transition
      cursor-pointer
      "
      >
        <img src={pate} alt="logo patte-de-chien" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-roux hover:bg-black hover:bg-opacity-90 cursor-pointer transition ">
        <p className="hidden lg:block text-center font-semibold text-black hover:text-beige text-[20px]">
          CorgTweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
