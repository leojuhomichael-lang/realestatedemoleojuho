import { Home, DollarSign, Building, TrendingUp, Key, Users, FileText, Shield } from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: "Buyer Services",
      description: "Finding your perfect home with personalized guidance",
      features: [
        "Personalized property search based on your criteria",
        "Neighborhood insights and market analysis",
        "Property tours and virtual showings",
        "Negotiation and offer preparation",
        "Closing coordination and support"
      ]
    },
    {
      icon: DollarSign,
      title: "Seller Services",
      description: "Maximize your property value with expert marketing",
      features: [
        "Professional property valuation and pricing strategy",
        "High-quality photography and virtual staging",
        "Multi-channel marketing campaigns",
        "Open house coordination",
        "Expert negotiation to get the best price"
      ]
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Comprehensive management for investment properties",
      features: [
        "Tenant screening and placement",
        "Rent collection and financial reporting",
        "Property maintenance and repairs",
        "Regular inspections and compliance",
        "24/7 emergency support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description: "Strategic guidance for real estate investments",
      features: [
        "Market analysis and investment opportunities",
        "Portfolio diversification strategies",
        "ROI projections and financial modeling",
        "Tax benefit optimization",
        "Long-term wealth building strategies"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Key,
      title: "Relocation Services",
      description: "Seamless transitions for families and executives moving to the area"
    },
    {
      icon: Users,
      title: "First-Time Buyer Program",
      description: "Special guidance and resources for first-time homebuyers"
    },
    {
      icon: FileText,
      title: "Legal Coordination",
      description: "Working with top real estate attorneys to ensure smooth transactions"
    },
    {
      icon: Shield,
      title: "Home Warranty Plans",
      description: "Protection plans for peace of mind after purchase"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your goals, preferences, and budget to create a personalized strategy."
    },
    {
      step: "02",
      title: "Property Search & Tours",
      description: "Access our exclusive listings and schedule tours of properties that match your criteria."
    },
    {
      step: "03",
      title: "Market Analysis",
      description: "Receive detailed market insights and property valuations to make informed decisions."
    },
    {
      step: "04",
      title: "Negotiation",
      description: "Our expert negotiators work to secure the best terms and price for your transaction."
    },
    {
      step: "05",
      title: "Closing & Beyond",
      description: "We coordinate every detail of closing and provide continued support after the sale."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6">
                  <service.icon className="text-[#1e3a8a]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#d4af37] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-12 text-center">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1e3a8a]/10 mb-4">
                  <service.icon className="text-[#1e3a8a]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-center">
            Our Process
          </h2>
          <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl mx-auto">
            A streamlined approach designed to make your real estate journey smooth and successful
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#d4af37] transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8 relative">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1e3a8a] text-white text-2xl font-bold mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Whether you're buying, selling, or investing, our team of experts is ready to guide you every step of the way. Let's turn your real estate goals into reality.
              </p>
              <button className="bg-[#d4af37] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8941f] transition-colors shadow-xl">
                Schedule a Consultation
              </button>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
