import React from "react";
import { useParams } from "react-router-dom";
import members from "../data/members.json";
import MemberProfile from "../components/MemberProfile/MemberProfile";

// Importa todos los iconos
import html5Icon from '../assets/logo-html5.png';
import jsIcon from '../assets/logo-javascript.png';
import reactIcon from '../assets/logo-react.png';
import nodeIcon from '../assets/logo-node.png';
import gitIcon from '../assets/logo-git.webp';
import pythonIcon from '../assets/logo-python.webp';
import mysqlIcon from '../assets/logo-mysql.png';
import javaIcon from '../assets/logo-java.webp';
import springIcon from '../assets/logo-spring.png';
import sqlIcon from '../assets/logo-sql.png';
import csharpIcon from '../assets/logo-csharp.webp';
import dotnetIcon from '../assets/logo-dotnet.png';

// Objeto que mapea nombres de iconos a las importaciones
const icons = {
  html5: html5Icon,
  js: jsIcon,
  react: reactIcon,
  node: nodeIcon,
  git: gitIcon,
  python: pythonIcon,
  mysql: mysqlIcon,
  java: javaIcon,
  spring: springIcon,
  sql: sqlIcon,
  csharp: csharpIcon,
  dotnet: dotnetIcon
};

const MemberPage = () => {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) return <p>Integrante no encontrado</p>;

  const technologiesWithIcons = member.technologies.map(tech => ({
    ...tech,
    icon: icons[tech.iconName]
  }));

  return <MemberProfile {...member} technologies={technologiesWithIcons} />;
};

export default MemberPage;