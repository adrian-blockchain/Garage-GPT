'use client'
import React from "react";
import { signIn } from "next-auth/react";
import Image from 'next/image'

import LogoGarage from "../public/Garage ISEP Logo Black-1.png";
import {callback} from "next-auth/core/routes";
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";
import callbackUrl = mockProviders.github.callbackUrl;

type Props = {};

function Login({}: Props) {

  return (


    <div className="flex flex-col items-center w-full mt-24 lg:space-x-10 lg:flex-row m-3">

        <div className="relative z-10 w-full space-y-10 lg:w-1/2">
            <h1 className="text-5xl font-bold sm:text-7xl xl:text-8xl">Garage GPT</h1>
            <p className="text-base text-gray-500 sm:text-lg">Développé par l association Isepiennes, Garage ISEP Innovation Hub a pour objectif d offrir une plateforme open source et gratuite à tous les garagistes afin qu ils puissent bénéficier des derniers modèles d IA.
            </p><div className="flex flex-col items-center w-full space-x-5 lg:flex-row">
            <button
                className="w-full px-6 py-6 text-xl font-medium text-center text-white bg-purple-600 shadow-xl xl:px-12 xl:text-2xl lg:w-auto hover:bg-purple-700 rounded-3xl"
                onClick={() => signIn("google")}
            >
                Connection
            </button>
            <a href="#_" className="flex items-center justify-center w-full px-4 py-6 mt-5 text-lg font-medium text-center text-yellow-400 underline xl:px-10 xl:text-xl lg:mt-0 lg:w-auto rounded-3xl hover:bg-gray-50" data-rounded="rounded-3xl">
                <svg className="w-6 h-6 mt-1 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 847 1058.75" fillRule="evenodd" clipRule="evenodd">
                    <defs/>
                    <path className="fil0" d="M636 459L447 583 257 708c-20 12-46 7-59-13-5-7-7-15-7-23V174c0-23 19-42 42-42 10 0 18 3 25 8l189 124 189 124c20 13 25 39 13 58-4 6-8 10-13 13z"/>
                </svg>
                <span>Github repo</span></a>
        </div>
        </div>
        <div className="relative z-0 w-full  lg:w-1/2">
            <Image src={LogoGarage} width={400}  alt="Garage Logo"/>
        </div>

    </div>

  );
}

export default Login;

//signIn("google")
