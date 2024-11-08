import { FaAngular, FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiDotnet, SiJsonwebtokens, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiNeovim, SiNestjs, SiPostgresql, SiPug, SiRedux, SiTailwindcss, SiWindowsterminal } from "react-icons/si";
import InfiniteSlider from "../../shared/components/infinite-slider.component";
import { VscVscode } from "react-icons/vsc";

export default function Technologies() {
  return (
    <div id = "technologies" className = "landing-section">
      <h3 className = "text-xl pb-4 text-white font-semibold">Tecnolog&iacute;as que he usado</h3>
      <InfiniteSlider direction = "left" speed = { 40 }>
        {/* { elements } */}
        <SiPug size={ "8rem" } color = "#fff"/>
        <FaReact size={ "8rem" } color = "#fff"/>
        <SiNestjs size={ "8rem" } color = "#fff"/>
        <FaCss3 size={ "8rem" } color = "#fff"/>
        <FaNodeJs size={ "8rem" } color = "#fff"/>
        <SiDotnet size={ "8rem" } color = "#fff"/>
        <SiTailwindcss size={ "8rem" } color = "#fff"/>
        <FaAngular size={ "8rem" } color = "#fff"/>
        <SiJsonwebtokens size={ "8rem" } color = "#fff"/>
        <SiPostgresql size={ "8rem" } color = "#fff"/>
        <SiMicrosoftsqlserver size={ "8rem" } color = "#fff"/>
        <SiMysql size={ "8rem" } color = "#fff"/>
        <SiMongodb size={ "8rem" } color = "#fff"/>
        <SiRedux size={ "8rem" } color = "#fff"/>
        <FaGithub size={ "8rem" } color = "#fff"/>
        <FaGitAlt size={ "8rem" } color = "#fff"/>
        <SiWindowsterminal size={ "8rem" } color = "#fff"/>
        <FaBootstrap size={ "8rem" } color = "#fff"/>
        <VscVscode size={ "8rem" } color = "#fff"/>
        <SiNeovim size={ "8rem" } color = "#fff"/>
      </InfiniteSlider>
    </div>
  );
}
