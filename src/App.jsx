import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/contact'
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import GithubStats from "./components/GithubStats";
import FeaturedProject from "./components/FeaturedProject";
import Loader from "./components/Loader";
import Services from "./components/Services";


function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <Loader />;
  }


  return (
    <div className="overflow-x-hidden text-stone-300 antialissed">
      <CursorGlow />
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          </div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-3 sm:px-8 lg:px-8'>
        <Navbar />
        <Hero />
        <Services />
        {/* <FeaturedProject /> */}
        <Technologies />
        <Skills />
        <Projects />
        <GithubStats />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
