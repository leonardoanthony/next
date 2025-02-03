import { Width } from "@/components/width";
// 'use client'

// import dynamic from "next/dynamic";

// const Width = dynamic(() => import('@/components/width'), {ssr: false});

export default function SobrePage() {
    return (
      <main>
        <h1>Sobre</h1>
        <Width />
        <h2 id="empresa" style={{margin: '1600px 0'}}>Empresa</h2>
      </main>
    );
  }
  