import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-church-navy">
          Welcome to{" "}
          <span className="text-church-gold">Graceway Youth Ministry</span>
        </h1>
        <p className="text-xl text-gray-600">
          Empowering young adults in faith and community
        </p>
        <div className="space-x-4">
          <Link
            to="/admin"
            className="inline-flex items-center px-4 py-2 bg-church-gold text-church-navy rounded-md hover:bg-church-gold/90 transition-colors"
          >
            Admin Portal
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 bg-church-navy text-white rounded-md hover:bg-church-navy/90 transition-colors"
          >
            User Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;