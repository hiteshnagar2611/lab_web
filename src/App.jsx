import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Resources from './components/Resources';
import News from './components/News';
import Team from './components/Team';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import MemberBio from './components/MemberBio';
// Individual member pages
import Hitesh from './components/members/Hitesh';
import Deepanshi from './components/members/Deepanshi';
import DrLipi from './components/members/DrLipi';
import DrShailya from './components/members/DrShailya';
import DrShrutiMathur from './components/members/DrShrutiMathur';
import DrTanushreeDas from './components/members/DrTanushreeDas';
import AkankshaKaushik from './components/members/AkankshaKaushik';
import AayushiSingh from './components/members/AayushiSingh';
import AkankshaArun from './components/members/AkankshaArun';
import DebendraKumarSwain from './components/members/DebendraKumarSwain';
import JesuCastin from './components/members/JesuCastin';
import AnamikaSingh from './components/members/AnamikaSingh';
import PrathamdeepDhanoa from './components/members/PrathamdeepDhanoa';
import Nabajit from './components/members/Nabajit';
import Varrunavi from './components/members/Varrunavi';

const App = () => {
    const location = useLocation();
    const isMemberBioPage = location.pathname.startsWith('/team/') && location.pathname !== '/team';

    return (
        <div className="min-h-screen bg-gray-50">
            {!isMemberBioPage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                {/* Individual member pages */}
                <Route path="/team/hitesh-nagar" element={<Hitesh />} />
                <Route path="/team/dr-deepanshi" element={<Deepanshi />} />
                <Route path="/team/dr-lipi-thukral" element={<DrLipi />} />
                <Route path="/team/dr-shailya" element={<DrShailya />} />
                <Route path="/team/dr-shruti-mathur" element={<DrShrutiMathur />} />
                <Route path="/team/dr-tanushree-das" element={<DrTanushreeDas />} />
                <Route path="/team/akanksha-kaushik" element={<AkankshaKaushik />} />
                <Route path="/team/aayushi-singh" element={<AayushiSingh />} />
                <Route path="/team/akanksha-arun" element={<AkankshaArun />} />
                <Route path="/team/debendra-kumar-swain" element={<DebendraKumarSwain />} />
                <Route path="/team/jesu-castin" element={<JesuCastin />} />
                <Route path="/team/anamika-singh" element={<AnamikaSingh />} />
                <Route path="/team/prathamdeep-dhanoa" element={<PrathamdeepDhanoa />} />
                <Route path="/team/nabajit" element={<Nabajit />} />
                <Route path="/team/varrunavi" element={<Varrunavi />} />
                {/* Fallback to dynamic MemberBio for other members */}
                <Route path="/team/:name" element={<MemberBio />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {!isMemberBioPage && <Footer />}
        </div>
    );
};

export default App;