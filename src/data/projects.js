// Import assets
import govImg from '../assets/government/government_project_sample_1768918380000.png';
import commImg from '../assets/commercial/commercial_project_sample_1768918445563.png';
import resImg from '../assets/portfolio_all_1768919396029.png'; // Placeholder for residential

// Granville C Tower images
import granville1 from '../assets/img/Residential/GranvilleC/img001.jpeg';
import granville2 from '../assets/img/Residential/GranvilleC/img002.jpeg';
import granville3 from '../assets/img/Residential/GranvilleC/img003.jpeg';
import granville4 from '../assets/img/Residential/GranvilleC/img004.jpeg';
import granville5 from '../assets/img/Residential/GranvilleC/img005.jpeg';
import granville6 from '../assets/img/Residential/GranvilleC/img006.jpeg';

// NBN Project images
import nbn1 from '../assets/img/Commercial/NBN/Photo1.jpg';
import nbn2 from '../assets/img/Commercial/NBN/Photo2.jpg';
import nbn3 from '../assets/img/Commercial/NBN/Photo3.jpg';
import nbn4 from '../assets/img/Commercial/NBN/Photo4.jpg';

// Green Acre Splash Park images
import greenAcre1 from '../assets/img/Government/GreenAcre/001.jpg';
import greenAcre2 from '../assets/img/Government/GreenAcre/002.jpg';
import greenAcre3 from '../assets/img/Government/GreenAcre/003.png';
import greenAcre4 from '../assets/img/Government/GreenAcre/004.jpeg';
import greenAcre5 from '../assets/img/Government/GreenAcre/005.jpg';


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
    },
    {
        id: 4,
        slug: 'granville-c-tower',
        title: 'Granville C Tower',
        category: 'Residential',
        location: 'Granville, NSW',
        image: granville1,
        year: '2024',
        value: '$95M',
        duration: '22 Months',
        client: 'Granville Urban Living',
        address: 'Granville Station Precinct, NSW',
        description: 'A sophisticated urban residential landmark, blending modern architectural design with community-focused living spaces.',
        overview: 'The Granville C Tower project represents a major milestone in urban rejuvenation, providing high-density luxury living with a focus on structural resilience and sustainable urban planning.',
        highlights: [
            'Integrated high-speed commuter access',
            'Sustainable rainwater harvesting systems',
            'Premium architectural glass facades',
            'Communal sky lounge and gardens'
        ],
        highlightsConclusion: 'The tower has become a focal point of Granville’s new skyline, offering world-class amenities to its residents.',
        scope: [
            'Multi-level structural concrete framing',
            'Architectural curtain wall installation',
            'BIM-coordinated building services',
            'High-end residential interior fit-outs'
        ],
        scopeConclusion: 'Precise engineering was required to coordinate construction activities in the high-traffic station precinct.',
        delivery: 'Completed in mid-2024, Granville C Tower has achieved full occupancy and is praised for its seamless integration into the transport hub.',
        images: [granville1, granville2, granville3, granville4, granville5, granville6]
    },
    {
        id: 5,
        slug: 'nbn-infrastructure-hub',
        title: 'NBN Network Hub & Infrastructure',
        category: 'Commercial',
        location: 'Multiple Locations, NSW',
        image: nbn2,
        year: '2024',
        value: '$180M',
        duration: '24 Months',
        client: 'NBN Co',
        address: 'Sydney Metro & Regional NSW',
        description: 'Critical telecommunications infrastructure rollout including high-security facility upgrades and network node integration.',
        overview: 'The NBN Network Hub project involved the delivery of technically complex telecommunications facilities designed to house critical network hardware. These high-security environments required integrated climate control, redundant power systems, and specialist structural steel frameworks to support delicate equipment in both urban and remote coastal environments.',
        highlights: [
            'Grade-A security integration',
            'Precision climate control systems',
            'Redundant power infrastructure',
            'Civil and structural upgrades'
        ],
        highlightsConclusion: 'These facilities now serve as the backbone for high-speed connectivity across the region, meeting the highest standards of reliability and security.',
        scope: [
            'High-security facility fit-outs',
            'Structural steel mezzanine construction',
            'Specialised HVAC installations',
            'Underground service coordination'
        ],
        scopeConclusion: 'All works were delivered within live network environments, requiring meticulous planning to avoid service interruptions.',
        delivery: 'Successfully handed over in late 2024, the infrastructure meets all federal compliance standards and has significantly boosted network capacity.',
        images: [nbn1, nbn2, nbn3, nbn4]
    },
    {
        id: 6,
        slug: 'green-acre-splash-park',
        title: 'Green Acre Splash Park',
        category: 'Government',
        location: 'Greenacre, NSW',
        image: greenAcre4,
        year: '2023',
        value: '$12M',
        duration: '14 Months',
        client: 'City of Canterbury-Bankstown',
        address: 'Greenacre, NSW',
        description: 'A vibrant community aquatic facility designed for accessibility, safety, and modern recreational value.',
        overview: 'The Green Acre Splash Park project involved the technical delivery of a specialized regional water play facility. Our team managed the precise installation of hydraulic systems, non-slip surfacing, and custom-engineered water features while ensuring strict adherence to public safety and water conservation standards. The facility serves as a flagship community hub for the Greenacre area.',
        highlights: [
            'Precision hydraulic water feature installation',
            'Advanced water filtration and treatment systems',
            'Full disability (DDA) accessibility integration',
            'Bespoke architectural shade structures'
        ],
        highlightsConclusion: 'The splash park has since become a major regional destination, providing a cost-free cooling and recreational asset for the community.',
        scope: [
            'Excavation and civil drainage works',
            'Specialist aquatic hydraulic engineering',
            'Durable anti-slip safety surfacing',
            'Landscaping and public amenity construction'
        ],
        scopeConclusion: 'Careful management of live site constraints allowed the project to be completed with minimal impact on the surrounding parklands.',
        delivery: 'Completed in late 2023, the facility was delivered with 100% compliance to safety standards and has seen record-breaking attendance since its opening.',
        images: [greenAcre1, greenAcre2, greenAcre3, greenAcre4, greenAcre5]
    }
];
