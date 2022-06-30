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
                        Trades
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
            <div className="grid grid-cols-1">
                <div className="col-span-2 bg-white rounded-md dark:bg-darker">
                    <div className="flex items-center justify-between p-4 border-b dark:border-primary">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                datepicker
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                            />
                        </div>
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
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            28/06/2022
                                        </td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                2
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                30,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                10,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                20,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">
                                                +20%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">
                                                120,00
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            28/06/2022
                                        </td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                2
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                30,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                10,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                20,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">
                                                +20%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">
                                                120,00
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            28/06/2022
                                        </td>
                                        <td className="px-6 py-4">Quotex</td>
                                        <td className="px-6 py-4">10</td>
                                        <td className="px-6 py-4">R$ 100,00</td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                2
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-yellow-500 bg-yellow-200 px-2 rounded-md p-2">
                                                1
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                30,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-500 bg-red-200 px-2 rounded-md p-2">
                                                10,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-green-500 bg-green-200 px-2 rounded-md p-2">
                                                20,00
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-500 bg-gray-200 px-2 rounded-md p-2">
                                                +20%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-cyan-500 bg-cyan-200 px-2 rounded-md p-2">
                                                120,00
                                            </span>
                                        </td>
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
