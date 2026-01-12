import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DonationTypes from '@/components/DonationTypes';
import DonationForm from '@/components/DonationForm';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DonationTypes />
      <DonationForm />
      <HowItWorks />
      <Footer />
    </div>
  );
}
