"use client"

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"


const data = [
    { month: "Janeiro", Receitas: 186, Despesas: 80 },
    { month: "Fevereiro", Receitas: 305, Despesas: 200 },
    { month: "Março", Receitas: 237, Despesas: 120 },
    { month: "Abril", Receitas: 73, Despesas: 190 },
    { month: "Maio", Receitas: 209, Despesas: 130 },
    { month: "Junho", Receitas: 451, Despesas: 96 },
    { month: "Julho", Receitas: 214, Despesas: 140 },
    { month: "Agosto", Receitas: 45, Despesas: 140 },
    { month: "Setembro", Receitas: 450, Despesas: 140 },
    { month: "Outubro", Receitas: 214, Despesas: 234 },
    { month: "Novembro", Receitas: 214, Despesas: 140 },
    { month: "Dezembro", Receitas: 154, Despesas: 140 },
]

export function GraphicDash() {

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={true}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} 
                        contentStyle={{
                            backgroundColor: "#1f2937",
                            border: "solid 1px #fff",
                            borderRadius: "8px",
                            color: "#fff",
                            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                        }}
                        labelStyle={{ color: "#e5e7eb", fontWeight: "bold" }}
                    />
                    <Bar dataKey="Receitas" fill="#22c55e" radius={3} />
                    <Bar dataKey="Despesas" fill="#ef4444" radius={3} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
