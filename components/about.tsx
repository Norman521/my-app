// components/Team.tsx
import React from "react";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const styles: { [key: string]: string } = {
  section: "section",
  container: "container",
  headerWrap: "headerWrap",
  headerInner: "headerInner",
  heading: "heading",
  intro: "intro",
  grid: "grid",
  gridCol: "gridCol",
  card: "card",
  avatar: "avatar",
  cardBody: "cardBody",
  name: "name",
  role: "role",
  bio: "bio",
  social: "social",
  socialLink: "socialLink",
};

type SocialLink = { icon: IconDefinition; href: string };
type TeamMember = {
  picture: string;
  fullName: string;
  designation: string;
  bio: string;
  socialLinks: SocialLink[];
};

const teamMembers: TeamMember[] = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
    bio: "Akshay is the visionary behind our company, leading us to new heights.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
    fullName: "Raima Ray",
    designation: "Business Head",
    bio: "Raima is the driving force behind our business strategies.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
    fullName: "Arjun Kapur",
    designation: "UI Design",
    bio: "Arjun is responsible for creating intuitive and visually appealing user interfaces.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
    bio: "Alia is a creative marketer with a passion for storytelling.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
];

type TeamProps = {
  title?: string;
  intro?: string;
  members?: TeamMember[]; // optional override
};

function TeamMemberItem({ member }: { member: TeamMember }) {
  return (
    <div className={styles.card}>
      <img
        src={member.picture}
        alt={member.fullName}
        width={230}
        height={230}
        className={styles.avatar}
      />
      <div className={styles.cardBody}>
        <h4 className={styles.name}>{member.fullName}</h4>
        <h6 className={styles.role}>{member.designation}</h6>
        <p className={styles.bio}>{member.bio}</p>
        <div className={styles.social}>
          {member.socialLinks.map((link, i) => (
            <a key={i} href={link.href} className={styles.socialLink}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team({
  title = "Our Experts Team",
  intro = "Meet our professional team members who are here to help your business.",
  members = teamMembers,
}: TeamProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <div className={styles.headerInner}>
            <h2 className={styles.heading}>{title}</h2>
            <p className={styles.intro}>{intro}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {members.map((m, i) => (
            <div key={i} className={styles.gridCol}>
              <TeamMemberItem member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
