import React from "react";
import "./report.css";
const Reports = () => {
  const reportOther= [
    {
    no: 11,
    businessName: "Thermocol Packaging Project Report (Profile) Business Plan"
  },
  {
    no: 12,
    businessName: "Tyre Retrading Project Report (Profile) Business Plan"
  },
  {
    no: 13,
    businessName: "Bronze Bushes Project Report Business Plan"
  },
  {
    no: 14,
    businessName: "Commercial Vehicle Repair Workshop Project Report Business Plan"
  },
  {
    no: 15,
    businessName: "Electric Horn Project Report Business Plan"
  },
  {
    no: 16,
    businessName: "Soy Nuggets Project Report (Business Plan)"
  },
  {
    no: 17,
    businessName: "Electrical Motor Winding Rewinding Project Report Business Plan"
  },
  {
    no: 18,
    businessName: "Manufacturing Of Gear Boxes Project Report Business Plan"
  },
  {
    no: 19,
    businessName: "Manufacturing Of Servo Motors Project Report Business Plan"
  },
  {
    no: 20,
    businessName: "Soymilk Project Report (Business Plan)"
  },
  {
    no: 21,
    businessName: "Pressure Booster Systems for Household Use Project Report Business Plan"
  },
  {
    no: 22,
    businessName: "Spice Grinding Unit Chilli, Turmeric, Cumin Project Report (Business Plan)"
  },
  {
    no: 23,
    businessName: "Two Wheeler Repair and Service Unit Project Report Business Plan"
  },
  {
    no: 24,
    businessName: "Spray Dried Foods F&V Powders, Fat Powders Project Report (Business Plan)"
  },
  {
    no: 25,
    businessName: "Wheel Balancing & Alignment Project Report Business Plan"
  },
  {
    no: 26,
    businessName: "Diagnostic Center Project Report Business Plan"
  },
  {
    no: 27,
    businessName: "Indoor Sport Complex Project Report Business Plan"
  },
  {
    no: 28,
    businessName: "Baby Garments Project Report (Business Plan)"
  },
  {
    no: 29,
    businessName: "Medical Transcription Project Report Business Plan"
  },
  {
    no: 30,
    businessName: "Online Medical Delivery Service Project Report Business Plan"
  },
  {
    no: 31,
    businessName: "Online Shopping Cart Application Project Report Business Plan"
  },
  {
    no: 32,
    businessName: "Children Wear Project Report (Business Plan)"
  },
  {
    no: 33,
    businessName: "Tea Blending Unit Project Report (Business Plan)"
  },
  {
    no: 34,
    businessName: "Denim Garments Project Report (Business Plan)"
  },
  {
    no: 35,
    businessName: "CNC Engineering Workshop Project Report (Profile) Business Plan"
  },
  {
    no: 36,
    businessName: "Cement Paints Project Report (Business Plan)"
  },
  {
    no: 37,
    businessName: "Corrugated Boxes Project Report (Business Plan)"
  },
  {
    no: 38,
    businessName: "Disposal Plastic Cups Project Report (Business Plan)"
  },
  {
    no: 39,
    businessName: "Vacuum Dried fruits, vegetables and herbs Project Report (Business Plan)"
  },
  {
    no: 40,
    businessName: "Gents Ready Made Garments Project Report (Business Plan)"
  },
  {
    no: 41,
    businessName: "Wafer Biscuit Manufacturing Plant Project Report (Business Plan)"
  },
  {
    no: 42,
    businessName: "Knitted Cotton Garments Project Report (Business Plan)"
  },
  {
    no: 43,
    businessName: "Diesel Engine Pump Repair Shop Project Report (Business Plan)"
  },
  {
    no: 44,
    businessName: "Whole Wheat Flour (Atta Mill) Project Report (Business Plan)"
  },
  {
    no: 45,
    businessName: "Four Wheel Automobile Repairing Project Report (Business Plan)"
  },
  {
    no: 46,
    businessName: "Ladies Gowns & Nighty Project Report (Business Plan)"
  },
  {
    no: 47,
    businessName: "Ladies Suits Project Report (Business Plan)"
  },
  {
    no: 48,
    businessName: "Leather Belt Project Report (Business Plan)"
  },
  {
    no: 49,
    businessName: "Gummed Paper Tape Project Report (Business Plan)"
  },
  {
    no: 50,
    businessName: "Lingerie Project Report (Business Plan)"
  },
  {
    no: 51,
    businessName: "Made ups Project Report (Business Plan)"
  },
  {
    no: 52,
    businessName: "Note Book Manufacturing Project Report (Business Plan)"
  },
  {
    no: 53,
    businessName: "Men's Under Garments Project Report (Business Plan)"
  },
  {
    no: 54,
    businessName: "Engineering Workshop Project Report (Profile) Business Plan"
  },
  {
    no: 55,
    businessName: "Readymade Garments Project Report (Business Plan)"
  },
  {
    no: 56,
    businessName: "Shawls Stoles Scarves and Wraps Project Report (Business Plan)"
  },
  {
    no: 57,
    businessName: "Day Spa Project Report (Business Plan)"
  },
  {
    no: 58,
    businessName: "Track Suits Project Report (Business Plan)"
  },
  {
    no: 59,
    businessName: "Uniforms Project Report (Business Plan)"
  },
  {
    no: 60,
    businessName: "Palm Plate Project Report (Business Plan)"
  },
  {
    no: 61,
    businessName: "Floor Cleaning And Polishing Compound Project Report (Business Plan)"
  },
  {
    no: 62,
    businessName: "Paper Bags & Pouches Project Report (Business Plan)"
  },
  {
    no: 63,
    businessName: "Paper Napkins Project Report (Business Plan)"
  },
  {
    no: 64,
    businessName: "Paper Cups Project Report (Business Plan)"
  },
  {
    no: 65,
    businessName: "Cleaning Agro Commodities Project Report (Business Plan)"
  },
  {
    no: 66,
    businessName: "Plastic Carry Bags Project Report (Business Plan)"
  },
  {
    no: 67,
    businessName: "Detergent Powder and Cake Project Report (Business Plan)"
  },
  {
    no: 68,
    businessName: "Banana Fibre Extraction And Processing Project Report (Business Plan)"
  },
  {
    no: 69,
    businessName: "Bed Linen Project Report (Business Plan)"
  },
  {
    no: 70,
    businessName: "Hair Dye Project Report (Business Plan)"
  },
  {
    no: 71,
    businessName: "Disposable Plastic Syringes Project Report Business Plan"
  },
  {
    no: 72,
    businessName: "Amla Processing Project Report & (Business Plan)"
  },
  {
    no: 73,
    businessName: "Bakery Products Project Report & (Business Plan)"
  },
  {
    no: 74,
    businessName: "Cement Mosaic Tiles Project Report (Business Plan)"
  },
  {
    no: 75,
    businessName: "Besan Plant Project Report & (Business Plan)"
  },
  {
    no: 76,
    businessName: "Biscuit Plant for Sweet, Cream, Premier types Project Report (Business Plan)"
  },
  {
    no: 77,
    businessName: "Bread Plant Project Report (Business Plan)"
  },
  {
    no: 78,
    businessName: "Cotton Knitted Fabrics Project Report (Business Plan)"
  },
  {
    no: 79,
    businessName: "Canning Unit F&V Products, Mango Project Report (Business Plan)"
  },
  {
    no: 80,
    businessName: "Hair Oil Project Report (Business Plan)"
  },
  {
    no: 81,
    businessName: "Casein from Milk Project Report (Business Plan)"
  },
  {
    no: 82,
    businessName: "Cashew Processing, Granding Packing Project Report (Business Plan)"
  },
  {
    no: 83,
    businessName: "Coconut Water in PET Bottles Business Project Report Plan"
  },
  {
    no: 84,
    businessName: "Elastic Tape Project Report (Business Plan)"
  },
  {
    no: 85,
    businessName: "Castor Oil Commercial Project Report (Business Plan)"
  },
  {
    no: 86,
    businessName: "Food Colours Business Project Report Plan"
  },
  {
    no: 87,
    businessName: "Cattle Poultry Feed Project Report (Business Plan)"
  },
  {
    no: 88,
    businessName: "Granite Tiles Project Report (Business Plan)"
  },
  {
    no: 89,
    businessName: "Confectionery High Boiled Toffees Project Report (Business Plan)"
  },
  {
    no: 90,
    businessName: "Drip Irrigation Pipes Project Report Business Plan"
  },
  {
    no: 91,
    businessName: "Corn and Multi Grain Flakes Project Report (Business Plan)"
  },
  {
    no: 92,
    businessName: "Malt Extract From Barley Business Project Report Plan"
  },
  {
    no: 93,
    businessName: "Water Proofing Service Project Report (Business Plan)"
  },
  {
    no: 94,
    businessName: "Non- Feric Alum Business Project Report Plan"
  },
  {
    no: 95,
    businessName: "Herbal Cosmetics Project Report (Business Plan)"
  },
  {
    no: 96,
    businessName: "Coir Matresses Project Report (Business Plan)"
  },
  {
    no: 97,
    businessName: "Ready to Serve Drinks & Soft Drinks with CO2 Business Project Report Plan"
  },
  {
    no: 98,
    businessName: "Latex Foam Project Report (Business Plan)"
  },
  {
    no: 99,
    businessName: "Cracking nuts unit Project Report (Business Plan)"
  },
  {
    no: 100,
    businessName: "Steel Furniture Project Report (Business Plan)"
  },
  {
    no: 101,
    businessName: "Cryogenic Grinding of Spices Project Report (Business Plan)"
  },
  {
    no: 102,
    businessName: "Sherbots Business Project Report Plan"
  },
  {
    no: 103,
    businessName: "Wooden Furniture Project Report (Business Plan)"
  },
  {
    no: 104,
    businessName: "Curry and Rice Powder Project Report (Business Plan)"
  },
  {
    no: 105,
    businessName: "Wrought Iron Furniture Project Report (Business Plan)"
  },
  {
    no: 106,
    businessName: "Dairy Farming Project Report (Business Plan)"
  },
  {
    no: 107,
    businessName: "Sugarcane Juice Making Plant Business Project Report Plan"
  },
  {
    no: 108,
    businessName: "Dairy Products Project Report (Business Plan)"
  },
  {
    no: 109,
    businessName: "Dal Making Unit (Tuver, Moong, Urd, etc) Project Report (Business Plan)"
  },
  {
    no: 110,
    businessName: "Desiccated Coconut Powder Project Report (Business Plan)"
  },
  {
    no: 111,
    businessName: "Extruded Pellets from Maida for Frying Project Report (Business Plan)"
  },
  {
    no: 112,
    businessName: "एल्युमिनियम के बर्तन प्रोजेक्ट रिपोर्ट व्यवसाय योजना Aluminium Utensils Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 113,
    businessName: "Flavoured Pasturised Milk Project Report (Business Plan)"
  },
  {
    no: 114,
    businessName: "FLOUR MILL Project Report (Business Plan)"
  },
  {
    no: 115,
    businessName: "Fasteners Stainless Steel Project Report Business Plan"
  },
  {
    no: 116,
    businessName: "Frozen Foods Project Report (Business Plan)"
  },
  {
    no: 117,
    businessName: "Camping Facility Project Report (Profile) Business Plan"
  },
  {
    no: 118,
    businessName: "Fruit Bar Project Report (Business Plan)"
  },
  {
    no: 119,
    businessName: "डेरी फार्म उद्योग पुस्तिका पूरी जानकारी के साथ Dairy Farming Project Report in hindi (Business Plan)"
  },
  {
    no: 120,
    businessName: "Liquid Detergent Project Report (Business Plan)"
  },
  {
    no: 121,
    businessName: "Homestay Facility Project Report (Profile) Business Plan"
  },
  {
    no: 122,
    businessName: "Fruit Jams, Squashes Cocktail Project Report (Business Plan)"
  },
  {
    no: 123,
    businessName: "Serviced Apartment Project Report (Profile) Business Plan"
  },
  {
    no: 124,
    businessName: "Ginger, Garlic Onion Pastes Project Report (Business Plan)"
  },
  {
    no: 125,
    businessName: "Hot Air Dry Vegetables Project Report (Business Plan)"
  },
  {
    no: 126,
    businessName: "Ice Cream Plant Batch Type Project Report (Business Plan)"
  },
  {
    no: 127,
    businessName: "Instant Noodles, Vermicelli Spheghatti Plant Project Report (Business Plan)"
  },
  {
    no: 128,
    businessName: "Ceramic Arts Project Report (Business Plan)"
  },
  {
    no: 129,
    businessName: "Iodised Salt Project Report (Business Plan)"
  },
  {
    no: 130,
    businessName: "Clay Bricks Manufacturing Project Report (Business Plan)"
  },
  {
    no: 131,
    businessName: "Jackfruit Processing Its Products Project Report (Business Plan)"
  },
  {
    no: 132,
    businessName: "Fasteners Steel Project Report Business Plan"
  },
  {
    no: 133,
    businessName: "Medicated-Perfumery Oil Project Report (Business Plan)"
  },
  {
    no: 134,
    businessName: "Khakhra Semi autometic Plant Project Report (Business Plan)"
  },
  {
    no: 135,
    businessName: "Bags Project Report (Business Plan)"
  },
  {
    no: 136,
    businessName: "Fly Ash Bricks Project Report (Business Plan)"
  },
  {
    no: 137,
    businessName: "Mini Rice Mill Project Report (Business Plan)"
  },
  {
    no: 138,
    businessName: "Bathroom Fittings and Fixtures Project Report (Business Plan)"
  },
  {
    no: 139,
    businessName: "Hollow and Cement Concrete Bricks/blocks Project Report (Business Plan)"
  },
  {
    no: 140,
    businessName: "Murmura Unit Project Report (Business Plan)"
  },
  {
    no: 141,
    businessName: "Blow Moulded Plastic Products Project Report (Business Plan)"
  },
  {
    no: 142,
    businessName: "बकरी पालन उद्योग पुस्तिका पूरी जानकारी के साथ Goat Farming Project Report in hindi (Business Plan)"
  },
  {
    no: 143,
    businessName: "Lime Klin Project Report (Business Plan)"
  },
  {
    no: 144,
    businessName: "Mustard Oil Medical Grade Project Report (Business Plan)"
  },
  {
    no: 145,
    businessName: "BOPP Self Adhesive Tape Project Report (Business Plan)"
  },
  {
    no: 146,
    businessName: "ब्रॉयलर मुर्गी पालन उद्योग पुस्तिका पूरी जानकारी के साथ broiler chicken poultry farming Project Report (Business Plan) in hindi"
  },
  {
    no: 147,
    businessName: "Namkeen Batch Plant Potato Chips Project Report (Business Plan)"
  },
  {
    no: 148,
    businessName: "Bubble Packing Project Report (Business Plan)"
  },
  {
    no: 149,
    businessName: "Namkeen Papad Project Report (Business Plan)"
  },
  {
    no: 150,
    businessName: "GM Bushes Project Report Business Plan"
  },
  {
    no: 151,
    businessName: "Hot Water Bags or Ice Bags Project Report (Business Plan)"
  },
  {
    no: 152,
    businessName: "लेयर मुर्गी पालन उद्योग पुस्तिका पूरी जानकारी के साथ Chicken egg Poultry framing Project Report (Business Plan) in hindi"
  },
  {
    no: 153,
    businessName: "Plaster of Paris POP Project Report (Business Plan)"
  },
  {
    no: 154,
    businessName: "Level Controller Project Report (Business Plan)"
  },
  {
    no: 155,
    businessName: "सूअर पालन उद्योग पुस्तिका पूरी जानकारी के साथ Pig Farming Project Report (Business Plan) in hindi"
  },
  {
    no: 156,
    businessName: "Plastic Bottle Project Report (Business Plan)"
  },
  {
    no: 157,
    businessName: "CNC Programming Project Report (Profile) Business Plan"
  },
  {
    no: 158,
    businessName: "ऑटोमोबाइल रिपेयरिंग प्रोजेक्ट रिपोर्ट व्यवसाय योजना Automobile Repairing Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 159,
    businessName: "Plastic Bucket Project Report (Business Plan)"
  },
  {
    no: 160,
    businessName: "Stone Crusher Project Report (Profile) Business Plan"
  },
  {
    no: 161,
    businessName: "बोतलबंद पीने का पानी प्रोजेक्ट रिपोर्ट व्यवसाय योजना Bottled Drinking Water Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 162,
    businessName: "Plastic Parts for Engineering Equipments Project Report (Business Plan)"
  },
  {
    no: 163,
    businessName: "Automotive Control Cables Project Report Business Plan"
  },
  {
    no: 164,
    businessName: "Plastic Water Storage Tank Project Report (Business Plan)"
  },
  {
    no: 165,
    businessName: "Honey Processing Business Project Report Plan"
  },
  {
    no: 166,
    businessName: "Automotive Light Enclosure Project Report Business Plan"
  },
  {
    no: 167,
    businessName: "कंप्यूटर कुंजी बोर्ड Project प्रोजेक्ट रिपोर्ट व्यवसाय योजना Computer Key Board Project Report Business Plan in Hindi PDF EBook"
  },
  {
    no: 168,
    businessName: "PTFE Tape Project Report (Business Plan)"
  },
  {
    no: 169,
    businessName: "Precast Cement Products Project Report (Business Plan)"
  },
  {
    no: 170,
    businessName: "Mango Kernel Oil Business Project Report Plan"
  },
  {
    no: 171,
    businessName: "Current Transformer Project Report Business Plan"
  },
  {
    no: 172,
    businessName: "चोक एलईडी लाइट्स प्रोजेक्ट रिपोर्ट व्यवसाय योजना Choke LED Lights Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 173,
    businessName: "PVC Conduit pipes and fittings Project Report (Business Plan)"
  },
  {
    no: 174,
    businessName: "Micro Cellular Sheets Project Report (Business Plan)"
  },
  {
    no: 175,
    businessName: "Computer Training Institute Project Report (Profile) Business Plan"
  },
  {
    no: 176,
    businessName: "Pappad Manufacturing Project Report (Business Plan)"
  },
  {
    no: 177,
    businessName: "होम फर्निशिंग प्रोजेक्ट रिपोर्ट व्यवसाय योजना Home Furnishing Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 178,
    businessName: "Rubber Parts for Engineering Industry Project Report (Business Plan)"
  },
  {
    no: 179,
    businessName: "179. Stone Cutting and polishing Unit Project Report (Business Plan)Stone Cutting and polishing Unit Project Report (Business Plan)"
  },
  {
    no: 180,
    businessName: "Domestic LPG Stove Project Report Business Plan"
  },
  {
    no: 181,
    businessName: "Software Development Project Report (Profile) Business Plan"
  },
  {
    no: 182,
    businessName: "मोबाइल रिपेयरिंग प्रोजेक्ट रिपोर्ट व्यवसाय योजना Mobile Repairing Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 183,
    businessName: "Utensile Washing Powder Project Report (Business Plan)"
  },
  {
    no: 184,
    businessName: "Electric Curtain Operator Project Report Business Plan"
  },
  {
    no: 185,
    businessName: "ऑनलाइन फ़ूड होम डिलीवरी प्रोजेक्ट रिपोर्ट व्यवसाय योजना Online Food Home Delivery Service Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 186,
    businessName: "Woven Sacks For Fertilizer Project Report (Business Plan)"
  },
  {
    no: 187,
    businessName: "थर्मोकोल पैकेजिंग प्रोजेक्ट रिपोर्ट व्यवसाय योजना Thermocol Packaging Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 188,
    businessName: "Gravity Die Castings Project Report Business Plan"
  },
  {
    no: 189,
    businessName: "Electric Door Chimes Project Report Business Plan"
  },
  {
    no: 190,
    businessName: "टायर रिट्रेडिंग प्रोजेक्ट रिपोर्ट व्यवसाय योजना Tyre Retrading Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 191,
    businessName: "Electrical and PLC Panel Boards Project Report Business Plan"
  },
  {
    no: 192,
    businessName: "Web Design Service Centre Project Report (Profile) Business Plan"
  },
  {
    no: 193,
    businessName: "Toughened glass products Project Report (Business Plan)"
  },
  {
    no: 194,
    businessName: "Electrical Cables Project Report Business Plan"
  },
  {
    no: 195,
    businessName: "Oxalic Acid Project Report (Business Plan)"
  },
  {
    no: 196,
    businessName: "Electrical Fans Project Report Business Plan"
  },
  {
    no: 197,
    businessName: "Electronic Security System Project Report Business Plan"
  },
  {
    no: 198,
    businessName: "Grey Iron Castings Project Report Business Plan"
  },
  {
    no: 199,
    businessName: "Grills Railings Fence Project Report Business Plan"
  },
  {
    no: 200,
    businessName: "Kitchen Appliances Project Report Business Plan"
  },
  {
    no: 201,
    businessName: "Pressure Cookers Project Report Business Plan"
  },
  {
    no: 202,
    businessName: "PVC Wire and Cable Coating Project Report Business Plan"
  },
  {
    no: 203,
    businessName: "ILO - Start And Improve Your Business (SIYB) Entrepreneurship Training"
  },
  {
    no: 204,
    businessName: "Welding Electrodes Project Report Business Plan"
  },
  {
    no: 205,
    businessName: "Phenyl Making Project Report (Business Plan)"
  },
  {
    no: 206,
    businessName: "Adventure Tourism Complex Project Report (Business Plan)"
  },
  {
    no: 207,
    businessName: "Printing Ink Project Report (Business Plan)"
  },
  {
    no: 208,
    businessName: "City Tours & Excursions Project Report (Business Plan)"
  },
  {
    no: 209,
    businessName: "Psyllium Husk Processing Project Report (Business Plan)"
  },
  {
    no: 210,
    businessName: "Ethno Tourism Project Report (Business Plan)"
  },
  {
    no: 211,
    businessName: "Thermoforming Project Report (Business Plan)"
  },
  {
    no: 212,
    businessName: "Heritage Restaurant Project Report (Business Plan)"
  },
  {
    no: 213,
    businessName: "Ice-Cream Cone Making Project Report (Business Plan)"
  },
  {
    no: 214,
    businessName: "Tissue Culture Laboratory Project Report (Business Plan)"
  },
  {
    no: 215,
    businessName: "Rural Tourism Project Report (Business Plan)"
  },
  {
    no: 216,
    businessName: "Pasteurized Milk Plant with Cold Room Project Report (Business Plan)"
  },
  {
    no: 217,
    businessName: "Toilet Soap Manufacturing Unit Project Report (Business Plan)"
  },
  {
    no: 218,
    businessName: "Utensils Other Then AL-SS Project Report (Business Plan)"
  },
  {
    no: 219,
    businessName: "HDPE Pipes Project Report Business Plan"
  },
  {
    no: 220,
    businessName: "Peanut Butter Project Report (Business Plan)"
  },
  {
    no: 221,
    businessName: "Pickle Unit All types SourSweet etc Project Report (Business Plan)"
  },
  {
    no: 222,
    businessName: "Hand Picked and Selected Groundnut Processing Business Project Report Plan"
  },
  {
    no: 223,
    businessName: "Investment Casting Project Report Business Plan"
  },
  {
    no: 224,
    businessName: "Popcorn Manufacturing Unit Project Report (Business Plan)"
  },
  {
    no: 225,
    businessName: "Neon Sign Boards Project Report Business Plan"
  },
  {
    no: 226,
    businessName: "Pressure Die Castings Project Report Business Plan"
  },
  {
    no: 227,
    businessName: "Poultry Farm Project Report (Business Plan)"
  },
  {
    no: 228,
    businessName: "Steel Castings Project Report Business Plan"
  },
  {
    no: 229,
    businessName: "Herbal extraction plant Business Project Report Plan"
  },
  {
    no: 230,
    businessName: "Tool Room For Plastic Die Making Project Report Business Plan"
  },
  {
    no: 231,
    businessName: "Ayurvedic Churna Business Project Report Plan"
  },
  {
    no: 232,
    businessName: "Ayurvedic Formulations Ashava, Aritha, Kwath, Etc Business Project Report Plan"
  },
  {
    no: 233,
    businessName: "Raisin Manufacturing Unit Project Report (Business Plan)"
  },
  {
    no: 234,
    businessName: "Bio Fertilizers Business Project Report Plan"
  },
  {
    no: 235,
    businessName: "Tool Room For Sheet Metal Die Making Project Report Business Plan"
  },
  {
    no: 236,
    businessName: "Bleached & Dehydrated Ginger Business Project Report Plan"
  },
  {
    no: 237,
    businessName: "Dehydrated Drumstick Powder Business Project Report Plan"
  },
  {
    no: 238,
    businessName: "Healthcare products Business Project Report Plan"
  },
  {
    no: 239,
    businessName: "Medicated Ghee Vachadi Ghrita Vg Business Project Report Plan"
  },
  {
    no: 240,
    businessName: "Medicinal Herbs Extraction Unit Business Project Report Plan"
  },
  {
    no: 241,
    businessName: "Briquetted Fuel Project Report Business Plan"
  },
  {
    no: 242,
    businessName: "Ready-to-Eat Foods Veg., Sweets, Rice_ Veg Project Report (Business Plan)"
  },
  {
    no: 243,
    businessName: "Papain from Papaya Business Project Report Plan"
  },
  {
    no: 244,
    businessName: "Pharmaceutical Formulation Unit Tablets And Capsules Business Project Report Plan"
  },
  {
    no: 245,
    businessName: "Spirulina Superfood Business Project Report Plan"
  },
  {
    no: 246,
    businessName: "Wire Drawing Project Report Business Plan"
  },
  {
    no: 247,
    businessName: "Sugar Globules Homeopathic Unit Business Project Report Plan"
  },
  {
    no: 248,
    businessName: "Calcined Bauxite Project Report Business Plan"
  },
  {
    no: 249,
    businessName: "Surgical Absorbent Cotton Business Project Report Plan"
  },
  {
    no: 250,
    businessName: "Surgical Bandages Business Project Report Plan"
  },
  {
    no: 251,
    businessName: "Dental Crown, Bridge & Allied Implants Project Report Business Plan"
  },
  {
    no: 252,
    businessName: "E Retail Outlet for Garments Project Report Business Plan"
  },
  {
    no: 253,
    businessName: "Fuel Bricketting Project Report Business Plan"
  },
  {
    no: 254,
    businessName: "Foot Wear Project Report (Business Plan)"
  },
  {
    no: 255,
    businessName: "Rice Flakes (Poa for Alu Poha & Chivda Poha) Project Report (Business Plan)"
  },
  {
    no: 256,
    businessName: "Roasted & Flavoured Peanuts & Other Nuts Project Report (Business Plan)"
  },
  {
    no: 257,
    businessName: "जैव उर्वरक प्रोजेक्ट रिपोर्ट व्यवसाय योजना Bio fertilizer Project Report Business Plan in Hindi PDF eBook"
  },
  {
    no: 258,
    businessName: "Full PVC Footwear Project Report (Business Plan)"
  },
  {
    no: 259,
    businessName: "Gas Lighter Project Report Business Plan"
  },
  {
    no: 260,
    businessName: "Double Filtered Groundnut & Other Oils Business Project Report Plan"
  },
  {
    no: 261,
    businessName: "Mineral Grinding Project Report Business Plan"
  },
  {
    no: 262,
    businessName: "Mineral Mixture for cattle and Poultry feed Project Report Business Plan"
  },
  {
    no: 263,
    businessName: "Roasted rice flakes Project Report (Business Plan)"
  },
  {
    no: 264,
    businessName: "Ophthalmic Lens Grinding Project Report Business Plan"
  },
  {
    no: 265,
    businessName: "Alternator Project Report Business Plan"
  },
  {
    no: 266,
    businessName: "Auto Cylinder Liners Project Report Business Plan"
  },
  {
    no: 267,
    businessName: "Petroleum Jelly (medical grade) Project Report Business Plan"
  },
  {
    no: 268,
    businessName: "Seasonings for Snacks Project Report (Business Plan)"
  },
  {
    no: 269,
    businessName: "Road Marking Material Project Report Business Plan"
  },
  {
    no: 270,
    businessName: "Diesel Generating Sets Project Report Business Plan"
  },
  {
    no: 271,
    businessName: "Auto Pistons and Piston Rings Project Report Business Plan"
  },
  {
    no: 272,
    businessName: "Automobile Body Building BUS LCV CAR Project Report Business Plan"
  },
  {
    no: 273,
    businessName: "Aluminium Utensils Project Report (Profile) Business Plan"
  },
  {
    no: 274,
    businessName: "Sesame seed Project Report (Business Plan)"
  }]
  const reports = [
    {
      no: 1,
      businessName:
        "Automobile Repairing Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1OMi2aELsE5v2rqnGgXcWPJqcqGQ7jFzVCXWLc9YlH0Y",
    },
    {
      no: 2,
      businessName:
        "Automobile Silencers Exhaust System Project Report Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1Aanezq9y5y4Ph0EfztNMoGZRHuyf1wycyPlv9_pkxU4/edit",
    },
    {
      no: 3,
      businessName: "Inverter Project Report Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1XLyiw9tcFPlyehDwxZXjWz7irbc_WFoOgRakVdMEL9U/edit",
    },
    {
      no: 4,
      businessName:
        "Bottled Drinking Water Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1EaTlblF4YJw3js5UldQBa6V0rF8L3FyUU-WpMHEdBMo/edit",
    },
    {
      no: 5,
      businessName: "Computer Key Board Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/17AnWi5_hZqzdqfU9XkpEeI6iHkdHAw--D8vL2W2Xm4k/edit",
    },
    {
      no: 6,
      businessName: "Choke LED Lights Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1UXS_0wQ1yPeDWOjOg5cchP7aCso9zRn-zT1gdUZ2b4c/edit",
    },
    {
      no: 7,
      businessName: "Home Furnishing Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1Xm35lqxfYLYbAMgugJM5FFpF-5-aEYw7L7IBM4sFMLY/edit",
    },
    {
      no: 8,
      businessName: "Mobile Repairing Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/4/d/1Wl0n9pTDbkh_iOkOktMdmoAUIVys7AxajjaLjSckWKU/edit",
    },
    {
      no: 9,
      businessName: "Brake Drums Project Report Business Plan",
      links:
        "https://docs.google.com/document/u/0/d/1-xe9XEZaqxjMrLLsTHEV2Bxn9lexJAcQktrKbryaMkQ/edit",
    },
    {
      no: 10,
      businessName:
        "Online Catering Home Delivery Service Project Report (Profile) Business Plan",
      links:
        "https://docs.google.com/document/u/0/d/1jJybEQ458K2ZTj3EVcIYZwp0jwS4G5A4CvaRdkCH_Jg/edit",
    },
    {
      no: 11,
      businessName: "Thermocol Packaging Project Report (Profile) Business Plan"
    },
    {
      no: 12,
      businessName: "Tyre Retrading Project Report (Profile) Business Plan"
    },
    {
      no: 13,
      businessName: "Bronze Bushes Project Report Business Plan"
    },
    {
      no: 14,
      businessName: "Commercial Vehicle Repair Workshop Project Report Business Plan"
    },
    {
      no: 15,
      businessName: "Electric Horn Project Report Business Plan"
    },
    {
      no: 16,
      businessName: "Soy Nuggets Project Report (Business Plan)"
    },
    {
      no: 17,
      businessName: "Electrical Motor Winding Rewinding Project Report Business Plan"
    },
    {
      no: 18,
      businessName: "Manufacturing Of Gear Boxes Project Report Business Plan"
    },
    {
      no: 19,
      businessName: "Manufacturing Of Servo Motors Project Report Business Plan"
    },
    {
      no: 20,
      businessName: "Soymilk Project Report (Business Plan)"
    },
    {
      no: 21,
      businessName: "Pressure Booster Systems for Household Use Project Report Business Plan"
    },
    {
      no: 22,
      businessName: "Spice Grinding Unit Chilli, Turmeric, Cumin Project Report (Business Plan)"
    },
    {
      no: 23,
      businessName: "Two Wheeler Repair and Service Unit Project Report Business Plan"
    },
    {
      no: 24,
      businessName: "Spray Dried Foods F&V Powders, Fat Powders Project Report (Business Plan)"
    },
    {
      no: 25,
      businessName: "Wheel Balancing & Alignment Project Report Business Plan"
    },
    {
      no: 26,
      businessName: "Diagnostic Center Project Report Business Plan"
    },
    {
      no: 27,
      businessName: "Indoor Sport Complex Project Report Business Plan"
    },
    {
      no: 28,
      businessName: "Baby Garments Project Report (Business Plan)"
    },
    {
      no: 29,
      businessName: "Medical Transcription Project Report Business Plan"
    },
    {
      no: 30,
      businessName: "Online Medical Delivery Service Project Report Business Plan"
    },
    {
      no: 31,
      businessName: "Online Shopping Cart Application Project Report Business Plan"
    },
    {
      no: 32,
      businessName: "Children Wear Project Report (Business Plan)"
    },
    {
      no: 33,
      businessName: "Tea Blending Unit Project Report (Business Plan)"
    },
    {
      no: 34,
      businessName: "Denim Garments Project Report (Business Plan)"
    },
    {
      no: 35,
      businessName: "CNC Engineering Workshop Project Report (Profile) Business Plan"
    },
    {
      no: 36,
      businessName: "Cement Paints Project Report (Business Plan)"
    },
    {
      no: 37,
      businessName: "Corrugated Boxes Project Report (Business Plan)"
    },
    {
      no: 38,
      businessName: "Disposal Plastic Cups Project Report (Business Plan)"
    },
    {
      no: 39,
      businessName: "Vacuum Dried fruits, vegetables and herbs Project Report (Business Plan)"
    },
    {
      no: 40,
      businessName: "Gents Ready Made Garments Project Report (Business Plan)"
    },
    {
      no: 41,
      businessName: "Wafer Biscuit Manufacturing Plant Project Report (Business Plan)"
    },
    {
      no: 42,
      businessName: "Knitted Cotton Garments Project Report (Business Plan)"
    },
    {
      no: 43,
      businessName: "Diesel Engine Pump Repair Shop Project Report (Business Plan)"
    },
    {
      no: 44,
      businessName: "Whole Wheat Flour (Atta Mill) Project Report (Business Plan)"
    },
    {
      no: 45,
      businessName: "Four Wheel Automobile Repairing Project Report (Business Plan)"
    },
    {
      no: 46,
      businessName: "Ladies Gowns & Nighty Project Report (Business Plan)"
    },
    {
      no: 47,
      businessName: "Ladies Suits Project Report (Business Plan)"
    },
    {
      no: 48,
      businessName: "Leather Belt Project Report (Business Plan)"
    },
    {
      no: 49,
      businessName: "Gummed Paper Tape Project Report (Business Plan)"
    },
    {
      no: 50,
      businessName: "Lingerie Project Report (Business Plan)"
    },
    {
      no: 51,
      businessName: "Made ups Project Report (Business Plan)"
    },
    {
      no: 52,
      businessName: "Note Book Manufacturing Project Report (Business Plan)"
    },
    {
      no: 53,
      businessName: "Men's Under Garments Project Report (Business Plan)"
    },
    {
      no: 54,
      businessName: "Engineering Workshop Project Report (Profile) Business Plan"
    },
    {
      no: 55,
      businessName: "Readymade Garments Project Report (Business Plan)"
    },
    {
      no: 56,
      businessName: "Shawls Stoles Scarves and Wraps Project Report (Business Plan)"
    },
    {
      no: 57,
      businessName: "Day Spa Project Report (Business Plan)"
    },
    {
      no: 58,
      businessName: "Track Suits Project Report (Business Plan)"
    },
    {
      no: 59,
      businessName: "Uniforms Project Report (Business Plan)"
    },
    {
      no: 60,
      businessName: "Palm Plate Project Report (Business Plan)"
    },
    {
      no: 61,
      businessName: "Floor Cleaning And Polishing Compound Project Report (Business Plan)"
    },
    {
      no: 62,
      businessName: "Paper Bags & Pouches Project Report (Business Plan)"
    },
    {
      no: 63,
      businessName: "Paper Napkins Project Report (Business Plan)"
    },
    {
      no: 64,
      businessName: "Paper Cups Project Report (Business Plan)"
    },
    {
      no: 65,
      businessName: "Cleaning Agro Commodities Project Report (Business Plan)"
    },
    {
      no: 66,
      businessName: "Plastic Carry Bags Project Report (Business Plan)"
    },
    {
      no: 67,
      businessName: "Detergent Powder and Cake Project Report (Business Plan)"
    },
    {
      no: 68,
      businessName: "Banana Fibre Extraction And Processing Project Report (Business Plan)"
    },
    {
      no: 69,
      businessName: "Bed Linen Project Report (Business Plan)"
    },
    {
      no: 70,
      businessName: "Hair Dye Project Report (Business Plan)"
    },
    {
      no: 71,
      businessName: "Disposable Plastic Syringes Project Report Business Plan"
    },
    {
      no: 72,
      businessName: "Amla Processing Project Report & (Business Plan)"
    },
    {
      no: 73,
      businessName: "Bakery Products Project Report & (Business Plan)"
    },
    {
      no: 74,
      businessName: "Cement Mosaic Tiles Project Report (Business Plan)"
    },
    {
      no: 75,
      businessName: "Besan Plant Project Report & (Business Plan)"
    },
    {
      no: 76,
      businessName: "Biscuit Plant for Sweet, Cream, Premier types Project Report (Business Plan)"
    },
    {
      no: 77,
      businessName: "Bread Plant Project Report (Business Plan)"
    },
    {
      no: 78,
      businessName: "Cotton Knitted Fabrics Project Report (Business Plan)"
    },
    {
      no: 79,
      businessName: "Canning Unit F&V Products, Mango Project Report (Business Plan)"
    },
    {
      no: 80,
      businessName: "Hair Oil Project Report (Business Plan)"
    },
    {
      no: 81,
      businessName: "Casein from Milk Project Report (Business Plan)"
    },
    {
      no: 82,
      businessName: "Cashew Processing, Granding Packing Project Report (Business Plan)"
    },
    {
      no: 83,
      businessName: "Coconut Water in PET Bottles Business Project Report Plan"
    },
    {
      no: 84,
      businessName: "Elastic Tape Project Report (Business Plan)"
    },
    {
      no: 85,
      businessName: "Castor Oil Commercial Project Report (Business Plan)"
    },
    {
      no: 86,
      businessName: "Food Colours Business Project Report Plan"
    },
    {
      no: 87,
      businessName: "Cattle Poultry Feed Project Report (Business Plan)"
    },
    {
      no: 88,
      businessName: "Granite Tiles Project Report (Business Plan)"
    },
    {
      no: 89,
      businessName: "Confectionery High Boiled Toffees Project Report (Business Plan)"
    },
    {
      no: 90,
      businessName: "Drip Irrigation Pipes Project Report Business Plan"
    },
    {
      no: 91,
      businessName: "Corn and Multi Grain Flakes Project Report (Business Plan)"
    },
    {
      no: 92,
      businessName: "Malt Extract From Barley Business Project Report Plan"
    },
    {
      no: 93,
      businessName: "Water Proofing Service Project Report (Business Plan)"
    },
    {
      no: 94,
      businessName: "Non- Feric Alum Business Project Report Plan"
    },
    {
      no: 95,
      businessName: "Herbal Cosmetics Project Report (Business Plan)"
    },
    {
      no: 96,
      businessName: "Coir Matresses Project Report (Business Plan)"
    },
    {
      no: 97,
      businessName: "Ready to Serve Drinks & Soft Drinks with CO2 Business Project Report Plan"
    },
    {
      no: 98,
      businessName: "Latex Foam Project Report (Business Plan)"
    },
    {
      no: 99,
      businessName: "Cracking nuts unit Project Report (Business Plan)"
    }
  ];

  return (
    <>
      <div className="text-center font-[25px] text-white bg-black" >
        <span>There are 250+ Project reports.</span>
        <a
          href="https://docs.google.com/spreadsheets/d/1FiNxryEtVJWck7K6Auv668MfvEHCg47cMY5_sAq2DnY/edit#gid=0"
          target="_blank"
          className="hover:underline hover:text-orange-700 hover:bg-white"
        >
          <span> Click here to read All Reports</span>{" "}
        </a>
      </div>

      <div className="bg-gray-100 flex items-center justify-center ">
        <div className="
        flex flex-wrap justify-center
        ">
          {reports.map((item) => (
            // <a href={item.links} target="_blank">
            <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md m-4 p-4 w-48 lg:m-2">
              <h2 className="text-md font-semibold hover:underline">  <a href={item.links} target="_blank">{item.businessName}</a></h2>
              {/* <p className="text-gray-600 mt-2">Report Number: {item.no}</p> */}
              {/* <button className="bg-gray-200 text-black  transition duration-300 hover:bg-orange-700 hover:text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline-blue">
                <a href={item.links} target="_blank">
                  View Report
                </a>
              </button> */}
            </div>
           
          ))}
        </div>
      </div>

      <div className="text-center font-[25px] text-white bg-black" >
        <span>There are 250+ Project reports.</span>
        <a
          href="https://docs.google.com/spreadsheets/d/1FiNxryEtVJWck7K6Auv668MfvEHCg47cMY5_sAq2DnY/edit#gid=0"
          target="_blank"
          className="hover:underline hover:text-orange-700 hover:bg-white"
        >
          <span> Click here to read All Report</span>{" "}
        </a>
      </div>
    </>
  );
};

export default Reports;
