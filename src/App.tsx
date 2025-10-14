import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import Agenda from "@/pages/Agenda";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";
import CSChat from "@/components/site/CSChat";
import LoadingScreen from "@/components/site/LoadingScreen";
import { LanguageProvider } from "@/contexts";
import { CSChatProvider } from "@/contexts";

// Create a client
const queryClient = new QueryClient();

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loading screen for a short time to demonstrate the animation
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	if (isLoading) {
		return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<LanguageProvider>
					<CSChatProvider>
						<TooltipProvider>
							<Toaster />
							<Sonner />
							<BrowserRouter>
								<TopBar />
								<Header />
								<Routes>
									<Route path="/" element={<Index />} />
									<Route
										path="/layanan"
										element={<Services />}
									/>
									<Route
										path="/agenda"
										element={<Agenda />}
									/>
									<Route path="/blog" element={<Blog />} />
									{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
									<Route path="*" element={<NotFound />} />
								</Routes>
								<Footer />
								<CSChat />
							</BrowserRouter>
						</TooltipProvider>
					</CSChatProvider>
				</LanguageProvider>
			</HelmetProvider>
		</QueryClientProvider>
	);
};

export default App;
