import React, { useState, useEffect } from 'react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  tag?: string;
  tagStyle?: 'primary' | 'light';
  category: 'kit' | 'bowl' | 'side';
  description: string;
  image: string;
  prepTime?: string;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
  spiceLevel: string;
  sideAddOn: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  favoriteBowl: string;
}

const IMG_CATFISH_HERO = '/src/assets/images/hero_catfish_peppersoup_1794232337932.jpg';
const IMG_GOAT_UKODO = '/src/assets/images/goat_meat_ukodo_bowl_1794232339294.jpg';
const IMG_SPICE_KIT = '/src/assets/images/peppersoup_spice_kit_1794232341067.jpg';
const IMG_CHEF_KITCHEN = '/src/assets/images/nigerian_chef_peppersoup_1794232344298.jpg';
const IMG_TOPVIEW_ASSORTED = '/src/assets/images/topview_assorted_peppersoup_1794232343159.jpg';

const TOP_PICKS: MenuItem[] = [
  {
    id: 'odu-spice-kit',
    name: 'Niger-Delta Spice & Broth Kit',
    price: 9500,
    tag: 'Best Seller',
    tagStyle: 'primary',
    category: 'kit',
    description:
      'Fire-roasted Ehuru (calabash nutmeg), whole Uda pods, crushed Uziza seeds, dried Ata Rodo flakes, and our concentrated aromatic broth base for 4 bowls at home.',
    image: IMG_SPICE_KIT,
    prepTime: 'Ready in 5 mins',
  },
  {
    id: 'warri-goat-ukodo',
    name: 'Warri Goat Meat Ukodo',
    price: 12500,
    tag: 'Fiery',
    tagStyle: 'light',
    category: 'bowl',
    description:
      'Slow-braised tender goat meat simmered with sweet Puna yam cubes in a rich, fiery uziza and lemongrass pepper soup broth, finished with fresh efirin.',
    image: IMG_GOAT_UKODO,
    prepTime: 'Served piping hot',
  },
  {
    id: 'assorted-bokoto-bowl',
    name: 'Assorted & Bokoto Special',
    price: 11000,
    tag: 'Crowd Favorite',
    tagStyle: 'light',
    category: 'bowl',
    description:
      ' gelatinous cow foot (bokoto), honeycomb shaki, and tender beef cuts slow-cooked in a medicinal uda & scent-leaf broth with boiled green plantain.',
    image: IMG_TOPVIEW_ASSORTED,
    prepTime: 'Collagen Rich',
  },
];

const FULL_MENU_ITEMS: MenuItem[] = [
  ...TOP_PICKS,
  {
    id: 'point-and-kill-catfish',
    name: 'Point & Kill Catfish Bowl',
    price: 13500,
    tag: 'Signature',
    tagStyle: 'primary',
    category: 'bowl',
    description:
      'Freshly dressed whole middle-cut catfish simmered in a light, aromatic scent-leaf, ata rodo, and roasted ehuru broth. Never fishy—pure clean heat.',
    image: IMG_CATFISH_HERO,
  },
  {
    id: 'spicy-ram-suya-broth',
    name: 'Smoky Ram & Uziza Broth',
    price: 12000,
    tag: 'Late Night Hit',
    tagStyle: 'light',
    category: 'bowl',
    description:
      'Charcoal-seared boneless ram meat dropped into a bubbling pot of black uziza and alligator pepper infusion.',
    image: IMG_GOAT_UKODO,
  },
  {
    id: 'local-fowl-peppersoup',
    name: 'Old-Layer Native Chicken Soup',
    price: 11500,
    tag: 'Comfort Cure',
    tagStyle: 'light',
    category: 'bowl',
    description:
      'Free-range native fowl slow-boiled for deep stock flavor, infused with utazi, ginger, and scent leaf—the ultimate rainy-night or cold remedy.',
    image: IMG_TOPVIEW_ASSORTED,
  },
  {
    id: 'weekend-cooler-kit',
    name: '2-Litre Weekend Cooler Pack',
    price: 28000,
    tag: 'Host Pack',
    tagStyle: 'primary',
    category: 'kit',
    description:
      '2 litres of assorted goat meat & cow leg pepper soup sealed hot with extra spice sachet and 4 wraps of soft white agidi.',
    image: IMG_SPICE_KIT,
  },
  {
    id: 'agidi-plantain-side',
    name: 'Warm Agidi & Boiled Plantain Combo',
    price: 3500,
    category: 'side',
    description:
      'Two leaf-wrapped fermented corn jellies (Agidi/Eko) paired with sweet-firm boiled semi-ripe plantain rounds.',
    image: IMG_TOPVIEW_ASSORTED,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chinedu Okafor',
    role: 'Victoria Island, Lagos',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      '"That Point & Kill Catfish broth is pure medicine. After a long Friday night in VI traffic, nothing resets your brain like their 12 AM scent-leaf steam."',
    rating: 5,
    favoriteBowl: 'Point & Kill Catfish Bowl',
  },
  {
    id: '2',
    name: 'Tolu Adeyemi',
    role: 'Lekki Phase 1, Lagos',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      '"The Warri Goat Meat Ukodo tastes like my grandmother made it in Sapele. The yam cubes soak up all the ehuru and uziza spice—10/10 every single time."',
    rating: 5,
    favoriteBowl: 'Warri Goat Meat Ukodo',
  },
  {
    id: '3',
    name: 'Halima Bello',
    role: 'Wuse 2, Abuja',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      '"I stock their Niger-Delta Spice & Broth Kit in my pantry permanently. In 5 minutes I have authentic lounge-grade pepper soup ready at home."',
    rating: 5,
    favoriteBowl: 'Niger-Delta Spice & Broth Kit',
  },
  {
    id: '4',
    name: 'Efe Omoregie',
    role: 'Ikeja GRA, Lagos',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote:
      '"Their Assorted & Bokoto bowl with soft white agidi hits differently when it rains in Lagos. Dispatch arrived in 25 minutes still bubbling hot."',
    rating: 5,
    favoriteBowl: 'Assorted & Bokoto Special',
  },
];

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

function SafeImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-neutral-surface flex flex-col items-center justify-center text-brand-primary p-4 text-center ${className}`}
      >
        <i className="fas fa-bowl-food text-2xl mb-1" />
        <span className="font-primary text-xs uppercase tracking-wider text-text-primary">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function App() {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    {
      item: TOP_PICKS[0],
      quantity: 1,
      spiceLevel: 'Lagos Standard (Medium-Hot)',
      sideAddOn: 'Warm Leaf Agidi (+₦1,500)',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Active modals
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuCategoryFilter, setMenuCategoryFilter] = useState<'all' | 'bowl' | 'kit' | 'side'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState<string | null>(null);
  const [resDate, setResDate] = useState('Tonight');
  const [resTime, setResTime] = useState('11:30 PM');
  const [resGuests, setResGuests] = useState('4 Guys / Babes');
  const [resSeating, setResSeating] = useState('Outdoor Breeze Lounge (Lekki)');
  const [resName, setResName] = useState('');
  const [resPhone, setResPhone] = useState('');

  const [isRewardsModalOpen, setIsRewardsModalOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [rewardsJoined, setRewardsJoined] = useState(false);

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Scent Leaf & Spice Simmer Timer (180s / 3-minute infusion timer)
  const [timerSeconds, setTimerSeconds] = useState(180);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Testimonial carousel index
  const [testimonialStartIndex, setTestimonialStartIndex] = useState(0);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  // Scroll animation observer matching original HTML script
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll('[data-animation-on-scroll]');
    elements.forEach((el) => {
      el.classList.add('animate-on-scroll-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 180-second (3 min) Scent Leaf & Spice Infusion countdown timer
  useEffect(() => {
    if (!isTimerRunning) return;
    if (timerSeconds <= 0) {
      setIsTimerRunning(false);
      triggerToast('3 minutes up! Drop your fresh scent leaf (efirin) now and turn off the heat.');
      return;
    }
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const addToCart = (
    item: MenuItem,
    spiceLevel = 'Lagos Standard (Medium-Hot)',
    sideAddOn = 'None'
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (c) =>
          c.item.id === item.id &&
          c.spiceLevel === spiceLevel &&
          c.sideAddOn === sideAddOn
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prev, { item, quantity: 1, spiceLevel, sideAddOn }];
    });
    setCheckoutSuccess(null);
    triggerToast(`Added ${item.name} (${formatNaira(item.price)}) to your bag`);
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      const nextQty = updated[index].quantity + delta;
      if (nextQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index] = { ...updated[index], quantity: nextQty };
      return updated;
    });
  };

  const totalCartItems = cart.reduce((acc, c) => acc + c.quantity, 0);
  const cartSubtotal = cart.reduce((acc, c) => {
    const sideExtra = c.sideAddOn.includes('+₦1,500') ? 1500 : 0;
    return acc + (c.item.price + sideExtra) * c.quantity;
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const orderNum = `PSR-${Math.floor(1000 + Math.random() * 9000)}`;
    setCheckoutSuccess(orderNum);
    setCart([]);
    triggerToast(`Order #${orderNum} confirmed! Dispatch rider assigned.`);
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `VIP-${Math.floor(100 + Math.random() * 900)}`;
    setReservationSuccess(code);
    triggerToast(`Lounge Table Reserved (${resTime} · ${resGuests}) — Code #${code}`);
  };

  const handleRewardsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRewardsJoined(true);
    triggerToast('Welcome to PepperSoup Republic! Code UZIZA15 unlocked.');
  };

  const nextTestimonial = () => {
    setTestimonialStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialStartIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const visibleTestimonials = [
    TESTIMONIALS[testimonialStartIndex % TESTIMONIALS.length],
    TESTIMONIALS[(testimonialStartIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(testimonialStartIndex + 2) % TESTIMONIALS.length],
  ];

  const filteredMenu = FULL_MENU_ITEMS.filter((item) => {
    const matchesCategory =
      menuCategoryFilter === 'all' || item.category === menuCategoryFilter;
    const matchesQuery =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-secondary bg-white text-text-primary overflow-x-hidden min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-text-primary text-white px-5 py-3 rounded-card shadow-lg flex items-center gap-3 border border-brand-secondary/40">
          <i className="fas fa-pepper-hot text-brand-secondary" />
          <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-2 text-xs cursor-pointer"
            aria-label="Close notification"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white py-5 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex gap-10">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="font-primary font-medium text-sm tracking-widest hover:text-brand-primary transition-colors"
            >
              HOME
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuModalOpen(true);
              }}
              className="font-primary font-medium text-sm tracking-widest hover:text-brand-primary transition-colors"
            >
              MENU
            </a>
          </div>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="font-primary font-bold text-2xl tracking-wider text-text-primary flex items-center gap-3"
          >
            PEPPERSOUP REPUBLIC <i className="fas fa-pepper-hot text-brand-primary" />
          </a>

          <div className="flex items-center gap-10">
            <div className="hidden md:flex gap-10">
              <a
                href="#locations"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('footer-contact');
                }}
                className="font-primary font-medium text-sm tracking-widest hover:text-brand-primary transition-colors"
              >
                LOUNGES
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsReserveModalOpen(true);
                }}
                className="font-primary font-medium text-sm tracking-widest hover:text-brand-primary transition-colors"
              >
                BOOK TABLE
              </a>
            </div>
            <div className="flex items-center gap-5 text-lg">
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen((prev) => !prev);
                  if (!isSearchOpen) setIsMenuModalOpen(true);
                }}
                className="cursor-pointer hover:text-brand-primary transition-colors"
                aria-label="Search menu"
              >
                <i className="fas fa-search" />
              </button>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative cursor-pointer hover:text-brand-primary transition-colors"
                aria-label="Open order bag"
              >
                <i className="fas fa-shopping-bag" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-brand-primary text-white font-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="home" className="max-w-[1200px] mx-auto px-5 pt-5">
        {/* Section 1: Hero Grid */}
        <section className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Main Text Box */}
              <div
                data-animation-on-scroll=""
                className="bg-neutral-surface rounded-card p-8 md:p-12 flex flex-col justify-center h-full"
              >
                <h1 className="font-primary text-[2.8rem] md:text-[3.8rem] leading-[0.95] mb-5 text-text-primary uppercase">
                  Steaming hot uziza &amp; catfish pepper soup till 2:00 AM
                </h1>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[85%] mb-8">
                  Fresh point-and-kill catfish, slow-braised Warri goat meat
                  ukodo, and fire-roasted Ehuru &amp; Uda spices. The medicinal
                  late-night comfort you deserve—delivered piping hot across
                  Lagos &amp; Abuja or served fresh at our breeze lounge.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setIsMenuModalOpen(true)}
                    className="font-primary font-bold text-sm tracking-wider px-8 py-3 border-2 border-text-primary bg-text-primary text-white hover:bg-transparent hover:text-text-primary transition-all uppercase cursor-pointer"
                  >
                    Order Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsStoryModalOpen(true)}
                    className="font-primary font-bold text-sm tracking-wider px-8 py-3 border-2 border-text-primary bg-transparent text-text-primary hover:bg-text-primary hover:text-white transition-all uppercase cursor-pointer"
                  >
                    Our Roots
                  </button>
                </div>
              </div>

              {/* Sub Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sub Box 1: Spice & Broth Kits */}
                <div
                  data-animation-on-scroll=""
                  onClick={() => {
                    setMenuCategoryFilter('kit');
                    setIsMenuModalOpen(true);
                  }}
                  className="bg-brand-secondary rounded-card p-6 min-h-[200px] relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <h3 className="font-primary text-[1.8rem] leading-[0.9] text-text-primary z-10 relative">
                    SPICE &amp; BROTH
                    <br />
                    KITS
                  </h3>
                  <div className="w-9 h-9 border-2 border-text-primary rounded-full flex items-center justify-center text-text-primary z-10 group-hover:bg-text-primary group-hover:text-white transition-colors">
                    <i className="fas fa-arrow-up transform rotate-45" />
                  </div>
                  <SafeImage
                    src={IMG_SPICE_KIT}
                    className="absolute -bottom-4 -right-2 w-36 h-32 object-cover rounded-lg transform -rotate-12 transition-transform group-hover:rotate-0 shadow-md"
                    alt="Pepper Soup Spice Kit"
                  />
                </div>

                {/* Sub Box 2: Reserve Lounge Table */}
                <div
                  data-animation-on-scroll=""
                  onClick={() => {
                    setReservationSuccess(null);
                    setIsReserveModalOpen(true);
                  }}
                  className="bg-brand-primary rounded-card p-6 min-h-[200px] relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <h3 className="font-primary text-[1.8rem] leading-[0.9] text-white z-10 relative">
                    RESERVE
                    <br />
                    LOUNGE SPOT
                  </h3>
                  <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center text-white z-10 group-hover:bg-white group-hover:text-brand-primary transition-colors">
                    <i className="fas fa-arrow-up transform rotate-45" />
                  </div>
                  <SafeImage
                    src={IMG_GOAT_UKODO}
                    className="absolute -bottom-4 -right-2 w-36 h-32 object-cover rounded-lg transform -rotate-12 transition-transform group-hover:rotate-0 shadow-md"
                    alt="Reserve Lounge Table"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Hero Claypot Catfish Pepper Soup Image) */}
            <div className="hidden lg:block bg-gray-200 rounded-card overflow-hidden relative">
              <SafeImage
                src={IMG_CATFISH_HERO}
                className="w-full h-full object-cover"
                alt="Steaming Claypot Catfish Pepper Soup"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Made with Tradition */}
        <section id="tradition-section" className="mb-5">
          {/* Header Bar */}
          <div className="bg-neutral-surface rounded-card px-5 py-3 flex justify-between items-center text-brand-primary font-primary font-bold text-base tracking-wide uppercase mb-4">
            <span>Niger-Delta Heritage &amp; Indigenous Spices</span>
            <button
              type="button"
              onClick={() => {
                setMenuCategoryFilter('all');
                setIsMenuModalOpen(true);
              }}
              className="cursor-pointer hover:underline uppercase font-primary font-bold text-base tracking-wide"
            >
              See All Menu
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-4 items-stretch">
            {/* Left: 4 Nigerian Craft Pillars */}
            <div className="grid grid-cols-2 gap-2 h-full">
              {/* Feature 1 */}
              <div className="bg-neutral-surface rounded-card p-4 flex flex-col justify-between h-full min-h-[160px]">
                <i className="fas fa-seedling text-brand-primary text-xl mb-3" />
                <div>
                  <h4 className="font-primary text-sm leading-tight mb-2 uppercase">
                    Fresh Efirin
                    <br />
                    &amp; Uziza
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Hand-plucked scent leaf and wild black uziza leaves dropped
                    in at the final boil for unmistakable aroma.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-neutral-surface rounded-card p-4 flex flex-col justify-between h-full min-h-[160px]">
                <i className="fas fa-fire text-brand-primary text-xl mb-3" />
                <div>
                  <h4 className="font-primary text-sm leading-tight mb-2 uppercase">
                    Roasted Ehuru
                    <br />
                    &amp; Uda Pods
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Whole calabash nutmeg and negro pepper pods toasted over
                    charcoal and stone-ground fresh daily.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-neutral-surface rounded-card p-4 flex flex-col justify-between h-full min-h-[160px]">
                <i className="fas fa-fish text-brand-primary text-xl mb-3" />
                <div>
                  <h4 className="font-primary text-sm leading-tight mb-2 uppercase">
                    Point &amp; Kill
                    <br />
                    Freshness
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Live tank catfish and farm-fresh goat cuts dressed to order
                    so every bowl stays firm and sweet.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="bg-neutral-surface rounded-card p-4 flex flex-col justify-between h-full min-h-[160px]">
                <i className="fas fa-heart text-brand-primary text-xl mb-3" />
                <div>
                  <h4 className="font-primary text-sm leading-tight mb-2 uppercase">
                    Agbo-Level
                    <br />
                    Vitality
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Zero artificial Maggi overload—pure natural heat that clears
                    sinuses, warms the chest, and revives the body.
                  </p>
                </div>
              </div>
            </div>

            {/* Center: Nigerian Chef Ladling Pepper Soup */}
            <div className="bg-brand-secondary rounded-card overflow-hidden relative min-h-[300px] h-full">
              <SafeImage
                src={IMG_CHEF_KITCHEN}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Nigerian Chef Ladling Steaming Pepper Soup"
              />
            </div>

            {/* Right: Menu Highlights */}
            <div className="flex flex-col gap-2 h-full">
              <div
                onClick={() => addToCart(FULL_MENU_ITEMS[3])}
                className="bg-neutral-surface rounded-card p-4 flex items-center justify-between gap-4 flex-1 cursor-pointer hover:bg-brand-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <SafeImage
                      src={IMG_CATFISH_HERO}
                      className="w-full h-full object-cover"
                      alt="Point & Kill Catfish"
                    />
                  </div>
                  <div>
                    <h4 className="font-primary text-sm font-bold uppercase">
                      Point &amp; Kill Catfish
                    </h4>
                    <p className="text-xs text-text-secondary">
                      Fresh middle cut, efirin, ata rodo.
                    </p>
                  </div>
                </div>
                <span className="font-primary text-xs font-bold text-brand-primary opacity-80 group-hover:opacity-100 whitespace-nowrap">
                  + ₦13,500
                </span>
              </div>

              <div
                onClick={() => addToCart(TOP_PICKS[1])}
                className="bg-neutral-surface rounded-card p-4 flex items-center justify-between gap-4 flex-1 cursor-pointer hover:bg-brand-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <SafeImage
                      src={IMG_GOAT_UKODO}
                      className="w-full h-full object-cover"
                      alt="Goat Meat Ukodo"
                    />
                  </div>
                  <div>
                    <h4 className="font-primary text-sm font-bold uppercase">
                      Warri Goat Ukodo
                    </h4>
                    <p className="text-xs text-text-secondary">
                      Braised goat meat, puna yam, uziza.
                    </p>
                  </div>
                </div>
                <span className="font-primary text-xs font-bold text-brand-primary opacity-80 group-hover:opacity-100 whitespace-nowrap">
                  + ₦12,500
                </span>
              </div>

              <div
                onClick={() => addToCart(TOP_PICKS[2])}
                className="bg-neutral-surface rounded-card p-4 flex items-center justify-between gap-4 flex-1 cursor-pointer hover:bg-brand-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <SafeImage
                      src={IMG_TOPVIEW_ASSORTED}
                      className="w-full h-full object-cover"
                      alt="Assorted & Bokoto"
                    />
                  </div>
                  <div>
                    <h4 className="font-primary text-sm font-bold uppercase">
                      Assorted &amp; Bokoto
                    </h4>
                    <p className="text-xs text-text-secondary">
                      Cow foot, shaki, utazi, green plantain.
                    </p>
                  </div>
                </div>
                <span className="font-primary text-xs font-bold text-brand-primary opacity-80 group-hover:opacity-100 whitespace-nowrap">
                  + ₦11,000
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Statement Banner */}
        <section
          data-animation-on-scroll=""
          className="mb-5 bg-accent-teal rounded-card p-10 text-center"
        >
          <h2 className="font-primary text-2xl md:text-3xl leading-snug text-text-primary uppercase">
            PepperSoup Republic{' '}
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-primary text-white mx-1 align-middle text-lg">
              <i className="fas fa-pepper-hot" />
            </span>{' '}
            is warm, medicinal, and unapologetically Nigerian — a late-night
            sanctuary where{' '}
            <i className="fas fa-star text-brand-secondary" /> smoky clay pots,
            cold palm wine, and ancestral spices come alive.
          </h2>
        </section>

        {/* Section 4: Top Picks Just For You */}
        <section id="top-picks" className="mb-5">
          <div className="bg-brand-primary text-white text-center py-3 rounded-t-card font-primary font-bold tracking-widest uppercase">
            Top Picks From Our Clay Pots.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {TOP_PICKS.map((product) => (
              <div
                key={product.id}
                data-animation-on-scroll=""
                className="bg-neutral-surface rounded-card p-6 flex flex-col relative group"
              >
                {product.tag && (
                  <div
                    className={`absolute top-5 left-5 text-[0.7rem] font-bold px-2 py-1 uppercase tracking-wider z-10 ${
                      product.tagStyle === 'primary'
                        ? 'bg-brand-primary text-white'
                        : 'bg-white text-text-primary'
                    }`}
                  >
                    {product.tag}
                  </div>
                )}
                <div className="h-64 w-full rounded-card overflow-hidden mb-4 bg-white">
                  <SafeImage
                    src={product.image}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={product.name}
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="font-primary text-xl mb-2 text-text-primary uppercase">
                    {product.name}
                  </h4>
                  <p className="text-xs text-text-secondary mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-black/10">
                    <span className="font-primary font-bold text-lg tabular-nums">
                      {formatNaira(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="bg-transparent border border-text-primary px-4 py-1.5 text-xs font-bold uppercase hover:bg-text-primary hover:text-white transition-colors cursor-pointer"
                    >
                      Buy Now <i className="fas fa-arrow-right ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Late-Night Promo Split */}
        <section className="mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[400px]">
            <div
              data-animation-on-scroll=""
              className="bg-brand-primary rounded-card p-12 text-white flex flex-col justify-center relative overflow-hidden"
            >
              <h2 className="font-primary text-4xl md:text-5xl leading-[0.92] mb-6 uppercase">
                Rainy Night or Friday Chill? We Dey For You.
              </h2>
              <p className="text-sm font-secondary opacity-90 max-w-[85%] mb-8 leading-relaxed">
                Open till 2:00 AM in Lekki, Victoria Island, Ikeja GRA &amp;
                Wuse 2. Order our sealed 2-Litre weekend cooler packs or stock
                up on roasted Ehuru &amp; Uda spice kits for your kitchen.
              </p>
              <button
                type="button"
                onClick={() => {
                  setMenuCategoryFilter('kit');
                  setIsMenuModalOpen(true);
                }}
                className="border-2 border-white text-white px-8 py-2.5 rounded-full font-primary font-bold uppercase tracking-wide bg-transparent hover:bg-white hover:text-brand-primary transition-colors w-fit cursor-pointer z-10"
              >
                Shop Spice &amp; Cooler Kits
              </button>

              {/* Deco Circles */}
              <div className="absolute -bottom-12 right-6 flex pointer-events-none">
                <div className="w-32 h-32 bg-brand-secondary rounded-full -mr-10" />
                <div className="w-32 h-32 bg-brand-secondary rounded-full" />
              </div>
            </div>

            <div className="rounded-card overflow-hidden h-[300px] md:h-auto">
              <SafeImage
                src={IMG_GOAT_UKODO}
                className="w-full h-full object-cover"
                alt="Goat Meat Ukodo Pepper Soup"
              />
            </div>
          </div>
        </section>

        {/* Section 6: What Our Customers Say */}
        <section className="mb-5">
          <div className="bg-neutral-surface text-center text-brand-primary font-bold font-primary p-4 rounded-t-card border-b-2 border-black/5 uppercase tracking-wide">
            What Lagos &amp; Abuja Regulars Say
          </div>
          <div className="bg-neutral-surface rounded-b-card p-10 sm:p-14 relative">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-brand-primary transition-colors"
            >
              <i className="fas fa-chevron-left" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visibleTestimonials.map((user, idx) => (
                <div
                  key={`${user.id}-${idx}`}
                  className={`flex flex-col items-center text-center ${
                    idx > 0 ? 'hidden md:flex' : 'flex'
                  }`}
                >
                  <SafeImage
                    src={user.avatar}
                    className="w-12 h-12 rounded-full object-cover mb-3 shadow-sm"
                    alt={user.name}
                  />
                  <h5 className="font-primary text-sm font-bold uppercase">
                    {user.name}
                  </h5>
                  <span className="text-[11px] text-brand-primary font-medium mb-2">
                    {user.role}
                  </span>
                  <p className="text-xs text-text-secondary italic mb-3 leading-relaxed">
                    {user.quote}
                  </p>
                  <div className="text-brand-secondary text-xs space-x-0.5">
                    {Array.from({ length: user.rating }).map((_, starIdx) => (
                      <i key={starIdx} className="fas fa-star" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-brand-primary transition-colors"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </section>

        {/* Section 7: WhatsApp Opt-in Banner */}
        <section
          data-animation-on-scroll=""
          className="mb-5 bg-brand-primary rounded-card p-10 text-center text-white relative overflow-hidden flex flex-col items-center justify-center"
        >
          <span className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-brand-secondary rounded-full pointer-events-none" />
          <span className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-brand-secondary rounded-full pointer-events-none" />

          <h2 className="relative z-10 font-primary text-3xl mb-3 uppercase">
            Opt in for Friday Night Broth Alerts &amp; VIP Perks{' '}
            <br className="hidden md:block" /> delivered straight to your WhatsApp
          </h2>
          <p className="relative z-10 text-sm opacity-80 mb-6 font-secondary">
            Zero spam. Just fresh point-and-kill alerts, free Agidi vouchers, and rainy-day dispatch priority.
          </p>
          <button
            type="button"
            onClick={() => setIsRewardsModalOpen(true)}
            className="relative z-10 bg-neutral-surface text-text-primary border-none px-8 py-3 rounded-pill font-primary font-bold uppercase cursor-pointer hover:scale-105 transition-transform"
          >
            Join PepperSoup Republic Club
          </button>
        </section>

        {/* Section 8: Bottom 3-Column Preparation & Rewards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[320px]">
          {/* Left: Home Spice Kit Prep & 3-Min Scent Leaf Timer */}
          <div className="bg-accent-teal rounded-card p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-teal-dark text-xl">
                <i className="fas fa-mortar-pestle" />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (isTimerRunning) {
                    setIsTimerRunning(false);
                  } else {
                    if (timerSeconds === 0) setTimerSeconds(180);
                    setIsTimerRunning(true);
                  }
                }}
                className="bg-accent-teal-dark text-white px-3.5 py-1.5 rounded-full font-primary text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <i className={`fas ${isTimerRunning ? 'fa-pause' : 'fa-stopwatch'}`} />
                {isTimerRunning
                  ? `${Math.floor(timerSeconds / 60)}:${String(timerSeconds % 60).padStart(2, '0')} Simmer`
                  : timerSeconds < 180 && timerSeconds > 0
                  ? `Resume (${timerSeconds}s)`
                  : '3m Simmer Timer'}
              </button>
            </div>
            <h2 className="text-accent-teal-dark font-primary text-[1.8rem] leading-tight mb-4 uppercase">
              How to brew your
              <br />
              home spice kit?
            </h2>
            <div className="border-t border-black/10 pt-2 space-y-2">
              <div className="border-b border-black/10 pb-2 font-primary text-sm text-accent-teal-dark">
                1. Boil meat or catfish with Odu Broth Base
              </div>
              <div className="border-b border-black/10 pb-2 font-primary text-sm text-accent-teal-dark flex justify-between items-center">
                <span>2. Simmer roasted Ehuru &amp; Uda for 3 mins</span>
                {timerSeconds !== 180 && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds(180);
                    }}
                    className="text-xs underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="pt-0 font-primary text-sm text-accent-teal-dark">
                3. Toss in torn Scent Leaf &amp; serve with Agidi
              </div>
            </div>
          </div>

          {/* Center (Top View Assorted & Bokoto Image) */}
          <div className="rounded-card overflow-hidden h-[300px] md:h-auto">
            <SafeImage
              src={IMG_TOPVIEW_ASSORTED}
              className="w-full h-full object-cover"
              alt="Top View Assorted & Bokoto Pepper Soup with Boiled Plantain"
            />
          </div>

          {/* Right: Rewards Program CTA */}
          <div className="bg-accent-teal-dark rounded-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden text-white">
            <div className="absolute -top-5 -right-5 w-[100px] h-[100px] border-[20px] border-white/20 rounded-full pointer-events-none" />
            <h2 className="relative z-10 font-primary text-2xl uppercase mb-6 leading-snug">
              Get Free Warm Agidi
              <br />
              On Your First Order
            </h2>
            <button
              type="button"
              onClick={() => setIsRewardsModalOpen(true)}
              className="relative z-10 bg-white text-text-primary px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-brand-secondary transition-colors uppercase cursor-pointer"
            >
              Claim Voucher <i className="fas fa-arrow-circle-right" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="footer-contact"
        className="bg-footer-bg text-gray-300 pt-16 pb-10 mt-10 rounded-t-card"
      >
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="text-center text-white font-primary text-4xl mb-10 pb-5 border-b border-white/10">
            GET IN TOUCH
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 text-center md:text-left">
            {/* Address */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                <strong className="text-white">Plot 14, Admiralty Way,</strong>
                <br />
                Lekki Phase 1, Lagos (Also in VI, Ikeja GRA &amp; Wuse 2)
                <br />
                Nigeria · Open Daily 4:00 PM – 2:00 AM
              </p>
              <div className="flex justify-center md:justify-start gap-4 text-white">
                <button
                  type="button"
                  onClick={() => triggerToast('Follow @PepperSoupRepublicNG on Instagram')}
                  className="hover:text-brand-secondary cursor-pointer transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </button>
                <button
                  type="button"
                  onClick={() => triggerToast('Follow @PepperSoupRep on X / Twitter')}
                  className="hover:text-brand-secondary cursor-pointer transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  onClick={() => triggerToast('Chat with our Dispatch Desk on WhatsApp')}
                  className="hover:text-brand-secondary cursor-pointer transition-colors"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp" />
                </button>
              </div>
            </div>

            {/* Mascot */}
            <div className="text-5xl text-white">
              <i className="fas fa-pepper-hot" />
            </div>

            {/* Links */}
            <ul className="flex gap-16 text-right text-sm">
              <div className="space-y-2">
                <li
                  onClick={() => setIsStoryModalOpen(true)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Our Roots
                </li>
                <li
                  onClick={() => {
                    setMenuCategoryFilter('all');
                    setIsMenuModalOpen(true);
                  }}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  All Bowls &amp; Kits
                </li>
                <li
                  onClick={() => setIsReserveModalOpen(true)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Book Lounge
                </li>
                <li
                  onClick={() => scrollToSection('tradition-section')}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Spice Guide
                </li>
              </div>
              <div className="space-y-2">
                <li
                  onClick={() => triggerToast('Lagos & Abuja Express Dispatch in insulated thermal pots.')}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Dispatch Zones
                </li>
                <li
                  onClick={() => triggerToast('100% Hot-Bowl Guarantee on all deliveries.')}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Refund Policy
                </li>
                <li
                  onClick={() => setIsStoryModalOpen(true)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  FAQs
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>

      {/* Shopping Bag Slide-Over Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div className="bg-neutral-surface-light w-full max-w-md h-full flex flex-col justify-between p-6 overflow-y-auto shadow-2xl">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-black/10">
                <h3 className="font-primary text-2xl uppercase text-text-primary flex items-center gap-2">
                  <i className="fas fa-shopping-bag text-brand-primary" /> Your Order Bag
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-surface flex items-center justify-center text-text-primary hover:bg-brand-primary hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              {checkoutSuccess ? (
                <div className="my-8 bg-accent-teal/40 border border-accent-teal-dark/30 rounded-card p-6 text-center">
                  <div className="w-12 h-12 bg-accent-teal-dark text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                    <i className="fas fa-check" />
                  </div>
                  <h4 className="font-primary text-xl uppercase text-accent-teal-dark mb-1">
                    Order #{checkoutSuccess} Confirmed
                  </h4>
                  <p className="text-xs text-text-secondary mb-4">
                    Our kitchen in Lekki Phase 1 is sealing your steaming claypot bowl right now. Dispatch rider will call you on arrival (25–35 mins).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCheckoutSuccess(null);
                      setIsCartOpen(false);
                    }}
                    className="bg-brand-primary text-white font-primary text-xs uppercase px-6 py-2.5 rounded-pill cursor-pointer"
                  >
                    Back to Storefront
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-16 text-center">
                  <i className="fas fa-pepper-hot text-4xl text-brand-primary/40 mb-3" />
                  <p className="font-primary text-lg uppercase text-text-primary mb-1">
                    Your Bag is Empty
                  </p>
                  <p className="text-xs text-text-secondary mb-6">
                    Add a Point &amp; Kill Catfish bowl, Goat Meat Ukodo, or Spice Kit to get started.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsMenuModalOpen(true);
                    }}
                    className="bg-text-primary text-white font-primary text-xs uppercase px-6 py-2.5 cursor-pointer"
                  >
                    Explore Full Menu
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-black/10 my-4">
                  {cart.map((entry, idx) => (
                    <div key={`${entry.item.id}-${idx}`} className="py-4 flex gap-4 items-center">
                      <SafeImage
                        src={entry.item.image}
                        alt={entry.item.name}
                        className="w-16 h-16 rounded-card object-cover bg-neutral-surface flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-primary text-sm uppercase font-bold text-text-primary">
                          {entry.item.name}
                        </h4>
                        <p className="text-[11px] text-text-secondary">
                          {entry.spiceLevel} · {entry.sideAddOn}
                        </p>
                        <span className="font-primary text-sm font-bold text-brand-primary tabular-nums">
                          {formatNaira(entry.item.price)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(idx, -1)}
                          className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center text-xs hover:bg-text-primary hover:text-white cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-primary text-sm w-5 text-center tabular-nums">
                          {entry.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(idx, 1)}
                          className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center text-xs hover:bg-text-primary hover:text-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && !checkoutSuccess && (
              <form onSubmit={handleCheckout} className="border-t border-black/10 pt-4 space-y-3">
                <div className="bg-neutral-surface p-3 rounded-card space-y-2">
                  <p className="font-primary text-xs uppercase tracking-wider text-brand-primary">
                    Instant Dispatch (Lagos &amp; Abuja) / Lounge Pickup
                  </p>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full bg-white px-3 py-2 text-xs rounded border border-black/10 focus:outline-none focus:border-brand-primary"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Phone / WhatsApp for Dispatch Rider (e.g. 0803...)"
                    className="w-full bg-white px-3 py-2 text-xs rounded border border-black/10 focus:outline-none focus:border-brand-primary"
                  />
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery Address (Lekki, VI, Ikeja, Wuse 2) or Pickup"
                    className="w-full bg-white px-3 py-2 text-xs rounded border border-black/10 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Subtotal ({totalCartItems} items)</span>
                  <span className="font-primary font-bold text-lg tabular-nums">
                    {formatNaira(cartSubtotal)}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-primary text-white font-primary font-bold uppercase tracking-wider text-sm rounded-card hover:bg-text-primary transition-colors cursor-pointer"
                >
                  Confirm Order (Transfer / Card / POD) · {formatNaira(cartSubtotal)}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Full Menu & Search Modal */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-neutral-surface-light rounded-card max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="bg-brand-primary text-white px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="font-primary text-2xl uppercase tracking-wide">
                  PepperSoup Republic Full Menu &amp; Spice Kits
                </h3>
                <p className="text-xs opacity-85">
                  Freshly simmered with Ehuru, Uda &amp; Scent Leaf · Open till 2:00 AM
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-colors cursor-pointer"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 bg-neutral-surface flex flex-col sm:flex-row gap-3 justify-between items-center border-b border-black/10">
              <div className="flex flex-wrap gap-2">
                {(['all', 'bowl', 'kit', 'side'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setMenuCategoryFilter(cat)}
                    className={`px-4 py-1.5 rounded-pill font-primary text-xs uppercase tracking-wider cursor-pointer transition-colors ${
                      menuCategoryFilter === cat
                        ? 'bg-text-primary text-white'
                        : 'bg-white text-text-primary hover:bg-brand-secondary'
                    }`}
                  >
                    {cat === 'all'
                      ? 'All Offerings'
                      : cat === 'bowl'
                      ? 'Hot Pepper Soup Bowls'
                      : cat === 'kit'
                      ? 'Spice & Cooler Kits'
                      : 'Agidi & Sides'}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-xs" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catfish, goat, ukodo, bokoto..."
                  className="w-full bg-white pl-8 pr-3 py-1.5 rounded-pill text-xs border border-black/10 focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Menu Grid */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMenu.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-surface rounded-card p-4 flex gap-4 items-center justify-between"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-card object-cover bg-white flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-primary text-base font-bold uppercase text-text-primary">
                        {item.name}
                      </h4>
                      <span className="font-primary font-bold text-brand-primary text-base tabular-nums whitespace-nowrap">
                        {formatNaira(item.price)}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="bg-text-primary text-white font-primary text-xs uppercase px-4 py-1.5 tracking-wider hover:bg-brand-primary transition-colors cursor-pointer"
                    >
                      + Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reserve Lounge Table Modal */}
      {isReserveModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-neutral-surface rounded-card max-w-md w-full p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setIsReserveModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-brand-primary hover:text-white cursor-pointer"
            >
              <i className="fas fa-times" />
            </button>

            <h3 className="font-primary text-3xl uppercase text-text-primary mb-1">
              Reserve Lounge Table
            </h3>
            <p className="text-xs text-text-secondary mb-6">
              Lekki Phase 1 · Victoria Island · Ikeja GRA · Wuse 2 Abuja
            </p>

            {reservationSuccess ? (
              <div className="bg-accent-teal p-6 rounded-card text-center space-y-3">
                <i className="fas fa-check-circle text-3xl text-accent-teal-dark" />
                <h4 className="font-primary text-xl uppercase text-text-primary">
                  Table Locked · #{reservationSuccess}
                </h4>
                <p className="text-xs text-text-primary">
                  {resDate} at <strong>{resTime}</strong> for <strong>{resGuests}</strong> ({resSeating}).
                </p>
                <button
                  type="button"
                  onClick={() => setIsReserveModalOpen(false)}
                  className="bg-text-primary text-white font-primary text-xs uppercase px-6 py-2.5 rounded-pill cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleReserveSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-primary text-xs uppercase mb-1">
                      Night
                    </label>
                    <select
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded text-xs border border-black/10"
                    >
                      <option>Tonight</option>
                      <option>Tomorrow Night</option>
                      <option>Friday Night Live</option>
                      <option>Saturday Night Chill</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-primary text-xs uppercase mb-1">
                      Time Slot
                    </label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded text-xs border border-black/10"
                    >
                      <option>8:30 PM</option>
                      <option>10:00 PM</option>
                      <option>11:30 PM</option>
                      <option>12:30 AM</option>
                      <option>1:30 AM</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-primary text-xs uppercase mb-1">
                      Squad Size
                    </label>
                    <select
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded text-xs border border-black/10"
                    >
                      <option>1 Solo Bowl</option>
                      <option>2 Guests (Date Night)</option>
                      <option>4 Guys / Babes</option>
                      <option>8+ VIP Cabana Table</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-primary text-xs uppercase mb-1">
                      Lounge Location
                    </label>
                    <select
                      value={resSeating}
                      onChange={(e) => setResSeating(e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded text-xs border border-black/10"
                    >
                      <option>Outdoor Breeze Lounge (Lekki)</option>
                      <option>Victoria Island Rooftop</option>
                      <option>Ikeja GRA Garden Bar</option>
                      <option>Wuse 2 Courtyard (Abuja)</option>
                    </select>
                  </div>
                </div>

                <input
                  type="text"
                  required
                  value={resName}
                  onChange={(e) => setResName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-white px-3 py-2.5 rounded text-xs border border-black/10"
                />
                <input
                  type="tel"
                  required
                  value={resPhone}
                  onChange={(e) => setResPhone(e.target.value)}
                  placeholder="Mobile / WhatsApp Number (080 / 090...)"
                  className="w-full bg-white px-3 py-2.5 rounded text-xs border border-black/10"
                />

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-primary font-bold uppercase py-3 rounded-card tracking-wider hover:bg-text-primary transition-colors cursor-pointer"
                >
                  Confirm Lounge Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* WhatsApp Community & Rewards Modal */}
      {isRewardsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-brand-primary text-white rounded-card max-w-md w-full p-8 relative overflow-hidden text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setIsRewardsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary cursor-pointer"
            >
              <i className="fas fa-times" />
            </button>

            <div className="w-12 h-12 bg-brand-secondary text-text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className="fas fa-pepper-hot" />
            </div>

            <h3 className="font-primary text-3xl uppercase mb-2">
              PepperSoup Republic VIP Club
            </h3>
            <p className="text-xs opacity-90 mb-6 leading-relaxed">
              Get live tank Point &amp; Kill catfish alerts, complimentary warm
              leaf Agidi vouchers, and 15% off our DIY Spice Kits straight to
              your WhatsApp.
            </p>

            {rewardsJoined ? (
              <div className="bg-neutral-surface text-text-primary p-5 rounded-card space-y-2">
                <p className="font-primary text-sm uppercase text-brand-primary">
                  Welcome to the Republic!
                </p>
                <p className="text-xs">
                  Use code <strong className="font-primary">UZIZA15</strong> at checkout for free warm Agidi + 15% off any Spice or Cooler Kit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRewardsSubmit} className="space-y-3">
                <input
                  type="tel"
                  required
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="Enter WhatsApp Number (+234 / 080...)"
                  className="w-full bg-white text-text-primary px-4 py-3 rounded-pill text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-secondary text-text-primary font-primary font-bold uppercase py-3 rounded-pill tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Unlock UZIZA15 Voucher
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Our Roots / Story Modal */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-neutral-surface rounded-card max-w-lg w-full p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-brand-primary hover:text-white cursor-pointer"
            >
              <i className="fas fa-times" />
            </button>
            <span className="text-xs font-primary uppercase tracking-widest text-brand-primary">
              Born in Warri &amp; Lagos · Indigenous Craft
            </span>
            <h3 className="font-primary text-3xl uppercase text-text-primary mt-1 mb-4">
              The Medicinal Heat of Home
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Inspired by the legendary waterside catfish spots of Sapele,
              Warri, and Victoria Island, PepperSoup Republic was built to
              elevate Nigeria&apos;s most beloved comfort broth into a clean,
              dependable late-night culinary experience.
            </p>
            <p className="text-xs text-text-secondary leading-relaxed mb-6">
              We roast whole Ehuru (calabash nutmeg), Uda pods, alligator
              pepper, and black uziza seeds in small batches every afternoon.
              Whether you&apos;re ordering a steaming bowl of Goat Meat Ukodo at
              midnight or brewing a pot in 5 minutes with our Odu Spice Kit, the
              soul of the broth never changes.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsStoryModalOpen(false);
                  setIsMenuModalOpen(true);
                }}
                className="bg-text-primary text-white font-primary text-xs uppercase px-6 py-2.5 cursor-pointer"
              >
                Explore Menu
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsStoryModalOpen(false);
                  setIsReserveModalOpen(true);
                }}
                className="border border-text-primary text-text-primary font-primary text-xs uppercase px-6 py-2.5 cursor-pointer"
              >
                Book Lounge Table
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
