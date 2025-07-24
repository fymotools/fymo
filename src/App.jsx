import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";

// Tool Categories
import TaxTools from "./pages/TaxTools";
import HealthTools from "./pages/HealthTools";
import WritingTools from "./pages/WritingTools";
import SEOTools from "./pages/SEOTools";
import ImageTools from "./pages/ImageTools";
import DailyTools from "./pages/DailyTools";

// Individual Blog Pages
import BlogTax from "./pages/blog/BlogTax";
import BlogHealth from "./pages/blog/BlogHealth";
import BlogWriting from "./pages/blog/BlogWriting";
import BlogSEO from "./pages/blog/BlogSEO";
import BlogImage from "./pages/blog/BlogImage";
import BlogDaily from "./pages/blog/BlogDaily";

// 404 Page
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />

            {/* Tool Category Pages */}
            <Route path="/tax-tools" element={<TaxTools />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/writing-tools" element={<WritingTools />} />
            <Route path="/seo-tools" element={<SEOTools />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/daily-tools" element={<DailyTools />} />

            {/* Blog Category Articles */}
            <Route path="/blog/tax" element={<BlogTax />} />
            <Route path="/blog/health" element={<BlogHealth />} />
            <Route path="/blog/writing" element={<BlogWriting />} />
            <Route path="/blog/seo" element={<BlogSEO />} />
            <Route path="/blog/image" element={<BlogImage />} />
            <Route path="/blog/daily" element={<BlogDaily />} />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
