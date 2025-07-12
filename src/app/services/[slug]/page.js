import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

// Distribution Contracts & Infrastructure Works
import distributionMain from '@/assets/Services/Distribution Contracts & Infrastructure Works/main.jpg';
import distributionCard1 from '@/assets/Services/Distribution Contracts & Infrastructure Works/card1.jpg';
import distributionCard2 from '@/assets/Services/Distribution Contracts & Infrastructure Works/card2.jpg';
import distributionCard3 from '@/assets/Services/Distribution Contracts & Infrastructure Works/card3.jpg';
import distributionCard4 from '@/assets/Services/Distribution Contracts & Infrastructure Works/card4.jpg';
import distributionCard5 from '@/assets/Services/Distribution Contracts & Infrastructure Works/card5.jpg';

// Grid-Connected Solar Projects
import solarMain from '@/assets/Services/Grid-Connected Solar Projects/main.jpg';
import solarCard1 from '@/assets/Services/Grid-Connected Solar Projects/card1.jpg';
import solarCard2 from '@/assets/Services/Grid-Connected Solar Projects/card2.jpg';
import solarCard3 from '@/assets/Services/Grid-Connected Solar Projects/card3.jpg';
import solarCard4 from '@/assets/Services/Grid-Connected Solar Projects/card4.jpg';

// Industrial & Commercial Electrical Installations
import electricalMain from '@/assets/Services/Industrial & Commercial Electrical Installations/main.jpg';
import electricalCard1 from '@/assets/Services/Industrial & Commercial Electrical Installations/card1.jpg';
import electricalCard2 from '@/assets/Services/Industrial & Commercial Electrical Installations/card2.jpg';
import electricalCard3 from '@/assets/Services/Industrial & Commercial Electrical Installations/card3.jpg';

// Electrical Maintenance & Service Packages
import maintenanceMain from '@/assets/Services/Electrical Maintenance & Service Packages/main.jpg';
import maintenanceCard1 from '@/assets/Services/Electrical Maintenance & Service Packages/card1.jpg';
import maintenanceCard2 from '@/assets/Services/Electrical Maintenance & Service Packages/card2.jpg';
import maintenanceCard3 from '@/assets/Services/Electrical Maintenance & Service Packages/card3.jpg';
import maintenanceCard4 from '@/assets/Services/Electrical Maintenance & Service Packages/card4.jpg';

// Site Survey & Electrical Consultation
import consultationMain from '@/assets/Services/Site Survey & Electrical Consultation/main.jpg';
import consultationCard1 from '@/assets/Services/Site Survey & Electrical Consultation/card1.jpg';
import consultationCard2 from '@/assets/Services/Site Survey & Electrical Consultation/card2.jpg';
import consultationCard3 from '@/assets/Services/Site Survey & Electrical Consultation/card3.jpg';
import consultationCard5 from '@/assets/Services/Site Survey & Electrical Consultation/card5.jpg';

const services = [
  {
    id: 1,
    title: "Distribution Contracts & Infrastructure Works",
    slug: "distribution-contracts",
    description: "This core service covers comprehensive contracting solutions for power distribution infrastructure, executed with full regulatory compliance and technical precision.",
    scopeOfServices: {
      turnkeyExecution: {
        title: "Turnkey Execution of Electrical Infrastructure",
        items: [
          "33/11kV Substations (ESS)",
          "33kV, 11kV Overhead Line Erection",
          "Distribution Transformer (DTC) Installation (25 kVA to 1000 kVA)",
          "LT Line and Pole Infrastructure Development"
        ]
      },
      relocation: {
        title: "Relocation, Shifting & Dismantling",
        items: [
          "33kV and 11kV Overhead Lines",
          "DTC Shifting and Pole Realignment",
          "Conversion of Bare Conductors to AB Cable / Insulated Conductors",
          "LT Line Reconfiguration and Network Optimization"
        ]
      },
      commissioning: {
        title: "Commissioning & Liaisoning",
        items: [
          "Customer support in approval, sanction, and commissioning of substations and distribution lines",
          "Service connection documentation & coordination with DISCOM and government authorities",
          "Preparation of technical drawings, SLDs, and compliance documentation"
        ]
      },
      supervision: {
        title: "Supervision & Monitoring Services",
        items: [
          "Supervision of erection and maintenance of DTCs, HT/LT lines, cable meters, and substation",
          "Quality checks, contractor coordination, and safety assurance",
          "Underground cabling supervision for urban electrical infrastructure"
        ]
      },
      additional: {
        title: "Additional Capabilities",
        items: [
          "Load checking and testing, including thermal imaging",
          "Emergency restoration and transformer replacement services",
          "Installation of capacitor banks and power factor correction equipment"
        ]
      }
    }
  },
  {
    id: 2,
    title: "Grid-Connected Solar Projects",
    slug: "grid-connected-solar",
    description: "We provide end-to-end EPC (Engineering, Procurement, and Construction) services for grid-connected solar systems, helping clients reduce energy costs and adopt clean, renewable power.",
    scopeOfServices: {
      residential: {
        title: "Residential Rooftop Projects (With Govt. Subsidy)",
        items: [
          "We install and construct rooftop solar systems under the PM Surya Ghar - Muft Bijli Yojana (PMG-MBY), handling everything from design and documentation to net metering and installation",
          "As an MNRE approved agency, we ensure smooth execution along with a 5-year comprehensive service warranty for worry-free ownership"
        ]
      },
      commercial: {
        title: "Residential, Commercial, and Industrial Projects (Non-Subsidize)",
        items: [
          "For customers outside subsidy coverage, we offer tailored grid-connected solar systems for homes, offices, commercial establishments and buildings",
          "Systems are designed for optimum performance and come with a 5-year service warranty, ensuring continued support and maintenance"
        ]
      },
      megawatt: {
        title: "Megawatt-Scale Solar Projects",
        items: [
          "We undertake large-scale EPC projects for industrial clients, solar parks or captive use",
          "From DPR and clearance to installation and synchronization, we manage the full scope with regulatory compliance and technical accuracy"
        ]
      },
      operations: {
        title: "Operation & Maintenance (O&M)",
        items: [
          "We offer professional solar O&M services including scheduled cleaning, performance checks, fault repair, and inverter monitoring",
          "We can undertake periodic system maintenance for other panel cleaning, helping clients maintain peak generation and system uptime"
        ]
      }
    }
  },
  {
    id: 3,
    title: "Industrial & Commercial Electrical Installations",
    slug: "electrical-installations",
    description: "This service covers all types of structured electrical wiring and installations across residential, commercial, and industrial properties, with full compliance to safety and electrical standards.",
    scopeOfServices: {
      residential: {
        title: "Residential Electrical Installations",
        items: [
          "Complete internal and external wiring for homes, apartments and bungalows",
          "DB (Distribution Board) setup with circuit protection",
          "Earthing and lightning protection systems",
          "Installation of meter box, load balancing and safety checks"
        ]
      },
      commercial: {
        title: "Commercial Electrical Installations",
        items: [
          "Wiring for offices, shops, complex and institutions with proper load distribution",
          "Setup of MCBs, ELCBs, and protection devices",
          "Cable management for lighting, ACs, and office equipment",
          "Installation of panel boards, sockets, and power points"
        ]
      },
      industrial: {
        title: "Industrial Electrical Installations",
        items: [
          "Three phase supply and wiring for industrial units",
          "Installation of LT panels, MCC panels, and APFC (Automatic Power Factor Control)",
          "Heavy load distribution and grounding systems",
          "Compliance with industrial electrical safety and inspection standards"
        ]
      }
    }
  },
  {
    id: 4,
    title: "Electrical Maintenance & Service Packages",
    slug: "maintenance-services",
    description: "Our service packages are designed for hassle-free annual support. Customers can register under appropriate yearly plans and receive professional onsite visits as per their needs. Service charges are included, but materials or new installation work are charged separately.",
    scopeOfServices: {
      domestic: {
        title: "Domestic Service Packages",
        items: [
          "These packages cover routine electrical issues in homes, such as fan capacitor changes, switch/socket replacement",
          "Wiring maintenance, tripping issues, and minor repairs",
          "Regular visits are scheduled based on the chosen package to ensure quick and reliable support without repeated booking hassles"
        ]
      },
      industrial: {
        title: "Industrial Service Packages",
        items: [
          "Ideal for power-house and small factories, these packages offer priority service during breakdowns and small faults that can cause production shutdowns",
          "With a registered package, units receive fast response and expert on-site support to minimize downtime"
        ]
      },
      maintenance: {
        title: "Maintenance Contracts and Visits",
        items: [
          "We offer one-time, lump sum maintenance contracts for residential societies, commercial properties, and industrial setups",
          "These contracts cover pre-determined technical visits, fault diagnosis, and repair services based on predefined coverage",
          "Clients benefit from quick support without the need for repeated bookings, all under a single agreement"
        ]
      },
      solar: {
        title: "Solar Panel Cleaning Packages",
        items: [
          "We provide reliable solar panel cleaning services that are essential to maintain optimal performance",
          "Packages are designed to maintain system performance with visits scheduled as per the chosen plan",
          "Only service is included - cleaning tools and additional repairs, if any, are charged separately"
        ]
      }
    }
  },
  {
    id: 5,
    title: "Site Survey & Electrical Consultation",
    slug: "site-survey-consultation",
    description: "We offer paid, expert-level survey and consultation services to help residential, commercial, and industrial clients make informed, compliant, and technically sound decisions. Whether it's understanding electrical issues, planning load distribution, addressing electrical faults, or exploring solar feasibility, our guidance ensures safety, efficiency, and legal clarity in every situation.",
    scopeOfServices: {
      inspection: {
        title: "Site Inspection & Survey",
        items: [
          "We conduct thorough inspections to assess the suitability of existing or proposed electrical infrastructure for our industrial clients",
          "This includes load analysis, distribution planning, protection system recommendations, system designing, and electrical mapping",
          "Surveys also cover rooftop feasibility (for solar), and overall assessment for connections, upgrades, or modifications"
        ]
      },
      technical: {
        title: "Technical Consulting & Legal Awareness Support",
        items: [
          "Many consumers face issues with service providers or utilities when they need new connections or face billing issues",
          "We help determine whether the issue is genuine or simply a misunderstanding",
          "Our team conducts site surveys, gathers technical observations, and analyzes billing trends to offer accurate, case-specific guidance",
          "We also educate consumers about their rights, responsibilities, and available legal options to help them find a fair and informed resolution"
        ]
      },
      safety: {
        title: "Electrical Safety & Tariff Compliance Advisory",
        items: [
          "We provide expert guidance on voltage drops, earthing issues, transient tripping, and general system safety",
          "Consumers are also advised on existing provisions for optimizing their power factor, and selecting the best suitable tariff based on their consumption pattern",
          "Our recommendations focus on both cost optimization and promoting safe and compliant electrical usage"
        ]
      },
      solar: {
        title: "Solar Advisory & Utility Liaison Support",
        items: [
          "We guide consumers through the growing field of solar and renewable energy by providing clear advice on system types, billing methods, expected savings, and applicable government schemes",
          "Alongside this, we assist with sanctions, new power connections, and other consumer facilitation processes provided by utilities",
          "Ensuring a smooth and complete experience from start to finish"
        ]
      }
    }
  }
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceCard = ({ title, items, cardImage }) => (
  <div className={styles.serviceCard}>
    <div className={styles.cardHeader}>
      <h3>{title}</h3>
    </div>
    {cardImage && (
      <div className={styles.cardImage}>
        <Image
          src={cardImage}
          alt={title}
          width={400}
          height={300}
          className={styles.serviceImage}
        />
      </div>
    )}
    <div className={styles.cardContent}>
      <ul className={styles.serviceList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ServicePage({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Map hero images to services
  const heroImages = {
    'distribution-contracts': distributionMain,
    'grid-connected-solar': solarMain,
    'electrical-installations': electricalMain,
    'maintenance-services': maintenanceMain,
    'site-survey-consultation': consultationMain,
  };

  // Map card images based on service type
  const getCardImages = (slug) => {
    const imageMap = {
      'distribution-contracts': {
        turnkeyExecution: distributionCard1,
        relocation: distributionCard2,
        commissioning: distributionCard3,
        supervision: distributionCard4,
        additional: distributionCard5,
      },
      'grid-connected-solar': {
        residential: solarCard1,
        commercial: solarCard2,
        megawatt: solarCard3,
        operations: solarCard4,
      },
      'electrical-installations': {
        residential: electricalCard1,
        commercial: electricalCard2,
        industrial: electricalCard3,
      },
      'maintenance-services': {
        domestic: maintenanceCard1,
        industrial: maintenanceCard2,
        maintenance: maintenanceCard3,
        solar: maintenanceCard4,
      },
      'site-survey-consultation': {
        inspection: consultationCard1,
        technical: consultationCard2,
        safety: consultationCard3,
        solar: consultationCard5,
      },
    };
    return imageMap[slug] || {};
  };

  const cardImages = getCardImages(service.slug);

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>{service.title}</h1>
        <p className={styles.description}>{service.description}</p>
        <div className={styles.heroImage}>
          <Image
            src={heroImages[service.slug]}
            alt={service.title}
            width={1200}
            height={600}
            className={styles.mainImage}
            priority
          />
        </div>
      </div>

      <div className={styles.scopeSection}>
        <h2 className={styles.sectionTitle}>Scope of Services:</h2>
        
        <div className={styles.serviceGrid}>
          {Object.entries(service.scopeOfServices).map(([key, section], index) => (
            <ServiceCard
              key={key}
              title={section.title}
              items={section.items}
              cardImage={cardImages[key]}
            />
          ))}
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p>Contact us for a detailed consultation about your {service.title.toLowerCase()} needs.</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
    </div>
  );
} 