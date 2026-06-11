import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import FooterSection from "@/components/home/FooterSection";
import NavBar from "@/components/home/NavBar";
import AnimatedBackground from "@/components/home/AnimatedBackground";
import CustomCursor from "@/components/home/CustomCursor";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050505", color: "#fff" }}>
      <CustomCursor />
      <AnimatedBackground />
      <NavBar scrollY={scrollY} />
      <HeroSection />
      <main style={{ position: "relative", zIndex: 2 }}>
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}