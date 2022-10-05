import softwareImg from '../assets/img/software.jpeg';
import automationImg from '../assets/img/automation.jpeg';
import servicesImg from '../assets/img/services.jpeg';
import projectImg from '../assets/img/project.jpeg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'Software Development',
        image: softwareImg,
        elevation: 1233,
        featured: false,
        description:
            'Involves learning various Activities dedicated to the process of creating, designing, deploying and supporting software.'
    },
    {
        id: 1,
        name: 'Automation',
        image: automationImg,
        elevation: 877,
        featured: false,
        description:
            'Involves learning the technique of making an apparatus, a process, or a system operate automatically.'
    },
    {
        id: 2,
        name: 'Customer Services ',
        image: servicesImg,
        elevation: 2901,
        featured: false,
        description:
            'This is the Support you offer your customers both before and after a purchase of goods and/or services. '
    },
    {
        id: 3,
        name: 'Project Management ',
        image: projectImg,
        elevation: 42,
        featured: true,
        description:
            "The process of leading the work involved by a team to ascertain all project goals within a given constraint."
    }
];
