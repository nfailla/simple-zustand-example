export const What = ({ value, onChange }) => (
  <label className="row">
    What?
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export const Who = ({ value, onChange }) => (
  <label className="row">
    Who?
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export const When = ({ value, onChange }) => (
  <label className="row">
    When?
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export const FollowUp = ({ value, onChange }) => (
  <label className="row">
    Follow up?
    <input type="checkbox" checked={value} onChange={onChange} />
  </label>
);

export const Actions = ({ onClear, onAdd }) => (
  <div className="row">
    <button onClick={onClear}>Clear</button>
    <button onClick={onAdd}>Add</button>
  </div>
);

export const Plans = ({ value }) =>
  value.map(({ what, who, when, followUp }) => (
    <div className="row" key={`${what}-${who}-${when}`}>
      <span>{followUp && "⭐"}</span>
      <p>
        <span>({when})</span> <span className="bold">{what}</span>
        {" by "}
        <span className="bold">{who}</span>
      </p>
    </div>
  ));
