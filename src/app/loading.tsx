import loader from "@/assets/loader.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-center h-screen w-screen">
      <Image src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
};

export default Loading;
