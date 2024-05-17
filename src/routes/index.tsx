import { useState } from "react";

const nameCards = [
  {
    name: "John Doe",
    class: "2",
    origin: "Japan",
    account: "@johndoe",
    hobby: "Litter Picking",
    reason: "To find out who I am",
    id: 1,
  },
  {
    name: "Abe Menman",
    class: "1",
    origin: "Japan",
    account: "@johndoe",
    hobby: "Litter Picking",
    reason: "To find out who I am",
    id: 2,
  },
  {
    name: "Murakami Chigyoza",
    class: "3",
    origin: "Japan",
    account: "@johndoe",
    hobby: "Litter Picking",
    reason: "To find out who I am",
    id: 3,
  },
  {
    name: "Alice",
    class: "5",
    origin: "Tokyo",
    account: "@alice",
    hobby: "Reading",
    reason: "Interest in tech",
    id: 4,
  },
  {
    name: "Bob",
    class: "2",
    origin: "Osaka",
    account: "@bob",
    hobby: "Gaming",
    reason: "Learn coding",
    id: 5,
  },
  {
    name: "Charlie",
    class: "5",
    origin: "Kyoto",
    account: "@charlie",
    hobby: "Hiking",
    reason: "Career change",
    id: 6,
  },
  {
    name: "David",
    class: "4",
    origin: "Nagoya",
    account: "@david",
    hobby: "Cooking",
    reason: "Networking",
    id: 7,
  },
  {
    name: "Eva",
    class: "3",
    origin: "Sapporo",
    account: "@eva",
    hobby: "Music",
    reason: "Skill development",
    id: 8,
  },
];

export default function Index() {
  const [sortKey, setSortKey] = useState("id");

  const sortedNameCards = [...nameCards].sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortKey === "class") {
      return Number(a.class) - Number(b.class);
    } else if (sortKey === "id") {
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div className="main">
      <div className="sort-wrap">
        <select
          className="sort"
          onChange={(e) => setSortKey(e.target.value)}
          value={sortKey}
        >
          <option value="name">名前順</option>
          <option value="class">クラス順</option>
          <option value="id">登録順</option>
        </select>
      </div>

      <ul>
        {sortedNameCards.map((card) => (
          <li className="card" key={card.id}>
            <div className="img-wrap"></div>
            <div className="profile">
              <p>名前: {card.name}</p>
              <p>クラス: {card.class}</p>
              <p>出身: {card.origin}</p>
              <p>Xアカウント: {card.account}</p>
              <p>趣味: {card.hobby}</p>
              <p>受講理由: {card.reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
