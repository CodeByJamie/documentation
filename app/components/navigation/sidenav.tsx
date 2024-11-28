"use client";
import { Dependencies } from "@/lib/exports";
import * as Components from '../../components';

export default function sidenav() {
	const [collapsed, setCollapsed] = Dependencies.React.useState(false);

	return (
		<>
			<aside className='relative top-8 left-0 flexCol w-[17rem] h-full select-none duration-200 pr-6 gap-1 mx-12'>
				<Components.Navigation.Parent childrenElements={
					<>
						<Components.Navigation.Child icon={"ClipboardDocumentIcon"} pageName={"Introduction"} />
						<Dependencies.Link href={'https://discord.gg/botwiz'}>
							<Components.Navigation.Child icon={"WrenchIcon"} pageName={"Support Server"} />
						</Dependencies.Link>
					</>
				}
					name="Getting Started"
				/>
				<Components.Navigation.Parent childrenElements={
					<>
						<Components.Navigation.Child icon="CommandLineIcon" pageName="Commands" collapsable={true} children={{
							name: "Initializing The Builder",
						}}/>
					</>
				}
					name="Dashboard / Builder" />
			</aside>
		</>
	);
}
