import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-white to-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Bienvenido a Home</h1>
        <p className="text-gray-600 mt-4">¡Has iniciado sesión correctamente! 🎉</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Home;