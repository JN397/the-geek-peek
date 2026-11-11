import { useState } from 'react';
import { ShoppingCart, Search, Calendar, Layers, ShieldCheck, Phone } from 'lucide-react';
import productsData from './data/products.json';

// 1. Define what properties a Product item must have (TypeScript Interface)
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}

export default function App() {
  // 2. Establish your reactive application state engines
  const [products, setProducts] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans antialiased">
      {/* 🌐 Master Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo Anchor */}
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-violet-500" />
            <span className="font-black tracking-wider text-xl">THE GEEK PEEK</span>
          </div>

          {/* Search Plumbing Placeholder */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 w-80">
            <Search className="h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search catalog..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-slate-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Action Interface Basket Toggles */}
          <button className="flex items-center gap-2 bg-violet-600 px-4 py-2 rounded-lg text-sm font-bold">
            <ShoppingCart className="h-4 w-4" />
            <span>Cart ({cart.length})</span>
          </button>

        </div>
      </header>

      {/* 🏟️ Main Application Content Arena */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-2">Welcome to The Geek Peek Redesign</h1>
        </div>

        {/* Product Grid Area Placeholder */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card elements will be dynamically mapped here later */}
        </section>
      </main>

      {/* 🗺️ Fixed Footer Information Frame */}
      <footer className="border-t border-slate-800 bg-slate-950 p-6 text-center text-xs text-slate-500">
        <p>© 2026 The Geek Peek Redesign Concept Portfolio Asset.</p>
      </footer>
    </div>
  );
}

  