import { Navigate } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/dashboard" replace /> : <Navigate to="/auth" replace />;
};

export default Home;
