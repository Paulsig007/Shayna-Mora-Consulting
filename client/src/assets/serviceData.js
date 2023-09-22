import serviceIcons from './images/serviceIcons/index.js'

// import hiringIcon from '../assets/images/serviceIcons/hiring.png'
// import complianceIcon from '../assets/images/serviceIcons/compliance.png'
// import innovationIcon from '../assets/images/serviceIcons/innovation.png'
// import developmentIcon from '../assets/images/serviceIcons/development.png'
// import strategyIcon from '../assets/images/serviceIcons/strategy.png'
// import managementIcon from '../assets/images/serviceIcons/management.png'

const serviceData =
[
    {
        "cardIcon": serviceIcons.hiringIcon,   
        "cardTitle": "Talent, People Operations & Culture",
        "cardText": "Click here for more",
        "serviceTitle": "Create the right team and culture",
        "serviceText": "We help you find the right people, and build the right culture.",
        "serviceLink": "/talent-culture",
        "serviceLinkTab": "Talent & Culture",
        "servicePage": "<TalentCulture />"
    },
    {
        "cardIcon": serviceIcons.developmentIcon,
        "cardTitle": "People Management & Development",
        "cardText": "Click here for more",
        "serviceTitle": "Manage and develop your people",
        "serviceText": "We help you develop your people, and build a diverse, equitable, and inclusive organization.",
        "serviceLink": "/mgmt-development",
        "serviceLinkTab": "Management & Development",
        "servicePage":"<MgmtDevelopment/>"
    },
    {
        "cardIcon": serviceIcons.complianceIcon,
        "cardTitle": "Financial & Compliance Management",
        "cardText": "Click here for more",
        "serviceTitle": "Take control of your finances",
        "serviceText": "We help you manage your finances, and ensure compliance with all applicable laws and regulations.",
        "serviceLink": "/financial-compliance",
        "serviceLinkTab": "Financial Compliance",
        "servicePage":"<FinancialCompliance />"
    },
    {
        "cardIcon": serviceIcons.innovationIcon,
        "cardTitle": "Special Projects & Innovation",
        "cardText": "Click here for more",
        "serviceTitle": "Develop new initiatives",
        "serviceText": "We help you launch new initiatives, and manage special projects.",
        "serviceLink": "/projects-innovation",
        "serviceLinkTab": "Projects & Innovation",
        "servicePage":"<ProjectInnovation />"
    },
    {
        "cardIcon": serviceIcons.strategyIcon,
        "cardTitle": "Strategic Planning and Enterprise Support",
        "cardText": "Click here for more",
        "serviceTitle": "Prepare for the future",
        "serviceText": "We help you develop your strategy, and provide enterprise level support.",
        "serviceLink": "/strategy-support",
        "serviceLinkTab": "Strategy & Enterprise Support",
        "servicePage":"<StrategySupport />"
        
    },
    {
        "cardIcon": serviceIcons.managementIcon,
        "cardTitle": "Board Management & Governance",
        "cardText": "Click here for more",
        "serviceTitle": "Do more with your board",
        "serviceText": "We help you manage your board.",
        "serviceLink": "/board-governance",
        "serviceLinkTab": "Board Management & Governance",
        "servicePage":"<BoardGovernance />"
    },
]

export default serviceData;