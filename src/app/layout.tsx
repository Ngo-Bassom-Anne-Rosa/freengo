import React from 'react';
import {Footer} from '@/app/components/layout/footer';
import {Header} from '@/app/components/layout/header';
import {Sidebar} from '@/app/components/layout/sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/tabler-icons.min.css'
import './assets/fonts/feather.css'
import './assets/fonts/fontawesome.css'
import './assets/fonts/material.css'
import './assets/css/style.css'
import './assets/css/style-preset.css'

import './assets/js/plugins/popper.min.js'
import './assets/js/plugins/simplebar.min.js'
import './assets/js/plugins/feather.min.js'
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Freengo - Deplacez vous aisément',
	description: 'Une application de transport',
};

export default function RootLayout(
	{children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		{/* <CssBaseline/> */}
		<head>
			<title><>{metadata.title || 'Freengo'}</>
			</title>
			<link rel="icon" href="assets/images/favicon.svg" type="image/x-icon"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
			      id="main-font-link"/>
		</head>
		<body>
		<Sidebar/>
		<div className="pc-container bg-white  d-flex" style={{top: 0, marginRight: 0}}>

			<Header/>
			<div className=" map w-75 rounded-2 bg-light position-relative p-2" style={{top: '80px'}}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1019069.8735422032!2d11.534099999999999!3d3.8655000000000066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1714227322853!5m2!1sfr!2scm"
					width="100%" height="100%" style={{border: 0}}  loading="lazy"
					></iframe>
			</div>

			<div className={'w-25 px-3 position-relative'} style={{top: 80}}>
				{children}
			</div>
		</div>


		<Footer/>

		</body>
		</html>
	);
}
