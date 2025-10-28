import { Award, Heart, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Jennifer Martinez",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "20+ years of luxury real estate expertise"
    },
    {
      name: "David Thompson",
      role: "Senior Broker",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Specialized in commercial properties"
    },
    {
      name: "Sophia Chen",
      role: "Lead Agent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      bio: "Expert in residential sales"
    },
    {
      name: "Marcus Johnson",
      role: "Investment Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      bio: "Strategic property investment advisor"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your satisfaction is our top priority. We listen, understand, and deliver exceptional results tailored to your unique needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from property selection to customer service."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and market insights to provide you with a competitive advantage."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Trust and transparency are the foundation of our relationships. We conduct business with honesty and professionalism."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            About BlueKey Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in luxury real estate, dedicated to turning your property dreams into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                alt="City skyline"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#d4af37] text-white p-8 rounded-2xl shadow-xl">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg font-semibold">Years of Excellence</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2010, BlueKey Properties emerged from a vision to redefine luxury real estate services. What started as a small boutique agency has grown into one of the most respected names in the industry.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our success is built on a simple philosophy: exceptional service, market expertise, and unwavering commitment to our clients. We've helped thousands of families find their perfect homes and countless investors build their portfolios.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to lead the market with innovative solutions, cutting-edge technology, and a team of dedicated professionals who are passionate about real estate.
            </p>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a8a]/10 mb-6">
                  <value.icon className="text-[#1e3a8a]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl mx-auto">
            Our experienced professionals are dedicated to providing you with exceptional service and expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose BlueKey Properties?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            With a proven track record of success, deep market knowledge, and unwavering commitment to excellence, we're the partner you can trust for all your real estate needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">Properties Sold</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">$2B+</p>
              <p className="text-lg opacity-90">In Transactions</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-lg opacity-90">Client Satisfaction</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
