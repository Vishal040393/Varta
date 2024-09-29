import { getAllThreads } from "@/services/thread.service";
import Image from "next/image";

export default function Home() {
  var threads = getAllThreads();

  return (
    <div>Hello</div>
  );
}
