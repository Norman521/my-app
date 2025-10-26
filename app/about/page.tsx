import Image from "next/image";
import Welcome from "../../components/welcome";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Team from "../../components/about";

export default function Home() {
  return (
    <>
      <div>
        <Team />
      </div>
    </>
  );
}
