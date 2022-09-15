import Link from "next/link";
import { Template } from "../components/Template";

export default function Home() {
  return <Template>
    <img className="rounded-circle mb-2" width="100" height="100" src="images/profile.jpg" />
    <h1>Perapol Pamoonchaer</h1>
    <p className="text-start" style={{ maxWidth: "30rem" }} >
      I&apos;m a newbie in computer science tho I love to enjoy
      reverse-engineering API and Hardware things (e.g. Chinese camera,
      Cheap android phone and some mobile apps). Currently I&apos;m working on
      confidential projects. If you have some curiosity about mine or
      interested to working together Feel free to <Link href="/contact"><a href="">contact me</a></Link>~
    </p>
  </Template >
}
