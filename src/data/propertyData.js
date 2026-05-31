export const colors = {
  background: '#F6F8FC',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF3FB',
  border: '#D6E0F0',
  primary: '#102A56',
  accent: '#1F5EFF',
  text: '#0F172A',
  textMuted: '#64748B',
  success: '#0F9D75',
};

export const images = {
  hero: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  home: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&q=80',
  apartment: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
  interior: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
  pool: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
};

export const filters = ['Buy', 'Rent', 'New'];

export const properties = [
  { id: 'p1', address: '18 Riverlight Ave', suburb: 'New Farm', price: '$2.45M', badge: 'For Sale', beds: 4, baths: 3, cars: 2, image: images.hero, gallery: [images.hero, images.interior, images.pool], description: 'Architect-designed riverfront family home with generous entertaining zones and polished stone finishes.', features: ['Open-plan living', 'Butler’s pantry', 'Private pool', 'Home office'], agent: { name: 'Amelia Hart', title: 'Senior Sales Agent' } },
  { id: 'p2', address: '6 Dockside Lane', suburb: 'Newstead', price: '$1,250 / week', badge: 'For Rent', beds: 3, baths: 2, cars: 2, image: images.apartment, gallery: [images.apartment, images.interior, images.hero], description: 'Premium apartment living with skyline views, resident amenities, and concierge access.', features: ['Balcony views', 'Gym access', 'Concierge', 'Secure parking'], agent: { name: 'Liam Porter', title: 'Leasing Specialist' } },
  { id: 'p3', address: '27 Arcadia Street', suburb: 'Paddington', price: '$1.98M', badge: 'For Sale', beds: 4, baths: 2, cars: 2, image: images.home, gallery: [images.home, images.interior, images.pool], description: 'A renovated Queenslander blending character charm with refined indoor-outdoor entertaining.', features: ['Designer kitchen', 'Covered deck', 'Wine storage', 'Landscaped garden'], agent: { name: 'Amelia Hart', title: 'Senior Sales Agent' } },
  { id: 'p4', address: '12 Horizon Crescent', suburb: 'Hamilton', price: '$1,480 / week', badge: 'For Rent', beds: 5, baths: 4, cars: 3, image: images.pool, gallery: [images.pool, images.interior, images.hero], description: 'Executive home with resort-inspired pool, media room, and premium finishes throughout.', features: ['Media room', 'Pool pavilion', 'Walk-in robe', 'Three-car garage'], agent: { name: 'Liam Porter', title: 'Leasing Specialist' } },
  { id: 'p5', address: '4 Coastline Drive', suburb: 'Bulimba', price: '$2.15M', badge: 'For Sale', beds: 4, baths: 3, cars: 2, image: images.hero, gallery: [images.hero, images.home, images.interior], description: 'Clean-lined family residence with natural light, flexible living zones, and premium joinery.', features: ['Stone island bench', 'Guest suite', 'Smart lighting', 'Outdoor kitchen'], agent: { name: 'Amelia Hart', title: 'Senior Sales Agent' } },
  { id: 'p6', address: '88 Waterline Road', suburb: 'Teneriffe', price: '$980 / week', badge: 'For Rent', beds: 2, baths: 2, cars: 1, image: images.apartment, gallery: [images.apartment, images.interior, images.pool], description: 'Warehouse-style apartment with soaring ceilings, timber floors, and premium resident amenities.', features: ['River outlook', 'Pet friendly', 'Stone kitchen', 'Storage cage'], agent: { name: 'Liam Porter', title: 'Leasing Specialist' } },
  { id: 'p7', address: '39 Fig Tree Terrace', suburb: 'Ascot', price: '$3.10M', badge: 'For Sale', beds: 5, baths: 4, cars: 3, image: images.home, gallery: [images.home, images.pool, images.interior], description: 'Statement home offering luxurious proportions, multiple living zones, and an entertainer’s terrace.', features: ['Wine cellar', 'Lift access', 'Pool deck', 'Guest retreat'], agent: { name: 'Amelia Hart', title: 'Senior Sales Agent' } },
  { id: 'p8', address: '9 Lantern Quay', suburb: 'West End', price: '$1,100 / week', badge: 'New', beds: 3, baths: 2, cars: 2, image: images.pool, gallery: [images.pool, images.interior, images.apartment], description: 'Freshly listed contemporary townhome moments from dining, parks, and the river precinct.', features: ['Courtyard', 'Study nook', 'Timber floors', 'Secure garage'], agent: { name: 'Liam Porter', title: 'Leasing Specialist' } },
];

export const featuredProperty = properties[0];
export const timeSlots = ['Saturday 10:00 AM', 'Saturday 1:30 PM', 'Sunday 11:00 AM', 'Tuesday 5:45 PM'];
