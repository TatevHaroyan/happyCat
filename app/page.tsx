import Image from "next/image";
import Header from "./components/header";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="">
      <div>
        <Header/>
      </div>
      <div>
        <Main/>
      </div>
    </main>
  );
}
