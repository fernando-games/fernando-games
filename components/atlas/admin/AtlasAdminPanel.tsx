"use client";

import { useEffect, useState } from "react";


export default function AtlasAdminPanel() {

    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function checkConnection() {

            try {

                const response = await fetch(
                    "/api/mercadolivre/status"
                );

                const data = await response.json();

                setConnected(data.connected);


            } catch (error) {

                console.error(
                    "Erro ao verificar Mercado Livre:",
                    error
                );

            } finally {

                setLoading(false);

            }

        }


        checkConnection();


    }, []);



    function connectMercadoLivre() {

        window.location.href =
            "/api/mercadolivre";

    }



    return (

        <div
            className="
            mt-6
            rounded-2xl
            border
            border-cyan-500/30
            bg-zinc-950/80
            p-5
            shadow-lg
            "
        >


            <div className="
                flex
                items-center
                justify-between
            ">


                <h3 className="
                    text-lg
                    font-bold
                    text-cyan-400
                ">
                    ⚙️ ADMINISTRADOR DO ATLAS
                </h3>



                <span
                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-bold

                    ${loading
                            ? "bg-yellow-500/20 text-yellow-400"
                            :
                            connected
                                ? "bg-green-500/20 text-green-400"
                                :
                                "bg-red-500/20 text-red-400"
                        }
                    `}
                >

                    {
                        loading
                            ? "VERIFICANDO"
                            :
                            connected
                                ? "ONLINE"
                                :
                                "OFFLINE"
                    }

                </span>


            </div>




            <div className="
                mt-5
                rounded-xl
                border
                border-zinc-700
                p-4
            ">


                <h4 className="
                    font-semibold
                    text-white
                ">
                    🟡 Mercado Livre
                </h4>



                <p className="
                    mt-2
                    text-sm
                    text-zinc-400
                ">

                    {
                        connected
                            ?
                            "Atlas conectado ao catálogo e vendas."
                            :
                            "Conecte o Atlas ao catálogo e vendas."
                    }

                </p>



                {
                    !connected && (

                        <button

                            onClick={
                                connectMercadoLivre
                            }

                            className="
                            mt-4
                            w-full
                            rounded-xl
                            bg-cyan-500
                            py-3
                            font-bold
                            text-black
                            hover:bg-cyan-400
                            "

                        >

                            🔗 Conectar Mercado Livre

                        </button>

                    )
                }



                {
                    connected && (

                        <div className="
                            mt-4
                            rounded-xl
                            border
                            border-green-500/30
                            bg-green-500/10
                            p-3
                            text-sm
                            text-green-400
                        ">

                            🟢 Mercado Livre autorizado
                            <br />
                            Atlas pronto para gerenciar produtos.

                        </div>

                    )
                }



            </div>




            <div className="
                mt-4
                grid
                grid-cols-2
                gap-3
            ">


                <button
                    className="
                    rounded-xl
                    border
                    border-cyan-500/30
                    p-3
                    text-sm
                    text-cyan-300
                    "
                >

                    📦 Produtos

                </button>



                <button
                    className="
                    rounded-xl
                    border
                    border-cyan-500/30
                    p-3
                    text-sm
                    text-cyan-300
                    "
                >

                    📊 Vendas

                </button>


            </div>


        </div>

    );

}