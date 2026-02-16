import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X, Instagram, Facebook, Twitter, Search } from 'lucide-react';

const EvrydaeHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'T-SHIRTS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'JEANS', image: 'https://images.unsplash.com/photo-1542272617-08f083d03341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'SHOES', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const newArrivals = [
        { name: 'Oversized Tee - Black', price: '₹1,499', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Cargo Pants - Olive', price: '₹2,999', image: 'https://images.unsplash.com/photo-1552902885-0b1a0e051381?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Chunky Sneakers', price: '₹4,499', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Varsity Jacket', price: '₹3,999', image: 'https://images.unsplash.com/photo-1551028919-ac7fa7a40aaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    ];

    return (
        <div className="font-sans bg-white text-black min-h-screen">
            {/* Top Bar - Express Shipping */}
            <div className="bg-black text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase py-2 text-center">
                Express Shipping
            </div>

            {/* Main Navigation */}
            <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'} text-black border-b border-gray-100`}>
                <div className="container mx-auto px-6 h-20 flex justify-between items-center relative">

                    {/* Left Layout (Desktop) */}
                    <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
                        <a href="#" className="hover:opacity-60 transition-opacity">T-Shirts</a>
                        <a href="#" className="hover:opacity-60 transition-opacity">Jeans</a>
                        <div className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity group relative">
                            <span>Shoes</span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
                        <Menu size={24} />
                    </button>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase font-mono">EVRYDAE</span>
                    </div>

                    {/* Right Layout */}
                    <div className="flex items-center gap-6 md:gap-8 text-xs font-bold tracking-widest uppercase">
                        <a href="#" className="hidden md:block hover:opacity-60 transition-opacity">Search</a>
                        <a href="#" className="hidden md:block hover:opacity-60 transition-opacity">Login</a>
                        <a href="#" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                            <ShoppingBag size={18} />
                            <span>Cart</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <span className="text-xl font-bold tracking-widest uppercase">MENU</span>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-8 flex flex-col gap-6 text-2xl font-light tracking-wide uppercase">
                    <a href="#" className="hover:text-gray-500 transition-colors">New Arrivals</a>
                    <a href="#" className="hover:text-gray-500 transition-colors">Shop All</a>
                    <a href="#" className="hover:text-gray-500 transition-colors">Collections</a>
                    <a href="#" className="hover:text-gray-500 transition-colors">About</a>
                    <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    {/* Placeholder for Video/Image */}
                    <img
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 text-center px-4 animate-fade-in-up text-white">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
                        Elevated<br />Essentials
                    </h1>
                    <p className="text-lg md:text-xl tracking-[0.3em] font-light mb-10 text-gray-200">
                        Redefining Modern Streetwear
                    </p>
                    <button className="bg-white text-black px-10 py-4 font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 px-4 md:px-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[80vh] md:h-[60vh]">
                    {categories.map((cat, index) => (
                        <div key={index} className="group relative overflow-hidden h-full cursor-pointer bg-gray-100">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                            <div className="absolute bottom-6 left-6 z-10 text-white">
                                <h3 className="text-2xl font-bold tracking-tighter uppercase">{cat.name}</h3>
                                <div className="w-8 group-hover:w-full h-0.5 bg-white transition-all duration-300 mt-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-2">Latest Drop</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">This Week's Heat</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newArrivals.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <button className="absolute bottom-0 left-0 w-full py-4 bg-black text-white font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            <h3 className="text-lg font-bold tracking-wide uppercase">{item.name}</h3>
                            <p className="text-gray-500 mt-1">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold tracking-widest uppercase mb-6">Evrydae</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Elevated essentials for the modern wardrobe. Designed for comfort, styled for impact.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold tracking-widest uppercase mb-6 text-sm">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold tracking-widest uppercase mb-6 text-sm">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold tracking-widest uppercase mb-6 text-sm">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive drops and updates.</p>
                        <div className="flex border-b border-white/20 pb-2">
                            <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent w-full text-sm outline-none placeholder-gray-500 text-white" />
                            <button className="text-sm font-bold tracking-widest uppercase hover:text-gray-400">Join</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-white/10">
                    <p>&copy; 2026 EVRYDAE Retail Private Limited. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EvrydaeHome;
