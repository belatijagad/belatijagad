import Showcase from "./components/ShowcaseCard"

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Hero />
        <hr className="border-t-2" />
        <More />
      </div>
    </main>
  )
}

function Hero() {
  return(
    <div className="flex flex-col min-h-screen justify-center align-center">
      <h1 className="font-bold text-8xl">Halo!</h1>
      <p className="text-3xl">I&apos;m Abel, an undergraduate Computer Science student that has strong interest in Machine Learning.</p>
    </div>
  )
}

function More() {
  const projectsText = "Tes";
  const awardsText = "Tes";
  const blogsText = "Tes";
  return(
    <div className="min-h-screen justify-center align-center items-center flex flex-col">
      <h1 className="text-4xl py-8">Know more about me through</h1>
      <div className="w-full grid grid-cols-3 gap-16">
        <Showcase name="My projects" route="/projects" text={projectsText} />
        <Showcase name="My awards" route="/awards" text={awardsText} />
        <Showcase name="My blogs" route="/blogs" text={blogsText} />
      </div>
    </div>
  )
}