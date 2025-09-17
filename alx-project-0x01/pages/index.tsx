import Button from "../components/common/Button";
import PostCard from "../components/common/PostCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome Page</h1>
        <PostCard />
        <Button />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
