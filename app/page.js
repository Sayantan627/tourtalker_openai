import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">TourTalker</h1>
          <p className="py-6 text-lg leading-loose">
            Your passport to immersive conversations and instant travel
            recommendations, all in one chat-powered experience!
          </p>
          <Link href="/chat" className="btn btn-secondary">
            get started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
