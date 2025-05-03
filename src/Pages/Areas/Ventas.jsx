import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Ventas = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-[#f4fbf9] px-6 py-8">
            {/* Barra superior */}
            <header className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-md mb-10">
                <h1 className="text-xl font-bold text-blue-700">VALORY4 - VENTAS</h1>
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
                                    <Link to="/Home">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Home
                                        </li></Link>
                                    <Link to="/Finanzas">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Finanzas
                                        </li>
                                    </Link>
                                    <Link to="/RH">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Recursos Humanos
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

export default Ventas;