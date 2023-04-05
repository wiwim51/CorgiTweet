import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { BsDot } from "react-icons/bs";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  auth,
  onClick,
  alert,
}) => {
  const router = useRouter();
  const LoginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      LoginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, auth, currentUser, LoginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-roux hover:bg-opacity-20 cursor-pointer lg:hidden">
        <Icon size={28} color="#FEA538" />
        {alert ? (
          <BsDot className="text-red absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-roux hover:bg-opacity-20 cursor-pointer">
        <Icon size={24} color="#FEA538" />
        <p className="hidden lg:block text-black text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-red absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
