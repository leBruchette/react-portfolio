const meta = {
    title: "Mike Bruzina",
    description: "Software Engineer focusing on backend and devops. Currently located in Hartsburg, Missouri.",
};

const introdata = {
    title: "Hey, I'm Mike",
    animated: {
        first: "I like solving problems",
        second: "I love building things",
        third: "I develop mobile apps",
    },
    description: "Experienced Software Engineer skilled in DevOps, API and cloud-native development.",
};

const contact = {
    description_1: "The best way to contact me is via ",
    description_2: "  I'm always open to new opportunities, so feel free to reach out!",
    linkedin: "https://www.linkedin.com/in/mpbruzina",
}

const resume = {
    description: "To request a copy of my resume, please provide your email address and I'll send it over.",
}

const dataabout = {
    title: "Background",
    aboutme: "I began my career as a full stack developer, developing in full stack roles using various Java/JVM based ecosystems. Over time, I've transitioned to more of a backend and DevOps focus, driven by a passion for API development and system architecture.  Most recently, my focus has been infrastructure and IaC solutioning, including containerization and CI/CD automation and tooling.  With my combined experience in full stack development and DevOps, I bring a comprehensive perspective to building and maintaining robust, scalable systems.",
    description: "A brief history of my tech journey:",
    history: [
        {event: "Java developer pre Java 5 when Struts was the framework.  We wired Spring beans using XML and we loved it"},
        {event: "Groovy and Grails, because we ended up hating configuring Spring using XML"},
        {event: "Java 8 and Spring Boot microservices.  The first time in my career I had a lightbulb moment while at a tech conference"},
        {event: "Python, Flask and Pyramid caused by FOMO of a local startup"},
        {event: "Terraform, CDK and a little Serverless Framework as we migrated on-prem to AWS"},
        {event: "Golang and bash to broaden the Ops of my DevOps role"}
    ],
};
const worktimeline = [{
    jobtitle: "Lead Software Engineer",
    where: "New Relic",
    where_url: "https://newrelic.com",
    date: "7/23 - 11/24",
},
    {
        jobtitle: "Senior Software Engineer",
        where: "",
        where_url: "",
        date: "9/21 - 7/73",
    },
    {
        jobtitle: "Senior Software Engineer",
        where: "Carfax",
        where_url: "https://carfax.com",
        date: "7/17 - 9/21",
    },
    {
        jobtitle: "Senior Software Engineer",
        where: "EquipmentShare",
        where_url: "https://equipmentshare.com",
        date: "2/17 - 7/17",
    },
    {
        jobtitle: "Product Developer",
        where: "Carfax",
        where_url: "https://carfax.com",
        date: "3/11 - 2/17",
    },
    {
        jobtitle: "Senior Software Engineer",
        where: "Enterprise Holdings",
        where_url: "https://enterprise.com",
        date: "12/04 - 2/11",
    },
];

const skills_1 = [{
    name: "Java",
    value: 80,
},
    {
        name: "Go",
        value: 70,
    },
    {
        name: "Terraform",
        value: 70,
    },
    {
        name: "CDK",
        value: 70,
    },
    {
        name: "AWS",
        value: 70,
    },
];
const skills_2 = [
    {
        name: "Typescript",
        value: 60,
    },
    {
        name: "Python",
        value: 50,
    },
    {
        name: "NodeJS",
        value: 50,
    },
    {
        name: "Javascript",
        value: 45,
    },
    {
        name: "React",
        value: 40,
    },
];

const socialprofils = {
    github: "https://github.com/lebruchette",
    linkedin: "https://www.linkedin.com/in/mpbruzina",
};
export {
    meta,
    contact,
    resume,
    dataabout,
    worktimeline,
    skills_1,
    skills_2,
    introdata,
    socialprofils,
};