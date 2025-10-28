import { useState } from 'react';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';

export default function Listings() {
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
      price: "$2,450,000",
      title: "Modern Downtown Penthouse",
      location: "Downtown",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      type: "condo",
      priceRange: "high"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
      price: "$1,850,000",
      title: "Luxury Suburban Estate",
      location: "Suburbs",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "house",
      priceRange: "high"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      price: "$950,000",
      title: "Contemporary Loft",
      location: "Downtown",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      type: "condo",
      priceRange: "medium"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2000&auto=format&fit=crop",
      price: "$3,200,000",
      title: "Waterfront Villa",
      location: "Waterfront",
      beds: 4,
      baths: 4,
      sqft: "3,600",
      type: "house",
      priceRange: "high"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop",
      price: "$725,000",
      title: "Charming Townhouse",
      location: "Suburbs",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      type: "townhouse",
      priceRange: "medium"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
      price: "$1,350,000",
      title: "Modern Family Home",
      location: "Suburbs",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      type: "house",
      priceRange: "high"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000&auto=format&fit=crop",
      price: "$580,000",
      title: "Cozy City Apartment",
      location: "Downtown",
      beds: 2,
      baths: 1,
      sqft: "1,200",
      type: "condo",
      priceRange: "low"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
      price: "$2,100,000",
      title: "Executive Residence",
      location: "Waterfront",
      beds: 4,
      baths: 3,
      sqft: "3,800",
      type: "house",
      priceRange: "high"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2000&auto=format&fit=crop",
      price: "$875,000",
      title: "Garden View Condo",
      location: "Suburbs",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      type: "condo",
      priceRange: "medium"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const typeMatch = filterType === 'all' || property.type === filterType;
    const locationMatch = filterLocation === 'all' || property.location === filterLocation;
    const priceMatch = filterPrice === 'all' || property.priceRange === filterPrice;
    return typeMatch && locationMatch && priceMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Available Properties
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our exclusive collection of premium properties
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-[#1e3a8a] mb-4">Filter Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Downtown">Downtown</option>
                <option value="Suburbs">Suburbs</option>
                <option value="Waterfront">Waterfront</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $750K</option>
                <option value="medium">$750K - $1.5M</option>
                <option value="high">Over $1.5M</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-4 py-2 rounded-full font-bold">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-gray-700 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <Bed size={18} className="text-[#1e3a8a]" />
                    <span className="text-sm font-medium">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={18} className="text-[#1e3a8a]" />
                    <span className="text-sm font-medium">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize size={18} className="text-[#1e3a8a]" />
                    <span className="text-sm font-medium">{property.sqft} sqft</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#1e3a8a] text-white py-3 rounded-lg font-semibold hover:bg-[#d4af37] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
