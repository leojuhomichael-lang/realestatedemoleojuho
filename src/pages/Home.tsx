import { ArrowRight, Star, Users, Home as HomeIcon, Shield, Award, TrendingUp, MapPin, Building2, DollarSign, Clock, ChevronRight, CheckCircle, Zap, Target, Sparkles, BadgeCheck, Calendar } from 'lucide-react';
import AnimatedSections from '../components/ui/animated-sections-1';
import { Carousel } from '../components/ui/carousel';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const heroSections = [
    {
      text: "Find Your Dream Home with BlueKey Properties",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Luxury Living Redefined",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Your Perfect Home Awaits",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const featuredListings = [
    {
      title: "Modern Downtown Penthouse",
      button: "View Details",
      src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Suburban Family Estate",
      button: "View Details",
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Waterfront Villa",
      button: "View Details",
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Contemporary Loft",
      button: "View Details",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "BlueKey Properties made our home buying experience seamless. Their attention to detail and professionalism is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Found our dream home in just two weeks! The team's expertise and market knowledge are exceptional.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Outstanding service from start to finish. They truly understand what luxury real estate means.",
      rating: 5
    }
  ];

  const stats = [
    { icon: HomeIcon, number: "500+", label: "Properties Sold" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Star, number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen w-full">
        <AnimatedSections sections={heroSections} />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40">
          <button
            onClick={() => onNavigate('listings')}
            className="bg-[#d4af37] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8941f] transition-all duration-300 shadow-2xl flex items-center gap-2 hover:gap-4"
          >
            View Listings
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1e3a8a]/10 mb-6">
                  <stat.icon className="text-[#1e3a8a]" size={36} />
                </div>
                <h3 className="text-4xl font-bold text-[#1e3a8a] mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                About BlueKey Properties
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                For over 15 years, BlueKey Properties has been the premier choice for luxury real estate in the metropolitan area. Our commitment to excellence and personalized service has helped thousands of families find their perfect home.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We combine market expertise with cutting-edge technology to provide an unparalleled real estate experience. Whether you're buying, selling, or investing, our team of dedicated professionals is here to guide you every step of the way.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="text-[#1e3a8a] font-semibold text-lg flex items-center gap-2 hover:text-[#d4af37] transition-colors"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
                alt="Modern office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of exceptional homes
            </p>
          </div>
          <Carousel slides={featuredListings} />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Why Choose BlueKey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6 group-hover:bg-[#1e3a8a] transition-colors">
                <Shield className="text-[#1e3a8a] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Trusted Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                15+ years of proven success in luxury real estate with a track record of satisfied clients
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6 group-hover:bg-[#1e3a8a] transition-colors">
                <Award className="text-[#1e3a8a] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized as the top real estate agency in the region for three consecutive years
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6 group-hover:bg-[#1e3a8a] transition-colors">
                <TrendingUp className="text-[#1e3a8a] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Market Leaders</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep market insights and exclusive access to off-market luxury properties
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6 group-hover:bg-[#1e3a8a] transition-colors">
                <Users className="text-[#1e3a8a] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Client Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized service with 24/7 support to ensure your satisfaction every step
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 mt-3 leading-tight">
                Comprehensive Real Estate Solutions
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From buying and selling to property management and investment consulting, we provide end-to-end real estate services tailored to your needs.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center">
                    <Building2 className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">Buyer & Seller Services</h4>
                    <p className="text-gray-600">Expert guidance through every step of your transaction with proven negotiation strategies</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center">
                    <DollarSign className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">Investment Consulting</h4>
                    <p className="text-gray-600">Strategic investment advice to maximize returns and build long-term wealth</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center">
                    <HomeIcon className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">Property Management</h4>
                    <p className="text-gray-600">Comprehensive management services to protect and maximize your investment</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="mt-10 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d4af37] transition-colors flex items-center gap-2"
              >
                Explore All Services
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                    alt="Real estate consultation"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern architecture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                    alt="Property interior"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                    alt="City skyline"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Featured Locations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 mt-3">
              Prime Areas We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover exceptional properties in the most desirable neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop"
                alt="Downtown"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-white/90 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Downtown District</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Urban Living</h3>
                <p className="text-white/80 mb-4">45 properties available</p>
                <button className="text-[#d4af37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Area <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2000&auto=format&fit=crop"
                alt="Suburbs"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-white/90 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Suburban Areas</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Family Homes</h3>
                <p className="text-white/80 mb-4">62 properties available</p>
                <button className="text-[#d4af37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Area <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
                alt="Waterfront"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-white/90 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Waterfront Properties</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Luxury Estates</h3>
                <p className="text-white/80 mb-4">28 properties available</p>
                <button className="text-[#d4af37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Area <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">$2B+</div>
              <div className="text-lg opacity-90">Total Sales Volume</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">500+</div>
              <div className="text-lg opacity-90">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">1000+</div>
              <div className="text-lg opacity-90">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our experienced team guide you through your real estate journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('listings')}
                className="bg-[#d4af37] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8941f] transition-colors"
              >
                Browse Listings
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">Trusted by hundreds of satisfied homeowners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#d4af37] fill-[#d4af37]" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-[#1e3a8a]">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-[#1e3a8a] font-semibold text-lg flex items-center gap-2 mx-auto hover:text-[#d4af37] transition-colors">
              View All Reviews
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                  alt="Real estate team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1e3a8a]/20" />
              </div>
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#d4af37] mb-4">
                  <Clock size={20} />
                  <span className="font-semibold text-sm uppercase tracking-wider">Available 24/7</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                  Experience the BlueKey Difference
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our dedicated team is committed to providing you with exceptional service every step of the way. From initial consultation to closing and beyond, we're here to ensure your real estate journey is smooth and successful.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center mt-0.5">
                      <ChevronRight className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">Personalized property matching based on your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center mt-0.5">
                      <ChevronRight className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">Expert market analysis and investment insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center mt-0.5">
                      <ChevronRight className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">Seamless coordination from offer to closing</span>
                  </li>
                </ul>
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d4af37] transition-colors w-fit flex items-center gap-2"
                >
                  Meet Our Team
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 mt-3">
              How We Help You Succeed
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology designed to make your real estate journey seamless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <Target className="mb-6 mt-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
                <p className="text-white/90 leading-relaxed">
                  We start with understanding your unique goals, preferences, and timeline through a comprehensive consultation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <Sparkles className="mb-6 mt-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Curated Selection</h3>
                <p className="text-white/90 leading-relaxed">
                  Access handpicked properties that match your criteria, including exclusive off-market listings.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <BadgeCheck className="mb-6 mt-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Expert Negotiation</h3>
                <p className="text-white/90 leading-relaxed">
                  Our seasoned negotiators work to secure the best possible terms and pricing for your transaction.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
                <CheckCircle className="mb-6 mt-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Smooth Closing</h3>
                <p className="text-white/90 leading-relaxed">
                  We coordinate every detail to ensure a hassle-free closing and continued support after the sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mb-4">
                      <Zap className="text-[#1e3a8a]" size={32} />
                    </div>
                    <h4 className="text-4xl font-bold text-[#1e3a8a] mb-2">48hrs</h4>
                    <p className="text-gray-600">Average Response Time</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mb-4">
                      <Building2 className="text-[#1e3a8a]" size={32} />
                    </div>
                    <h4 className="text-4xl font-bold text-[#1e3a8a] mb-2">135</h4>
                    <p className="text-gray-600">Properties This Year</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mb-4">
                      <Award className="text-[#1e3a8a]" size={32} />
                    </div>
                    <h4 className="text-4xl font-bold text-[#1e3a8a] mb-2">25+</h4>
                    <p className="text-gray-600">Industry Awards</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mb-4">
                      <Users className="text-[#1e3a8a]" size={32} />
                    </div>
                    <h4 className="text-4xl font-bold text-[#1e3a8a] mb-2">50+</h4>
                    <p className="text-gray-600">Expert Agents</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Performance Metrics</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 mt-3 leading-tight">
                Results That Speak for Themselves
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our track record demonstrates our commitment to excellence. We don't just meet expectations—we exceed them, consistently delivering outstanding results for our clients.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1e3a8a]">Client Satisfaction</span>
                    <span className="font-bold text-[#d4af37]">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1e3a8a] to-[#d4af37] h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1e3a8a]">Successful Closings</span>
                    <span className="font-bold text-[#d4af37]">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1e3a8a] to-[#d4af37] h-3 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1e3a8a]">Repeat Clients</span>
                    <span className="font-bold text-[#d4af37]">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1e3a8a] to-[#d4af37] h-3 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="mt-10 text-[#1e3a8a] font-semibold text-lg flex items-center gap-2 hover:text-[#d4af37] transition-colors"
              >
                See Our Success Stories
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Latest News</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 mt-3">
              Real Estate Insights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay informed with market trends, tips, and expert advice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Market trends"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Market Trends
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar size={16} />
                  <span>October 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#d4af37] transition-colors">
                  2025 Real Estate Market Outlook
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Discover the key trends shaping the luxury real estate market this year and what they mean for buyers and sellers.
                </p>
                <button className="text-[#1e3a8a] font-semibold flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
                  alt="Buyer tips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Buyer Guide
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar size={16} />
                  <span>October 2, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#d4af37] transition-colors">
                  First-Time Buyer's Complete Guide
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Everything you need to know about purchasing your first home, from financing to closing.
                </p>
                <button className="text-[#1e3a8a] font-semibold flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                  alt="Investment tips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Investment
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar size={16} />
                  <span>September 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#d4af37] transition-colors">
                  Smart Investment Strategies
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learn proven strategies for building wealth through strategic real estate investments.
                </p>
                <button className="text-[#1e3a8a] font-semibold flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Real Estate Journey?
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Whether you're buying your first home, selling a property, or building an investment portfolio, our expert team is here to help you achieve your goals.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={24} />
                    <span className="text-lg">Free property valuation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={24} />
                    <span className="text-lg">No-obligation consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={24} />
                    <span className="text-lg">Access to exclusive listings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-[#d4af37]">
                    <option value="" className="text-gray-900">I'm interested in...</option>
                    <option value="buying" className="text-gray-900">Buying a Property</option>
                    <option value="selling" className="text-gray-900">Selling a Property</option>
                    <option value="investing" className="text-gray-900">Investment Opportunities</option>
                    <option value="consultation" className="text-gray-900">Free Consultation</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#d4af37] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8941f] transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
