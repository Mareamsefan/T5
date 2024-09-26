import { useState } from "react";


export default function Total({total}: {total: number}){

    if (total === 0) return null; 
    return (
        <div>Antall studenter: {total}</div>
    )
}