const categories = [
    {
        title: "Core Network",
        sub_title: "Core Strength for a Connected World.",
        description: "Empowering Networks, Transforming Communication.",
        solutions: [
            {
                title: "MNO Solution",
                sub_title: "Enabling Reliable, Scalable, and High-Performance Mobile Connectivity for a Connected World",
                description: "Moya’s MNO Solution refers to a core network infrastructure and services provided by a Mobile Network Operator (MNO) to deliver cellular connectivity, voice, data, and messaging services to end-users. It includes the deployment and management of 4G LTE, 5G and integrated with existing 2G/3G networks to support consumer and enterprise communication needs.<br /><br />Our solution is scalable, robust and flexible. This allows flexible expansion based on clients demands. Also supports a broad range of third-party hardware and software solutions.",
                features: [
                    {
                        title: "Integrated with the existing 2G/3G networks",
                        icon: "existing-2g-3g-networks",
                    },
                    {
                        title: "Upgrade existing 2G&3G networks to 4G networks",
                        icon: "upgrading-2g-3g-networks",
                    },
                    {
                        title: "New build 4G networks",
                        icon: "4g-networks",
                    }
                ],
                image: "mno-solution-partner",
                image1: "mno-solution-infrastructure",
                benefits: {
                    title: "Empowering Connectivity, Enabling Seamless 5G Transition.",
                    items: [
                        "End to End Solution",
                        "3GPP-compliant, feature-rich, with 3rd-party integration",
                        "Support million user capacity",
                    ]
                },
                application_scenario: [
                    {
                        title: "Urban",
                        image: "mno-solution-community-scenario"
                    },
                    {
                        title: "Country",
                        image: "mno-solution-country-scenario"
                    },
                    {
                        title: "Community",
                        image: "mno-solution-community-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    },
                    {
                        title: "IP MultiMedia Subsystem",
                        acronym: "IMS",
                        sub_title: "IMS",
                        image: "ip-multimedia-subsytem",
                        category:  "Core Network",
                        sub_category:  "IP MultiMedia Subsystem",
                    }
                ]
            },
            {
                title: "FWA Solution",
                sub_title: "Fast, Reliable, and Seamless Wireless Connectivity",
                description: "Fixed wireless access over LTE for data service instead of FTTX, LAN or ADSL.<br />Fixed Wireless Access (FWA) solutions leverage LTE/5G cellular networks to deliver broadband internet to homes and offices, eliminating the need for traditional cable infrastructure.<br /><br />Service Providers deploy radio equipment in key locations within a community and integrate Moya’s 4G Core Network to establish internet connectivity. Each subscriber is equipped with a Customer Premises Equipment device, enabling them to access high-speed broadband services. <br />Our solution is highly scalable and designed with a clear migration path to 5G/LTE, making it ideal for service providers of all sizes.",
                features: [
                    {
                        title: "Fast and Easy Operation & Management",
                        icon: "fast-and-easy-operation-and-management",
                    },
                    {
                        title: "End to End Solution & Stable Connection",
                        icon: "end-to-end-solution-and-stable-connection",
                    },
                    {
                        title: "Multi-Vendor’s eNodesBS Supported",
                        icon: "multi-vendors-enodesbs-supported",
                    }
                ],
                image: "fwa-solution-partner",
                image1: "fwa-solution-infrastructure",
                benefits: {
                    title: "Seamless, Secure, and High-Performance LTE/5G Connectivity for Your Business.",
                    items: [
                        "End to End Solution",
                        "Stable Connection Easy Operation & Management",
                        "Multi-vendor's eNodeBs supported",
                    ]
                },
                application_scenario: [
                    {
                        title: "Home Internet Services",
                        image: "home-internet-scenario"
                    },
                    {
                        title: "Remote Country",
                        image: "remote-country-scenario"
                    },
                    {
                        title: "Island",
                        image: "island-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    }
                ]
            },
            {
                title: "Enterprise / Private Network Solution",
                sub_title: "Secure, Exclusive, and Tailored Connectivity for Your Enterprise",
                description: "Provide Data, VoLTE, SMS services to enterprise customer with a private network.<br />A private network is a dedicated communication network designed exclusively for an enterprise, connecting its people and devices while delivering essential business services.<br /><br />Unlike public networks, a private network is fully controlled and operated by the enterprise, allowing only authorized users and devices to access it. All data generated within the network is processed locally, ensuring enhanced security, data privacy, and operational reliability.",
                features: [
                    {
                        title: "Higher level of control over services",
                        icon: "higher-level-of-control-over-services",
                    },
                    {
                        title: "Deploy LTE/5G network with lower costs",
                        icon: "deploy-lte-5g-network-with-lower-costs",
                    },
                    {
                        title: "High security and better coverage",
                        icon: "high-security-and-better-coverage",
                    }
                ],
                image: "mno-solution-partner",
                image1: "enterprise-private-network-solution-infrastructure",
                benefits: {
                    title: "Seamless Connectivity, Scalable Power, and Future-Ready Integration.",
                    items: [
                        "Cloud Flexibility",
                        "Complies with 3GPP standards and supports 3rd party device integration",
                        "Offers tailored development services",
                    ]
                },
                application_scenario: [
                    {
                        title: "Airport",
                        image: "airport-scenario"
                    },
                    {
                        title: "Factory",
                        image: "factory-scenario"
                    },
                    {
                        title: "Mine",
                        image: "mine-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    },
                    {
                        title: "5G Enterprise Core",
                        acronym: "5GEC",
                        sub_title: "EC",
                        image: "5g-enterprise-core",
                        category: "Core Network",
                        sub_category: "5G Enterprise Core",
                    },
                    {
                        title: "IP MultiMedia Subsystem",
                        acronym: "IMS",
                        sub_title: "IMS",
                        image: "ip-multimedia-subsytem",
                        category:  "Core Network",
                        sub_category:  "IP MultiMedia Subsystem",
                    }
                ]
            },
        ]
    },
    {
        title: "4G/5G RAN",
        sub_title: "Smarter Networks, Stronger Connections.",
        description: "Empowering LTE/5G with Flexibility and Efficiency.",
        solutions: [
            {
                title: "Dense Area Solution",
                sub_title: "Optimized Connectivity for High-Density Networks",
                description: "Deploying high-performance macro sites to support dense, high-traffic online areas while ensuring seamless connectivity and adaptability across a wide range of deployment scenarios",
                features: [
                    {
                        title: "Massive MIMO (Multiple Input Multiple Output)",
                        icon: "massive-mimo",
                    },
                    {
                        title: "Small Cells & Network Densification",
                        icon: "small-cells-network-densification",
                    },
                    {
                        title: "Intelligent Traffic Steering & Load Balancing",
                        icon: "intelligent-traffic-steering-load-balancing",
                    }
                ],
                image: "dense-area-solution-partner",
                image1: "dense-area-solution-infrastructure",
                benefits: {
                    title: "Unifying Networks, Powering Innovation",
                    items: [
                        "High-Capacity Coverage",
                        "Adaptable to various scenarios",
                        "Enhanced Performance",
                    ]
                },
                application_scenario: [
                    {
                        title: "Urban",
                        image: "dense-area-solution-urban-scenario"
                    },
                    {
                        title: "Dense Crowds",
                        image: "dense-area-solution-dense-crowds-scenario"
                    },
                    {
                        title: "Stadium",
                        image: "dense-area-solution-stadium-scenario"
                    },
                    {
                        title: "Community",
                        image: "dense-area-solution-community-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    },
                    {
                        title: "IP MultiMedia Subsystem",
                        acronym: "IMS",
                        sub_title: "IMS",
                        image: "ip-multimedia-subsytem",
                        category:  "Core Network",
                        sub_category:  "IP MultiMedia Subsystem",
                    },
                    {
                        title: "4G LTE MACRO BBU",
                        acronym: "BBU",
                        sub_title: "Distributed Site - Macro BBU",
                        image: "4g-lte-macro-bbu",
                        category:  "4G/5G RAN",
                        sub_category:  "Baseband Unit",
                    },
                    {
                        title: "4G LTE 4T4R RRU",
                        acronym: "RRU",
                        sub_title: "Distributed Site - Outdoor RRU",
                        image: "4g-lte-4t4r-rru",
                        category:  "4G/5G RAN",
                        sub_category:  "Remote Radio Unit",
                    },
                    {
                        title: "Panel Antenna",
                        acronym: "Panel Antenna",
                        sub_title: "Easy Installation",
                        image: "panel-antenna",
                        category:  "Antenna",
                        sub_category:  "Panel Antenna",
                    }
                ]
            },
            {
                title: "Rural Area Solution",
                sub_title: "Effortless Connectivity, Tailored for Every Rural Need",
                description: "Rural Optimization: Deploy integrated or distributed eNB micro sites for wide-area coverage. Effortless Deployment: Simplified installation for quick and cost-effective rollout. Flexible Power Options: Supports multiple output power levels (20W/40W/60W) to meet diverse scenarios.",
                features: [
                    {
                        title: "Low-Cost and High-Coverage Base Stations",
                        icon: "low-cost-high-coverage-base-stations",
                    },
                    {
                        title: "Satellite & Backhaul Solutions",
                        icon: "satellite-backhaul-solutions",
                    },
                    {
                        title: "Energy-Efficient and Off-Grid Power Solutions",
                        icon: "energy-efficient-off-grid-power-solutions",
                    }
                ],
                image: "rural-area-solution-partner",
                image1: "rural-area-solution-infrastructure",
                benefits: {
                    title: "Seamless Connectivity for Every Rural Need",
                    items: [
                        "Broad Coverage",
                        "Flexible micro site options with adjustable power levels",
                        "Cost-Effective & Easy Setup",
                    ]
                },
                application_scenario: [
                    {
                        title: "Country",
                        image: "rural-area-solution-country-scenario"
                    },
                    {
                        title: "Prospect",
                        image: "rural-area-solution-prospect-scenario"
                    },
                    {
                        title: "Coastline",
                        image: "rural-area-solution-coastline-scenario"
                    },
                    {
                        title: "Mine",
                        image: "rural-area-solution-mine-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    },
                    {
                        title: "IP MultiMedia Subsystem",
                        acronym: "IMS",
                        sub_title: "IMS",
                        image: "ip-multimedia-subsytem",
                        category:  "Core Network",
                        sub_category:  "IP MultiMedia Subsystem",
                    },
                    {
                        title: "4G LTE MICRO BBU",
                        acronym: "BBU",
                        sub_title: "Distributed Site - Micro BBU",
                        image: "4g-lte-micro-bbu",
                        category:  "4G/5G RAN",
                        sub_category:  "Baseband Unit",
                    },
                    {
                        title: "4G LTE 4T4R RRU",
                        acronym: "RRU",
                        sub_title: "Distributed Site - Outdoor RRU",
                        image: "4g-lte-4t4r-rru",
                        category:  "4G/5G RAN",
                        sub_category:  "Remote Radio Unit",
                    },
                    {
                        title: "4G LTE Macro eNB 2x40w",
                        acronym: "eNB",
                        sub_title: "Integrated eNB (outdoor)",
                        image: "4g-lte-macro-enb-2x40w",
                        category:  "4G/5G RAN",
                        sub_category:  "Integrated eNB",
                    },
                    {
                        title: "Omni Fiberglass Antenna",
                        acronym: "Omni Fiberglass Antenna",
                        sub_title: "Easy Installation",
                        image: "omni-fiberglass-antenna",
                        category:  "Antenna",
                        sub_category:  "Omni Fiberglass Antenna",
                    },
                    {
                        title: "Panel Antenna",
                        acronym: "Panel Antenna",
                        sub_title: "Easy Installation",
                        image: "panel-antenna",
                        category:  "Antenna",
                        sub_category:  "Panel Antenna",
                    }
                ]
            },
            {
                title: "Rural Area Solution",
                sub_title: "Effortless Connectivity, Tailored for Every Rural Need",
                description: "Rural Optimization: Deploy integrated or distributed eNB micro sites for wide-area coverage. Effortless Deployment: Simplified installation for quick and cost-effective rollout. Flexible Power Options: Supports multiple output power levels (20W/40W/60W) to meet diverse scenarios.",
                features: [
                    {
                        title: "Low-Cost and High-Coverage Base Stations",
                        icon: "low-cost-high-coverage-base-stations",
                    },
                    {
                        title: "Satellite & Backhaul Solutions",
                        icon: "satellite-backhaul-solutions",
                    },
                    {
                        title: "Energy-Efficient and Off-Grid Power Solutions",
                        icon: "energy-efficient-off-grid-power-solutions",
                    }
                ],
                image: "rural-area-solution-partner",
                image1: "rural-area-solution-infrastructure",
                benefits: {
                    title: "Seamless Connectivity for Every Rural Need",
                    items: [
                        "Broad Coverage",
                        "Flexible micro site options with adjustable power levels",
                        "Cost-Effective & Easy Setup",
                    ]
                },
                application_scenario: [
                    {
                        title: "Country",
                        image: "rural-area-solution-country-scenario"
                    },
                    {
                        title: "Prospect",
                        image: "rural-area-solution-prospect-scenario"
                    },
                    {
                        title: "Coastline",
                        image: "rural-area-solution-coastline-scenario"
                    },
                    {
                        title: "Mine",
                        image: "rural-area-solution-mine-scenario"
                    },
                ],
                products: [
                    {
                        title: "Evolved Packet Core",
                        acronym: "EPC",
                        sub_title: "EPC",
                        image: "evolved-packet-core",
                        category: "Core Network",
                        sub_category: "Evolved Packet Core",
                    },
                    {
                        title: "IP MultiMedia Subsystem",
                        acronym: "IMS",
                        sub_title: "IMS",
                        image: "ip-multimedia-subsytem",
                        category:  "Core Network",
                        sub_category:  "IP MultiMedia Subsystem",
                    },
                    {
                        title: "4G LTE MICRO BBU",
                        acronym: "BBU",
                        sub_title: "Distributed Site - Micro BBU",
                        image: "4g-lte-micro-bbu",
                        category:  "4G/5G RAN",
                        sub_category:  "Baseband Unit",
                    },
                    {
                        title: "4G LTE 4T4R RRU",
                        acronym: "RRU",
                        sub_title: "Distributed Site - Outdoor RRU",
                        image: "4g-lte-4t4r-rru",
                        category:  "4G/5G RAN",
                        sub_category:  "Remote Radio Unit",
                    },
                    {
                        title: "4G LTE Macro eNB 2x40w",
                        acronym: "eNB",
                        sub_title: "Integrated eNB (outdoor)",
                        image: "4g-lte-macro-enb-2x40w",
                        category:  "4G/5G RAN",
                        sub_category:  "Integrated eNB",
                    },
                    {
                        title: "Omni Fiberglass Antenna",
                        acronym: "Omni Fiberglass Antenna",
                        sub_title: "Easy Installation",
                        image: "omni-fiberglass-antenna",
                        category:  "Antenna",
                        sub_category:  "Omni Fiberglass Antenna",
                    },
                    {
                        title: "Panel Antenna",
                        acronym: "Panel Antenna",
                        sub_title: "Easy Installation",
                        image: "panel-antenna",
                        category:  "Antenna",
                        sub_category:  "Panel Antenna",
                    }
                ]
            },
        ]
    },
]

export default categories;