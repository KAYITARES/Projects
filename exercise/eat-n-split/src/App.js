import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend() {
    setOpen((open) => !open);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setOpen(!open);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
    setOpen(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {open && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowFriend}>
          {open ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, selectedFriend, openForm, onSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          openForm={openForm}
          onSelectedFriend={onSelectedFriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          {" "}
          you owe {friend.name} {friend.balance} $
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance} $
        </p>
      ) : (
        <p>you and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");
  function handleAddNewFriend(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!friendName || !friendImage) return;
    const addFriend = {
      id: id,
      name: friendName,
      image: `${friendImage}?ud=${id}`,
      balance: 0,
    };
    onAddFriend(addFriend);
    setFriendImage("https://i.pravatar.cc/48");
    setFriendName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleAddNewFriend}>
      <label>👯 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>💥 Image URL</label>
      <input
        type="text"
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [pay, setPay] = useState("user");
  const paid = bill ? bill - expense : "";
  function handleSubmit(e) {
    e.preventDefault();
    // if (!bill || expense) return;
    onSplitBill(pay === "user" ? paid : -expense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>💃 Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />
      <label>👯 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paid} />
      <label>Who is paying the bill?</label>
      <select value={pay} onChange={(e) => setPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
