import React from "react";
import { useParams } from "react-router-dom";
import members from "../data/members.json";
import MemberProfile from "../components/MemberProfile/MemberProfile";
import jsIcon from '../assets/unaImagen.png';
import reactIcon from '../assets/unaImagen.png';

const icons = {
  js: jsIcon,
  react: reactIcon,
};

const MemberPage = () => {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) return <p>Integrante no encontrado</p>;

  // Agregar path completo a cada ícono
  const technologies = member.technologies.map((tech) => ({
    ...tech,
    icon: icons[tech.iconName] || null
  }));

  return <MemberProfile {...member} technologies={technologies} />;
};

export default MemberPage;
