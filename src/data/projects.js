// Import assets
import govImg from '../assets/government/government_project_sample_1768918380000.png';
import commImg from '../assets/commercial/commercial_project_sample_1768918445563.png';
import resImg from '../assets/portfolio_all_1768919396029.png'; // Placeholder for residential

export const projects = [
    {
        id: 1,
        slug: 'sydney-metro-extension',
        title: 'Sydney Metro Extension',
        category: 'Government',
        location: 'Sydney, NSW',
        image: govImg,
        year: '2024',
        value: '$850M',
        duration: '24 Months',
        client: 'NSW Government',
        address: 'Central Business District, Sydney',
        description: 'A landmark infrastructure project enhancing urban connectivity through technical excellence and precision engineering.',
        overview: 'The primary objective of the redevelopment was to transform the arena from an open pavilion into a state-of-the-art, fully covered multi-purpose venue. This upgrade was designed not only to meet current building codes but also to significantly enhance the experience for athletes, spectators, and event organisers.',
        highlights: [
            'Installation of new lighting and sound systems',
            'Integration of large-format video screens',
            'Upgraded seating and spectator amenities',
            'Improved structural performance and code compliance'
        ],
        highlightsConclusion: 'These improvements established a new benchmark for Australian sports facilities, enabling the venue to host both tennis and netball events at an elite level.',
        scope: [
            'Installation of structural laminated glass balustrades',
            'Engineering of heavy steel stanchion support system',
            'Perimeter and seating-area safety upgrades',
            'Compliance with crowd-load performance standards'
        ],
        scopeConclusion: 'The balustrades were engineered to maintain safety across all 10,000 seats—even during peak occupancy for major tournaments and events.',
        delivery: 'Completed ahead of schedule for the 2024 Metro Launch. The upgraded infrastructure now meets modern codes and delivers a significantly enhanced commuter experience.',
        images: [govImg, commImg, resImg]
    },
    {
        id: 2,
        slug: 'the-emerald-heights',
        title: 'The Emerald Heights',
        category: 'Residential',
        location: 'Gold Coast, QLD',
        image: resImg,
        year: '2023',
        value: '$120M',
        duration: '18 Months',
        client: 'Azure Developments',
        address: 'Surfers Paradise, QLD',
        description: 'A luxury boutique residential development redefining coastal living with premium finishes and architectural mastery.',
        overview: 'Redefining the coastline, this project involved the complex construction of a high-rise tower on sandy terrain, requiring innovative piling and wind-resistant structural design.',
        highlights: [
            'Smart home automation integration',
            'High-performance facade glazing',
            'Automated subterranean parking',
            'Rooftop leisure and infinity pool'
        ],
        highlightsConclusion: 'These residential features have set a new standard for luxury living in the region, blending high-tech convenience with unparalleled coastal aesthetics.',
        scope: [
            'Structural pile foundation engineering',
            'Post-tensioned slab construction',
            'Architectural facade installation',
            'Interior luxury fit-out'
        ],
        scopeConclusion: 'The structural engineering ensures long-term durability against extreme coastal weather while maintaining the architectural elegance of the slim profile.',
        delivery: 'Handover was finalized in late 2023 with 100% occupancy achieved at launch. The project has since won multiple awards for coastal architecture.',
        images: [resImg, govImg, commImg]
    },
    {
        id: 3,
        slug: 'technexus-hq',
        title: 'TechNexus HQ',
        category: 'Commercial',
        location: 'Melbourne, VIC',
        image: commImg,
        year: '2025',
        value: '$210M',
        duration: '32 Months',
        client: 'Global Tech Corp',
        address: 'Docklands, Melbourne',
        description: 'A high-spec commercial development designed for innovation, featuring sustainable architecture and 5D BIM integration.',
        overview: 'TechNexus HQ represents the future of commercial workspace, focusing on flexibility and technological integration within a carbon-neutral framework.',
        highlights: [
            'Net Zero carbon lifecycle operations',
            'AI-integrated building management',
            'Modular workspace configurations',
            'Biophilic atrium and green walls'
        ],
        highlightsConclusion: 'By integrating sustainability with deep tech, this development establishes a blueprint for future-proofed commercial hubs globally.',
        scope: [
            'Exoskeleton structural engineering',
            'Tier-4 data center construction',
            'Integrated solar glass facade',
            'Sustainable HVAC system design'
        ],
        scopeConclusion: 'The innovative exoskeleton removes the need for internal pillars, maximizing usable floor space while enhancing structural integrity.',
        delivery: 'The project is currently tracking ahead of schedule for a early 2025 opening, setting a new benchmark for sustainable commercial developments in Australia.',
        images: [commImg, resImg, govImg]
    }
];
