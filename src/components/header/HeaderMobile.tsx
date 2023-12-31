import { useState } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";
import ThemeToggle from "../buttons/ThemeToggle";
import NavToggle from "../buttons/NavToggle";
import MobileNavItem from "./MobileNavItem";
import LogoMobile from "./LogoMobile";

export default function HeaderMobile(): JSX.Element {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav class="flex flex-col justify-center lg:hidden top-0 fixed right-0 left-0 px-4 dark:bg-customBlack/60 bg-customWhite/60 backdrop-blur-xl z-50 py-2">
			<div class="flex items-end justify-between z-50">
				<a class="w-20 h-auto mt-1.5" href="/">
					<LogoMobile />
				</a>

				<article class="flex gap-6 items-center">
					<ThemeToggle />
					<NavToggle isActive={isActive} setIsActive={setIsActive} />
				</article>
			</div>

			<ul
				id="mobile-menu"
				class="mt-4 flex opacity-0 transition-all duration-300 ease-in-out flex-col h-screen z-40 fixed inset-0 p-8 bg-customWhite dark:bg-customBlack backdrop-blur-2xl items-center gap-12 grow justify-center"
			>
				<MobileNavItem setIsActive={setIsActive} navText="Inicio" path="/" />
				<MobileNavItem
					setIsActive={setIsActive}
					navText="Proyectos"
					path="/#proyectos"
				/>
				<MobileNavItem
					setIsActive={setIsActive}
					navText="Estudios"
					path="/#estudios"
				/>
				<MobileNavItem
					setIsActive={setIsActive}
					navText="Experiencia"
					path="/#recomendaciones"
				/>
				<MobileNavItem
					setIsActive={setIsActive}
					navText="Recursos"
					path="/recursos"
				/>
				<MobileNavItem
					setIsActive={setIsActive}
					navText="Contacto"
					path="#contacto"
				/>
			</ul>
		</nav>
	);
}
