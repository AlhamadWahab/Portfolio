import { RiCss3Line, RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { FaMicrosoft /*FaNodeJs*/ } from "react-icons/fa";
import {
  SiMicrosoftsqlserver,
  SiPostman,
  SiSwagger,
  SiNpm,
  //   SiMongodb,
} from "react-icons/si";
import { AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTailwindcss,
  SiBootstrap,
  SiJsonwebtokens,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2
        className="my-20 text-center text-4xl"
        style={{ fontFamily: "La Belle Aurore" }}
      >
        Technologies <q>Initial experience</q>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <AiFillHtml5 className="text-7xl text-orange-600" title="HTML" />
        </div>
        <div>
          <RiCss3Line className="text-7xl text-blue-400" title="Css3" />
        </div>
        <div>
          <RiJavascriptLine
            className="text-7xl text-yellow-400"
            title="JavaScript"
          />
        </div>
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" title="Reactjs" />
        </div>
        <div>
          <FaMicrosoft
            className="text-7xl text-blue-600"
            title="C# / .NET / ASP.NET"
          />
        </div>
        <div>
          <SiMicrosoftsqlserver
            className="text-7xl text-red-600"
            title="SQL Server"
          />
        </div>
        <div>
          <SiPostman className="text-7xl text-orange-500" title="Postman" />
        </div>
        <div>
          <SiSwagger className="text-7xl text-green-500" title="Swagger" />
        </div>
        <div>
          <SiNpm className="text-7xl text-red-500" title="npm" />
        </div>
        <div>
          <BiLogoPostgresql
            className="text-7xl text-sky-500"
            title="Postgres SQL"
          />
        </div>
        <div>
          <FaDatabase className="text-7xl text-yellow-500" title="LINQ" />
        </div>
        <div>
          <AiOutlineApi className="text-7xl text-blue-500" title="REST API" />
        </div>
        <div>
          <SiTailwindcss
            className="text-7xl text-cyan-500"
            title="Tailwind CSS"
          />
        </div>
        <div>
          <SiBootstrap className="text-7xl text-purple-600" title="Bootstrap" />
        </div>
        <div>
          <SiJsonwebtokens className="text-7xl text-orange-500" title="JWT" />
        </div>
        <div>
          <SiRedux className="text-7xl text-purple-500" title="Redux" />
        </div>
        <div>
          <SiGithub className="text-7xl text-gray-800" title="GitHub" />
        </div>
        <div>
          <SiGit className="text-7xl text-orange-500" title="Git" />
        </div>
        {/* <div>
          <SiJson className="text-7xl text-green-600" title="JSON Server" />
        </div> */}
        <div className="flex space-x-4">
          <span className="text-7xl text-yellow-500">{"{"}</span>
          <span className="text-7xl text-yellow-500">{"}"}</span>{" "}
        </div>

        {/* <div>
          <SiMongodb className="text-7xl text-green-500" title="MongeDB" />
        </div>
        <div>
          <FaNodeJs className="text-7xl text-green-500" title="MongeDB" />
        </div> */}
      </div>
    </div>
  );
};

export default Technologies;
