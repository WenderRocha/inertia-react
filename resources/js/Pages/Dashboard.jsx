import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import { GithubIcon } from "@/Components/Icons/brands";
import ChartBar from "@/Components/Chart/ChartBar";
import ChartPie from "@/Components/Chart/ChartPie";

export default (props) => {
    return (
        <Authenticated
            title="Dashboard"
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-semibold leading-tight">
                        Dashboard
                    </h2>

                    <Button
                        external
                        variant="black"
                        target="_blank"
                        className="justify-center gap-2 max-w-xs"
                        href="https://github.com/kamona-wd/kui-laravel-breeze"
                    >
                        <GithubIcon aria-hidden="true" className="w-6 h-6" />
                        <span>Star on Github</span>
                    </Button>
                </div>
            }
        >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mb-4">
                <div className="overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex lg:items-center sm:p-8 mb-4 h-27 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <h6 className="text-md mb-2 ">Banca Inicial</h6>
                        <span className="font-semibold">
                            <span className="text-xs text-cyan-500">R$</span>{" "}
                            <span className="text-xl text-cyan-500">
                                100,00
                            </span>
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex lg:items-center sm:p-8 mb-4 justify-between dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <h6 className="text-md mb-2">Banca Atual</h6>
                        <span className="font-semibold">
                            <span className="text-xs text-green-500">R$</span>{" "}
                            <span className="text-xl  text-green-500">
                                150,00
                            </span>
                        </span>
                        <span className="inline-block px-2 ml-2 text-xs text-green-500 bg-green-200 rounded-md">
                            +4.4%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex flex-col sm:p-8 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <h6 className="text-md mb-2">Stop Win</h6>
                        <span className="font-semibold">
                            <span className="text-xs text-yellow-500">R$</span>{" "}
                            <span className="text-xl text-yellow-500">
                                50,00
                            </span>
                        </span>
                        <span className="inline-block px-2 ml-2 text-xs text-gray-500 bg-gray-200 rounded-md">
                            28/06/2022
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: "15%" }}
                        ></div>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex flex-col  sm:p-8 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <h6 className="text-md mb-2">Stop Loss</h6>
                        <span className="font-semibold">
                            <span className="text-xs text-red-500">R$</span>{" "}
                            <span className="text-xl text-red-500">50,00</span>
                        </span>
                        <span className="inline-block px-2 ml-2 text-xs text-gray-500 bg-gray-200 rounded-md">
                            28/06/2022
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                            className="bg-red-400 h-2.5 rounded-full"
                            style={{ width: "45%" }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-4">
                <div className=" overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex lg:items-center  sm:p-8">
                    <div className="flex-grow">
                        <ChartBar />
                    </div>
                </div>
                <div className=" overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1 lg:flex lg:items-center  sm:p-8">
                    <div className="flex-grow" style={{ width: "200" }}>
                        <ChartPie />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <div
                    className="col-span-2 bg-white rounded-md dark:bg-darker">
                    <div className="flex items-center justify-between p-4 border-b dark:border-primary">
                        <h4 className="text-lg font-semibold text-gray-500 dark:text-light">
                            Book Trade
                        </h4>
                    </div>

                    <div className="relative p-4 h-72">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Data
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Carteira
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Trades
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Investimento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Vitorias
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Derrotas
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Empates
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Renda
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            Prejuizo
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            Balanço
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Margem
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            saldo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">1</th>
                                        <td className="px-6 py-4">28/06/2022</td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">2</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">30,00</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">10,00</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">20,00</span></td>
                                        <td className="px-6 py-4"><span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">+20%</span></td>
                                        <td className="px-6 py-4"><span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">120,00</span></td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">1</th>
                                        <td className="px-6 py-4">28/06/2022</td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">2</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">30,00</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">10,00</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">20,00</span></td>
                                        <td className="px-6 py-4"><span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">+20%</span></td>
                                        <td className="px-6 py-4"><span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">120,00</span></td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">1</th>
                                        <td className="px-6 py-4">28/06/2022</td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">2</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">1</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">30,00</span></td>
                                        <td className="px-6 py-4"><span className="text-red-500 bg-red-200 px-2 rounded-md p-2">10,00</span></td>
                                        <td className="px-6 py-4"><span className="text-green-500 bg-green-200 px-2 rounded-md p-2">20,00</span></td>
                                        <td className="px-6 py-4"><span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">+20%</span></td>
                                        <td className="px-6 py-4"><span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">120,00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
