import { useRouter } from "next/router";

const corgi = "/images/corgi.png";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 flex items-center justify-center cursor-pointer"
    >
      <img src={corgi} alt="logo corgi" />
    </div>
  );
};

export default SidebarLogo;
