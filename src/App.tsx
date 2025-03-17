// src/App.tsx
import { Header } from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/theme/ThemeProvider';
import PriceTable from './components/PriceTable';
import OrderButton from './components/OrderButton';
import PatternBackground from './components/PatternBackground';

function App() {
	return (
		<ThemeProvider>
			<div className='min-h-screen bg-background relative'>
				{/* Background pattern com SVG */}
				<PatternBackground />

				{/* Gradiente principal e conteúdo */}
				<div className='relative bg-gradient-to-b from-surface/50 to-background'>
					<Header />

					<main role='main' className='mx-auto max-w-6xl px-4 py-8 space-y-12'>
						<PriceTable />
					</main>

					<OrderButton />
				</div>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
