import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../src/components/Card";
import Link from "next/link";

function Menus({ kebabs, boissons, desserts }: { kebabs: any, boissons: any, desserts: any }) {
    return (
        <>
            <h1> Liste des Kebabs</h1>
            {kebabs.map((kebab: any) => {
                return (
                    <div
                        key={kebab.id}
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2>name : {kebab.name}</h2>
                        <h2>description: {kebab.description}</h2>
                        <h2> hp : {kebab.hp}</h2>
                    </div>
                );
            })}
            <h1> Liste des Boissons</h1>
            {boissons.map((boisson: any) => {
                return (
                    <div
                        key={boisson.id}
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2>name : {boisson.name}</h2>
                        <h2>description: {boisson.description}</h2>
                    </div>
                );
            })}
            <h1> Liste des Desserts</h1>
            {desserts.map((dessert: any) => {
                return (
                    <div
                        key={dessert.id}
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2>name : {dessert.name}</h2>
                        <h2>description: {dessert.description}</h2>
                    </div>
                );
            })}
        </>
    );
}

export default Menus;

export async function getServerSideProps() {
    const responsekebab = await fetch("http://localhost:4000/kebabs");
    const responseboisson = await fetch("http://localhost:4000/boissons");
    const responsedessert = await fetch("http://localhost:4000/desserts");
    const datakebab = await responsekebab.json();
    const databoisson = await responseboisson.json();
    const datadessert = await responsedessert.json();

    return {
        props: {
            menus: {
                databoisson,
                datadessert,
                datakebab
            },

        },
    };
}
