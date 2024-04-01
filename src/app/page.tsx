import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>

      <div>
        <Link href="/cards">
          <h2>
            Cards <span>-&gt;</span>
          </h2>
          <p>Flashcards</p>
        </Link>

      </div>
    </main>
  );
}
