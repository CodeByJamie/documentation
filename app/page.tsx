import * as Components from './components';

export default function rootPage() {
	return (
		<div className = 'relative flex flex-col flex-1 h-screen bg-primCol-100 dark:bg-primCol-900 overflow-hidden duration-300'>
			< Components.Navigation.Header />
		<Components.Navigation.Sidenav />
		</div >
	);
}
