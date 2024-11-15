const organisations = [
  {
    _id: "5d713995b721c3bb38c1f5d0",
    user: "5d7a514b5d2c12c7449be045",
    type: "Entreprise",
    name: "KRYSTO",
    description: "Devworks est une entreprise de développement spécialisée dans les solutions JavaScript complètes, avec un engagement en faveur de la durabilité et du recyclage.",
    website: "https://devworks.com",
    plasticTypes: [
      "737a3694e5fc335f796a4943",
      "737a3694e5fc335f796a4945",
      "737a3694e5fc335f796a4946"
    ],
    phone: "(111) 111-1111",
    email: "contact@devworks.com",
    address: "5 rue des ecoles , 74150 Rumilly",
    careers: ["Injection"],
    housing: true,
    jobAssistance: true,
    jobGuarantee: false,
    acceptGi: true,
    colors: {
      primary: "#0044CC",
      secondary: "#88CC44",
      accent: "#FF5733"
    },
    legalInfo: {
      siret: "12345678901234",
      legalStatus: "SAS"
    },
    contactInfo: {
      primaryContact: {
        name: "John Doe",
        role: "CEO",
        phone: "(111) 222-3333"
      },
      secondaryPhone: "(111) 222-4444"
    },
    certifications: ["ISO 14001", "Precious Plastic Member"],
    socialLinks: {
      linkedin: "https://linkedin.com/devworks",
      instagram: "https://instagram.com/devworks",
      facebook: "https://facebook.com/devworks"
    }
  },
  {
    _id: "5d713a66ec8f2b88b8f830b8",
    user: "5d7a514b5d2c12c7449be046",
    type: "Association",
    name: "Precious Plastique Australia",
    description: "Une organisation dédiée à la formation et à l'accompagnement dans le domaine du recyclage plastique.",
    website: "https://moderntech.com",
    phone: "(222) 222-2222",
    email: "contact@preciousplastique.com",
    address: "8 rue Higginson, 98800, Nouméa",
    careers: ["Injection", "Extrusion"],
    plasticTypes: ["737a3694e5fc335f796a4943", "737a3694e5fc335f796a4946"],
    housing: false,
    jobAssistance: true,
    jobGuarantee: false,
    acceptGi: true,
    colors: {
      primary: "#0088CC",
      secondary: "#FFDD44",
      accent: "#FF5733"
    },
    legalInfo: {
      siret: "23456789012345",
      legalStatus: "Association"
    },
    contactInfo: {
      primaryContact: {
        name: "Jane Smith",
        role: "Présidente",
        phone: "(222) 333-4444"
      }
    },
    certifications: ["B Corp", "Precious Plastic Member"],
    socialLinks: {
      facebook: "https://facebook.com/preciousplastiqueaustralia"
    }
  },
  {
    _id: "5d725a037b292f5f8ceff787",
    user: "5c8a1d5b0190b214360dc031",
    type: "Association",
    name: "Hello Waste",
    description: "Hello Waste transforme le recyclage plastique en opportunités économiques pour les communautés locales.",
    website: "https://codemasters.com",
    phone: "(333) 333-3333",
    email: "hello@hellowaste.com",
    address: "85 South Prospect Street Burlington VT 05405",
    careers: ["Injection", "Extrusion", "Art"],
    plasticTypes: ["737a3694e5fc335f796a4945", "737a3694e5fc335f796a4946"],
    housing: false,
    jobAssistance: false,
    jobGuarantee: false,
    acceptGi: false,
    colors: {
      primary: "#33CC99",
      secondary: "#CCFF00",
      accent: "#FF5733"
    },
    legalInfo: {
      siret: "34567890123456",
      legalStatus: "Association"
    },
    contactInfo: {
      primaryContact: {
        name: "Paul Martin",
        role: "Directeur",
        phone: "(333) 444-5555"
      }
    },
    certifications: ["ISO 14001"],
    socialLinks: {
      instagram: "https://instagram.com/hellowaste",
      linkedin: "https://linkedin.com/hellowaste"
    }
  },
  {
    _id: "5d725a1b7b292f5f8ceff788",
    user: "5c8a1d5b0190b214360dc032",
    type: "Entreprise",
    name: "Samji",
    description: "Samji se spécialise dans la production d'objets recyclés de haute qualité.",
    website: "https://devcentral.com",
    phone: "(444) 444-4444",
    email: "contact@samji.com",
    address: "24 rue Édouard Branly, 85500 LES HERBIERS",
    careers: ["Injection", "Extrusion", "Compression"],
    plasticTypes: [
      "737a3694e5fc335f796a4943",
      "737a3694e5fc335f796a4945",
      "737a3694e5fc335f796a4946"
    ],
    housing: false,
    jobAssistance: true,
    jobGuarantee: true,
    acceptGi: true,
    colors: {
      primary: "#FF3399",
      secondary: "#6600CC",
      accent: "#00FF66"
    },
    legalInfo: {
      siret: "45678901234567",
      legalStatus: "SAS"
    },
    contactInfo: {
      primaryContact: {
        name: "Sara Lee",
        role: "Directrice",
        phone: "(444) 555-6666"
      }
    },
    certifications: ["Precious Plastic Member"],
    socialLinks: {
      linkedin: "https://linkedin.com/samji",
      twitter: "https://twitter.com/samji"
    }
  }
];

export default organisations;
