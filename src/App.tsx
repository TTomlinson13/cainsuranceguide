import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BlogIndex from './BlogIndex'
import BlogPost from './BlogPost'
import './index.css'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">California Insurance Guide</h1>
            <p className="text-sm text-gray-500">Your essential guide to navigating California's unique insurance landscape.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/blog" className="hidden sm:inline text-blue-700 font-semibold hover:text-blue-900">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold transition text-sm">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden" style={{minHeight: '420px'}}>
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{zIndex: 0}}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900/75" style={{zIndex: 1, pointerEvents: 'none'}}></div>
        {/* Content */}
        <div className="relative" style={{zIndex: 2}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">California Insurance Guide</h2>
          <p className="text-xl text-blue-200 mb-6">Your trusted source for California insurance news, laws, and resources</p>
          <p className="text-blue-300 text-lg mb-10 max-w-2xl mx-auto">We help California homeowners and drivers navigate one of the most complex insurance markets in the country — from wildfire-prone areas to earthquake coverage gaps, high premiums, and carrier exits. No jargon, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#overview" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              📖 Explore the Guide
            </a>
            <a href="#tips" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              💡 California Insurance Tips
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* State Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">California Insurance Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">California's insurance market is one of the largest and most complex in the United States, driven by its diverse geography, population, and unique environmental risks like wildfires and earthquakes. The California Department of Insurance (CDI) is the primary regulatory body, overseeing everything from policy rates to consumer protection. Understanding these regulations is crucial for both insurers and policyholders.</p><p className="text-gray-700 mb-4">Residents need good coverage not just for standard risks like auto accidents and health issues, but also for specific California challenges. Earthquake insurance, while often separate, is a significant consideration, as is robust homeowners insurance that accounts for wildfire risk in many areas. Navigating the choices requires knowledge of local laws and available options to ensure adequate protection against potential financial devastation.</p>
          </div>
        </div>
      </section>

      {/* Top Carriers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Top Insurance Carriers in California</h2>
          <p className="text-center text-gray-600 mb-10">Leading insurance companies serving California residents</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">State Farm</h3>
          <p className="text-gray-600">A leading provider of auto, home, and life insurance, with a strong presence across California, offering extensive local agent support.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">GEICO</h3>
          <p className="text-gray-600">Known for competitive auto insurance rates and a strong online presence, serving a large segment of California drivers.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Farmers Insurance</h3>
          <p className="text-gray-600">Offers a wide range of personal and commercial insurance products, including specialized policies for California risks like earthquakes.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">AAA (Automobile Club of Southern California / California State Automobile Association)</h3>
          <p className="text-gray-600">Provides auto, home, and life insurance, often bundled with their roadside assistance and travel services for members.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Kaiser Permanente</h3>
          <p className="text-gray-600">A prominent health maintenance organization (HMO) with a significant footprint in California, offering integrated healthcare services and coverage.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Laws & Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">California Insurance Laws & Requirements</h2>
          <p className="text-gray-600 mb-8">Stay compliant with California's insurance regulations</p>
          <div className="space-y-6">
            
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Proposition 103</h4>
            <p className="text-gray-600 text-sm">Requires insurers to get state approval for rate changes and allows consumers to intervene in rate-setting processes.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">California Fair Claims Settlement Practices Regulations</h4>
            <p className="text-gray-600 text-sm">Outlines specific requirements for how insurers must handle claims, ensuring fair and prompt treatment of policyholders.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Mandatory Auto Insurance (Financial Responsibility Law)</h4>
            <p className="text-gray-600 text-sm">Requires all California drivers to carry a minimum level of liability insurance or other proof of financial responsibility.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">California Earthquake Authority (CEA)</h4>
            <p className="text-gray-600 text-sm">A publicly managed, privately funded organization providing earthquake insurance to California homeowners, renters, and condo owners.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Homeowners' Insurance Non-Renewal Rules (Wildfire Zones)</h4>
            <p className="text-gray-600 text-sm">Specific regulations limiting insurers' ability to non-renew policies in designated wildfire-prone areas under certain conditions.</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Recent News (Blog Preview) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Recent News & Articles</h2>
            <Link to="/blog" className="text-blue-700 font-semibold hover:text-blue-900">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            
        <a href="/blog/understanding-california-earthquake-insurance" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-10-22</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Understanding California Earthquake Insurance: Do You Need It?</h3>
          <p className="text-gray-600 text-sm">California is earthquake country. This post breaks down what earthquake insurance covers, why it's separate from homeowners insurance, and if it's right for your situation.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/navigating-wildfire-risk-homeowners-insurance" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-01-15</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Navigating Wildfire Risk: Homeowners Insurance in California's High-Risk Zones</h3>
          <p className="text-gray-600 text-sm">Wildfires are a growing concern in California. Learn how wildfire risk impacts homeowners insurance, what to look for in your policy, and mitigation strategies.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/california-auto-insurance-minimums-what-you-need-to-know" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-09-01</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">California Auto Insurance Minimums: What You Need to Know</h3>
          <p className="text-gray-600 text-sm">Driving in California requires specific minimum auto insurance. This article details the legal requirements and why meeting them is just the starting point for adequate protection.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
          </div>
        </div>
      </section>

      {/* Insurance Tips */}
      <section id="tips" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Insurance Tips for California Residents</h2>
          <div className="space-y-4">
            
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <p className="text-gray-700">Always disclose all relevant information when applying for insurance, especially regarding wildfire risk or past claims.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <p className="text-gray-700">Consider earthquake insurance, as standard homeowners policies do not cover earthquake damage in California.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
          <p className="text-gray-700">Bundle your auto and home policies with the same carrier for potential multi-policy discounts.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
          <p className="text-gray-700">Review your policy annually to ensure coverage limits still meet your needs, especially after home renovations or life changes.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
          <p className="text-gray-700">Understand the difference between actual cash value and replacement cost coverage for your home and belongings.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Quote CTA — appears after all value content */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions About Your Coverage?</h2>
          <p className="text-blue-200 text-xl mb-4">If you've read through the guide and want a second opinion on your current policy — or just want to see what else is available in California — our local agents are happy to help. No pressure, no obligation.</p>
          <p className="text-blue-300 mb-8">We work with 150+ carriers across the country, so we'll tell you honestly what's worth it and what's not.</p>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-5 rounded-xl text-xl transition transform hover:scale-105 shadow-lg">
            🚀 Get a Free, No-Obligation Quote
          </a>
          <p className="mt-4 text-blue-200 text-sm">Takes 2 minutes · Local agents · 150+ carriers compared</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">California Insurance Guide</h3>
              <p className="text-sm">Your essential guide to navigating California's unique insurance landscape.</p>
              <p className="mt-3 text-sm">📞 <a href="tel:800-616-1418" className="hover:text-white">800-616-1418</a></p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Also from Tomlinson & Co</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tomlinsonandco.com" className="hover:text-white transition">Tomlinson & Co Insurance</a></li>
                <li><a href="https://hoinsurance.com" className="hover:text-white transition">HOInsurance.com — FL Home Specialists</a></li>
                <li><a href="https://flawc.com" className="hover:text-white transition">FLAWC.com — Florida Workers Comp</a></li>
                <li><a href="https://easycommercialinsurance.com" className="hover:text-white transition">EasyCommercialInsurance.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} California Insurance Guide — A Tomlinson & Co Resource</p>
            <p className="mt-1 text-xs">Information provided for educational purposes only. Contact a licensed agent for personalized advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
