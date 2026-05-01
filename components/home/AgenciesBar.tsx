const agencies = [
  "RE/MAX",
  "Century 21",
  "Royal LePage",
  "CIR Realty",
  "eXp Realty",
];

export function AgenciesBar() {
  return (
    <section className="agencies-bar" aria-label="Real estate agencies we work with">
      <div className="container agencies-bar-inner">
        <ul className="agencies-list">
          {agencies.map((name) => (
            <li key={name} className="agency-name">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
