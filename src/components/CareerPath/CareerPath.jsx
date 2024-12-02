const CareerPath = () => {
  return (
    <>
      <div
        className="my-20 text-center text-5xl"
        style={{ fontFamily: "La Belle Aurore" }}
      >
        CareerPath
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">17.06.2024 - Present</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <ul>
              Leiharbeitnehmer (IT-Support) bei H.Butting GmbH in Knesebeck
              <li>Responsibilities: </li>
              <li>Dateien von PCs sichern.</li>{" "}
              <li>
                Alten gegen neuen PC austauschen und Funktionstests durchführen.
              </li>{" "}
              <li>PC-Hardware austauschen.</li>{" "}
              <li>Drucker und weitere Geräte einrichten.</li>{" "}
              <li>Datensicherung geringen Umfangs durchführen.</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">11.2022 - 04.2023</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <ul>
              Praktikum bei IP SYSCON GmbH in Hannover
              <li>
                Sammeln von praktischen Erfahrungen im Umgang mit Software und
                Technologien, Anwendungsprogramm-Schnittstellen.
              </li>
            </ul>
            <br />
            <span className="mr-2 mt-1 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300">
              C# - EF core - Postgres SQL - Asp.Net core wep api - REST Api -
              Swagger - Maui
            </span>
          </div>
        </div>
        <br/>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">16.08.2021 - 11.2023</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <ul>
              IHK-Zertifizierte Umschulung: Anwendungsentwicklung
              Comcave.College in Hannover
              <li>Abschluss: Fachinformatik Anwendungsentwickler.</li>
              <li>enthält 5 Monaten Praktikum bei IP Syscon GmbH.</li>{" "}
              <li>
                Project: Routing Service, Abschlussprojekt: Ansprechen einer
                REST Services API mit Hilfe eines Routing Services, der
                Dijkstras Algorithmus unterstützt.
              </li>
            </ul>
            <br />
            <span className="mr-2 mt-1 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300">
              Java - OOP - JavaScript - MS SQL - mySql - UML - etc.
            </span>
          </div>
        </div>
        <br />
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">09.2013 - 06.2014</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <ul>
              <li>
                Diplom: Pädagogik an der Pädagogischen Fakultät der Universität
                Damaskus.
              </li>
              <li>Abschluss: Pädagogische Qualifizierung von Lehrkräften</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">09.2006 - 08.2013</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <p>Bachelor : Politikwissenschaft Universität Damaskus.</p>
          </div>
        </div>
        <br />
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <h4 className="mb-2 font-semibold ">1993 - 2005</h4>
          </div>
          <div className="w-full max-w-xl text-gray-400 lg:w-3/4">
            <ul>
              <li>Besuch Alnoor Schule in Damaskus.</li>
              <li>Abschluss: Abitur</li>
            </ul>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default CareerPath;
