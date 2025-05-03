import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-[#f4fbf9] px-6 py-8">
            {/* Barra superior */}
            <header className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-md mb-10">
                <h1 className="text-xl font-bold text-blue-700">VALORY4 CONTRACT SHOP</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        {/* Botón de Historial */}
                        <button
                            className="text-gray-700 font-medium"
                            onClick={toggleDropdown} // Cambiar el estado al hacer clic
                        >
                            Historial ▼
                        </button>
                        {/* Menú desplegable */}
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg w-48">
                                <ul className="text-gray-700">
                                    <Link to="/Finanzas">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Finanzas
                                        </li></Link>
                                    <Link to="/RH">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Recursos Humanos
                                        </li>
                                    </Link>
                                    <Link to="/Ventas">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Ventas
                                        </li>
                                    </Link>
                                    <Link to="/Sistemas">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Sistemas
                                        </li>
                                    </Link>
                                    <Link to="/Marketing">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Marketing
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-mono">0x5d05...e515</div>
                    <button onClick={() => navigate("/")} className="text-red-500 font-semibold">Desconectar</button>
                </div>
            </header>

            {/* Compras Disponibles */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Compras Disponibles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Farmacias del ahorro", desc: "Implementación de soluciones fintech, permitiendo pagos digitales con Cuenta Monedero y opciones de transferencia.", price: "0.25 ETH", color: "bg-blue-100", icon: "💊" },
                        { title: "Elektra", desc: "Comercio minorista que acepta Bitcoin como forma de pago, ofreciendo descuentos exclusivos en algunas compras.", price: "0.35 ETH", color: "bg-purple-100", icon: "🏪" },
                        { title: "Librerías Ghandi", desc: " Compra de tarjetas de regalo con Coinbase Wallet, utilizables en múltiples establecimientos.", price: "0.65 ETH", color: "bg-green-100", icon: "📖" },
                        { title: "DELL", desc: "Venta de productos tecnológicos con opción de pago en Bitcoin.", price: "0.45 ETH", color: "bg-orange-100", icon: "🖥️" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
                            <div>
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 text-xl ${item.color}`}>{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                            <div className="mt-5 flex justify-between items-center">
                                <span className="font-bold text-gray-800">{item.price}</span>
                                <button className="text-blue-600 hover:underline text-sm font-medium">Comprar →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Servicios para Pagar */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Servicios para Pagar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Twitch", desc: "Permite donaciones a streamers con criptos como Ethereum.", price: "0.08 ETH / mes", due: "2025-06-01", icon: "🎮" },
                        { title: "- Destinia", desc: "Agencia de viajes en línea que acepta pagos en criptos.", price: "0.05 ETH / mes", due: "2025-05-15", icon: "✈️" },
                        { title: "-  Microsoft Store", desc: "Puedes comprar juegos y películas con Bitcoin.", price: "0.12 ETH / mes", due: "2025-05-10", icon: "🪟" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-3 text-xl">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                                <p className="text-xs text-gray-500 mt-2">Vence: {item.due}</p>
                            </div>
                            <div className="mt-5 flex justify-between items-center">
                                <span className="font-bold text-gray-800">{item.price}</span>
                                <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-md hover:bg-emerald-600 text-sm font-medium">Pagar Ahora</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Últimas Transacciones */}
            <section className="mb-12">
                <div className="bg-white text-gray-700 p-6 rounded-xl shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Últimas Transacciones</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-3 text-left">ID</th>
                                    <th className="p-3 text-left">Tipo</th>
                                    <th className="p-3 text-left">Descripción</th>
                                    <th className="p-3 text-left">Monto (ETH)</th>
                                    <th className="p-3 text-left">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">#001</td>
                                    <td className="p-3">Compra</td>
                                    <td className="p-3">Smart Contract</td>
                                    <td className="p-3">1.2 ETH</td>
                                    <td className="p-3 text-green-500">✅ Completado</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#002</td>
                                    <td className="p-3">Pago</td>
                                    <td className="p-3">Auditoría de contrato</td>
                                    <td className="p-3">0.8 ETH</td>
                                    <td className="p-3 text-yellow-500">⏳ Pendiente</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#003</td>
                                    <td className="p-3">Contrato</td>
                                    <td className="p-3">Despliegue de DApp</td>
                                    <td className="p-3">2.5 ETH</td>
                                    <td className="p-3 text-red-500">❌ Fallido</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#004</td>
                                    <td className="p-3">Compra</td>
                                    <td className="p-3">Smart Contract</td>
                                    <td className="p-3">1.2 ETH</td>
                                    <td className="p-3 text-green-500">✅ Completado</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#005</td>
                                    <td className="p-3">Pago</td>
                                    <td className="p-3">Auditoría de contrato</td>
                                    <td className="p-3">0.8 ETH</td>
                                    <td className="p-3 text-yellow-500">⏳ Pendiente</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#006</td>
                                    <td className="p-3">Contrato</td>
                                    <td className="p-3">Despliegue de DApp</td>
                                    <td className="p-3">2.5 ETH</td>
                                    <td className="p-3 text-red-500">❌ Fallido</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#007</td>
                                    <td className="p-3">Contrato</td>
                                    <td className="p-3">Despliegue de DApp</td>
                                    <td className="p-3">2.5 ETH</td>
                                    <td className="p-3 text-red-500">❌ Fallido</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#008</td>
                                    <td className="p-3">Pago</td>
                                    <td className="p-3">Auditoría de contrato</td>
                                    <td className="p-3">0.8 ETH</td>
                                    <td className="p-3 text-yellow-500">⏳ Pendiente</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#009</td>
                                    <td className="p-3">Contrato</td>
                                    <td className="p-3">Despliegue de DApp</td>
                                    <td className="p-3">2.5 ETH</td>
                                    <td className="p-3 text-red-500">❌ Fallido</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">#010</td>
                                    <td className="p-3">Contrato</td>
                                    <td className="p-3">Despliegue de DApp</td>
                                    <td className="p-3">2.5 ETH</td>
                                    <td className="p-3 text-red-500">❌ Fallido</td>
                                </tr>
                                {/* Agregar más transacciones aquí si lo deseas */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;


