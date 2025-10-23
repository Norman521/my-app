import Image from "next/image";
import Welcome from "../../components/welcome";
import Link from "next/link";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Welcome text="This is the contact page " />
        <Welcome text="Hello, World!" />
        <Welcome text="This is a message." />
        <Welcome text="Have a great day!" author="Norman" />
      </div>
    </>
  );
}
