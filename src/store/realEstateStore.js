import React, { createContext, useContext, useMemo, useReducer } from 'react';

const propertyTypes = ['All', 'Houses', 'Apartments', 'Townhouses', 'Land'];

const properties = [
 { id: 1, type: 'Houses', emoji: '', address: '14 Maple Grove', suburb: 'Mosman', beds: 4, baths: 2, parking: 2, price: 2850000, priceWeekly: null, forSale: true, sqm: 520, description: 'Stunning family home with harbour glimpses, generous indoor-outdoor living and a beautifully landscaped backyard perfect for entertaining.', features: ['Pool', 'Double garage', 'Alfresco dining'], daysListed: 3 },
 { id: 2, type: 'Apartments', emoji: '', address: 'Unit 8/42 Pacific Hwy', suburb: 'North Sydney', beds: 2, baths: 1, parking: 1, price: 780000, priceWeekly: null, forSale: true, sqm: 78, description: 'Modern apartment in the heart of North Sydney with smart storage, sleek finishes and easy commuter access.', features: ['Gym', 'Concierge', 'City views'], daysListed: 7 },
 { id: 3, type: 'Townhouses', emoji: '️', address: '3 Banksia Court', suburb: 'Manly', beds: 3, baths: 2, parking: 1, price: 1650000, priceWeekly: null, forSale: true, sqm: 210, description: 'Charming townhouse 500m from the beach with fresh interiors, sunny living spaces and a private courtyard.', features: ['Courtyard', 'New kitchen', 'Walk to beach'], daysListed: 14 },
 { id: 4, type: 'Houses', emoji: '', address: '88 Hillcrest Rd', suburb: 'Hunters Hill', beds: 5, baths: 3, parking: 2, price: 4200000, priceWeekly: null, forSale: true, sqm: 780, description: 'Grand federation home on 780sqm with classic charm, formal living rooms and resort-style outdoor amenities.', features: ['Pool', 'Tennis court', 'Heritage listed'], daysListed: 2 },
 { id: 5, type: 'Apartments', emoji: '', address: 'Unit 12/9 Miller St', suburb: 'Pyrmont', beds: 1, baths: 1, parking: 1, price: 620000, priceWeekly: null, forSale: true, sqm: 52, description: 'Boutique studio in vibrant Pyrmont ideal for first-home buyers seeking a low-maintenance city-fringe lifestyle.', features: ['City views', 'Walk to everything'], daysListed: 21 },
 { id: 6, type: 'Houses', emoji: '', address: '22 Ocean Dr', suburb: 'Manly', beds: 4, baths: 3, parking: 2, price: 3100000, priceWeekly: null, forSale: true, sqm: 450, description: 'Luxurious coastal living steps from the beach with designer finishes, multiple living zones and seamless entertaining.', features: ['Ocean views', 'Pool', 'Home theatre'], daysListed: 5 },
 { id: 7, type: 'Townhouses', emoji: '️', address: '6 Acacia Way', suburb: 'Lane Cove', beds: 3, baths: 2, parking: 2, price: 1380000, priceWeekly: null, forSale: true, sqm: 185, description: 'Contemporary townhouse in quiet cul-de-sac offering sustainable upgrades and great connectivity for young families.', features: ['Courtyard', 'Solar panels', 'EV charger'], daysListed: 9 },
 { id: 8, type: 'Land', emoji: '', address: 'Lot 44 Reserve Rd', suburb: 'Dural', beds: 0, baths: 0, parking: 0, price: 890000, priceWeekly: null, forSale: true, sqm: 2000, description: 'Rare 2000sqm bush block — build your dream home with services connected and development approval already in place.', features: ['DA approved', 'Services connected'], daysListed: 18 },
 { id: 9, type: 'Apartments', emoji: '', address: 'Unit 3/71 Crown St', suburb: 'Surry Hills', beds: 2, baths: 1, parking: 1, price: null, priceWeekly: 650, forSale: false, sqm: 72, description: 'Stylish 2-bed apartment in the heart of Surry Hills with balcony entertaining and café culture at your doorstep.', features: ['Dishwasher', 'Balcony', 'Close to cafes'], daysListed: 1 },
 { id: 10, type: 'Houses', emoji: '', address: '45 Ferndale Ave', suburb: 'Killara', beds: 4, baths: 2, parking: 2, price: null, priceWeekly: 1100, forSale: false, sqm: 380, description: 'Spacious family home in quiet tree-lined street with expansive lawn, pool and excellent school access.', features: ['Pool', 'Garden', 'Close to schools'], daysListed: 4 },
 { id: 11, type: 'Apartments', emoji: '', address: 'Unit 201/15 Darling Dr', suburb: 'Darling Harbour', beds: 2, baths: 2, parking: 1, price: 1100000, priceWeekly: null, forSale: true, sqm: 95, description: 'Stunning harbourside apartment with panoramic views, premium building amenities and a hotel-style arrival experience.', features: ['Water views', 'Concierge', 'Pool'], daysListed: 6 },
 { id: 12, type: 'Houses', emoji: '', address: '7 Casuarina Cl', suburb: 'Balmoral', beds: 3, baths: 2, parking: 1, price: 2400000, priceWeekly: null, forSale: true, sqm: 310, description: 'Architecturally designed home near Balmoral beach with natural light, high-end joinery and relaxed coastal styling.', features: ['Designer kitchen', 'Deck', 'Walk to beach'], daysListed: 11 },
 { id: 13, type: 'Townhouses', emoji: '️', address: '18 Wattle St', suburb: 'Ultimo', beds: 3, baths: 2, parking: 1, price: null, priceWeekly: 780, forSale: false, sqm: 155, description: 'Modern townhouse near UTS and CBD with rooftop entertaining and secure parking in a tightly held pocket.', features: ['Rooftop terrace', 'EV charger'], daysListed: 2 },
 { id: 14, type: 'Houses', emoji: '', address: '2 Headland Rd', suburb: 'Palm Beach', beds: 5, baths: 4, parking: 3, price: 7500000, priceWeekly: null, forSale: true, sqm: 900, description: 'Iconic Palm Beach estate with 180° ocean views, private entertaining zones and luxury accommodation for guests.', features: ['Infinity pool', 'Boathouse', 'Guest cottage'], daysListed: 1 },
 { id: 15, type: 'Apartments', emoji: '', address: 'Unit 5/33 Blues Point Rd', suburb: 'McMahons Point', beds: 2, baths: 1, parking: 1, price: 920000, priceWeekly: null, forSale: true, sqm: 84, description: 'Rare harbourfront apartment — wake up to Opera House views in an elegant art deco address.', features: ['Harbour views', 'Art deco building'], daysListed: 8 },
 { id: 16, type: 'Houses', emoji: '', address: '99 Pacific Pde', suburb: 'Dee Why', beds: 3, baths: 1, parking: 2, price: null, priceWeekly: 820, forSale: false, sqm: 260, description: 'Spacious beach-side home 200m from the ocean with flexible family layout and pet-friendly outdoor areas.', features: ['Lock-up garage', 'Pergola', 'Pets welcome'], daysListed: 3 },
 { id: 17, type: 'Townhouses', emoji: '️', address: '12 Magnolia Pl', suburb: 'Ryde', beds: 3, baths: 2, parking: 1, price: 1150000, priceWeekly: null, forSale: true, sqm: 195, description: 'Near new townhouse in family-friendly suburb with sustainability features and rail access nearby.', features: ['Solar panels', 'Rainwater tank', 'Close to station'], daysListed: 15 },
 { id: 18, type: 'Apartments', emoji: '', address: 'Unit 7/90 King St', suburb: 'Newtown', beds: 2, baths: 1, parking: 0, price: null, priceWeekly: 580, forSale: false, sqm: 68, description: 'Trendy inner-west apartment above the action with character features and unbeatable walkability.', features: ['Exposed brick', 'Polished floors'], daysListed: 6 },
 { id: 19, type: 'Houses', emoji: '', address: '56 Sunset Blvd', suburb: 'Vaucluse', beds: 5, baths: 4, parking: 3, price: 6800000, priceWeekly: null, forSale: true, sqm: 720, description: 'Prestige Vaucluse estate with harbour views, wellness spaces and whole-home smart automation.', features: ['Pool', 'Home gym', 'Smart home'], daysListed: 4 },
 { id: 20, type: 'Apartments', emoji: '', address: 'Unit 14/1 Wharf Rd', suburb: 'Finger Wharf', beds: 3, baths: 2, parking: 2, price: 3600000, priceWeekly: null, forSale: true, sqm: 185, description: 'Iconic Finger Wharf penthouse — absolute waterfront living with a spectacular private terrace.', features: ['Marina views', 'Concierge', 'Private terrace'], daysListed: 1 },
];

const initialState = {
 phase: 'home',
 selectedProperty: null,
 searchQuery: '',
 listingMode: 'buy',
 filters: { type: 'All', beds: 'Any', priceMax: 'Any', suburb: 'All' },
 saved: [2, 14],
 chatOpen: false,
 chatMessages: [
 {
 id: 'welcome',
 role: 'nova',
 text: "Hi! I'm Nova, PropFind's demo AI property assistant — powered by ChatInstance. I can help you find your perfect property, or show how this works for real estate agencies!",
 },
 ],
 chatInput: '',
};

const RealEstateContext = createContext(null);

function getNovaReply(message) {
 const text = message.toLowerCase();
 if (text.includes('investment')) {
 return 'Nova here: North Sydney, McMahons Point and Darling Harbour stand out for yield-plus-growth balance in this demo set. I can also surface higher-end blue-chip suburbs if you prefer capital growth.';
 }
 if (text.includes('rental') || text.includes('rent')) {
 return 'Rental market snapshot: Surry Hills, Newtown and Dee Why rentals are moving quickly in this demo. Ask me for weekly rent ranges or to shortlist homes with parking and outdoor space.';
 }
 if (text.includes('appraise') || text.includes('value')) {
 return 'I can show a demo appraisal workflow for agencies: collect address, property type, recent upgrades and target campaign window, then pass the lead straight to an agent.';
 }
 if (text.includes('inspection') || text.includes('book')) {
 return 'Inspection scheduling is ready for demo mode. I can capture preferred days, buyer budget and contact info, then hand it to alphinium-booking for instant notifications.';
 }
 if (text.includes('mortgage') || text.includes('estimate')) {
 return 'For a quick mortgage demo, assume 20% deposit and compare repayments across $780k, $1.65m and $2.85m listings. I can help narrow a price band if you want.';
 }
 return 'I can help with suburb trends, investment ideas, inspection scheduling and mortgage estimates. Try asking for a family home near the beach, a rental under $900/week or an appraisal flow.';
}

function reducer(state, action) {
 switch (action.type) {
 case 'SET_PHASE':
 return { ...state, phase: action.phase };
 case 'SELECT_PROPERTY':
 return { ...state, selectedProperty: action.property, phase: 'property' };
 case 'SET_SEARCH_QUERY':
 return { ...state, searchQuery: action.value, phase: 'search' };
 case 'SET_LISTING_MODE':
 return { ...state, listingMode: action.value, phase: 'search' };
 case 'SET_FILTER':
 return { ...state, filters: { ...state.filters, [action.key]: action.value }, phase: 'search' };
 case 'RESET_TO_HOME':
 return { ...state, phase: 'home', selectedProperty: null };
 case 'TOGGLE_SAVED': {
 const saved = state.saved.includes(action.id)
 ? state.saved.filter((savedId) => savedId !== action.id)
 : [...state.saved, action.id];
 return { ...state, saved };
 }
 case 'OPEN_SAVED':
 return { ...state, phase: 'saved' };
 case 'OPEN_CHAT':
 return { ...state, chatOpen: true, chatInput: action.prefill ?? state.chatInput };
 case 'CLOSE_CHAT':
 return { ...state, chatOpen: false };
 case 'SET_CHAT_INPUT':
 return { ...state, chatInput: action.value };
 case 'SEND_CHAT': {
 const message = (action.value ?? state.chatInput).trim();
 if (!message) {
 return state;
 }
 return {
 ...state,
 chatOpen: true,
 chatInput: '',
 chatMessages: [
 ...state.chatMessages,
 { id: `user-${Date.now()}`, role: 'user', text: message },
 { id: `nova-${Date.now() + 1}`, role: 'nova', text: getNovaReply(message) },
 ],
 };
 }
 default:
 return state;
 }
}

export function RealEstateProvider({ children }) {
 const [state, dispatch] = useReducer(reducer, initialState);

 const value = useMemo(() => ({ state, dispatch, properties, propertyTypes }), [state]);
 return <RealEstateContext.Provider value={value}>{children}</RealEstateContext.Provider>;
}

export function useRealEstate() {
 const context = useContext(RealEstateContext);
 if (!context) {
 throw new Error('useRealEstate must be used within RealEstateProvider');
 }
 return context;
}
