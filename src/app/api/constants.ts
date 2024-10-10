import { ConferenceType } from "../types/conferenceType.ts";

const conference1: ConferenceType = {
  id: 1,
  title: "Innovations in Technology 2024",
  date: "November 15, 2024",
  time: "10:00 AM - 4:00 PM",
  location: {
    venue: "TechHub Convention Center",
    hall: "Main Hall",
    address: "123 Innovation Avenue, Cityville",
  },
  description:
    "Join us for the 'Innovations in Technology 2024' conference, where leading experts and visionaries in the tech industry will discuss the latest trends, breakthroughs, and future developments in technology. This event will cover a range of topics, including artificial intelligence, machine learning, blockchain, cybersecurity, and more.",
  speakers: [
    {
      name: "Dr. Emma Johnson",
      role: "AI Researcher",
      company: "Tech Innovators Inc.",
    },
    { name: "Michael Smith", role: "CTO", company: "SecureNet" },
    {
      name: "Sophia Lee",
      role: "Head of Blockchain Development",
      company: "FutureTech Solutions",
    },
    { name: "James Anderson", role: "CEO", company: "CyberGuard Corp." },
  ],
  agendas: [
    {
      time: "10:00 AM - 11:00 AM",
      event: "Keynote Speech by Dr. Emma Johnson",
    },
    {
      time: "11:00 AM - 12:30 PM",
      event: "Panel Discussion: 'The Future of AI and Automation'",
    },
    { time: "12:30 PM - 1:30 PM", event: "Networking Lunch" },
    {
      time: "1:30 PM - 3:00 PM",
      event: "Workshop: 'Blockchain for Business' led by Sophia Lee",
    },
    {
      time: "3:00 PM - 4:00 PM",
      event: "Closing Remarks and Q&A",
    },
  ],
  registration: {
    info: "Please register in advance to secure your spot. Limited seats are available.",
    action: "Click the 'Register' button below.",
  },
};

export const conferences = [conference1];
