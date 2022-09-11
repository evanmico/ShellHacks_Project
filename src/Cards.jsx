import {useState} from 'react';
import gear from './images/gear.png';

const Cards = () => {

  const [selectedAccount, setAccount] = useState("Account2");
  
  const [cards, setCards] = useState([{
    id: 1,
    fullName: "Discord Nitro",
    designation: "9.99",
    total: "36",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Netflix Premium",
    designation: "19.99",
    total: "12",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "HBO Max Ad-Free",
    designation: "14.99",
    total: "10",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Disney+",
    designation: "7.99",
    total: "15",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "Hulu",
    designation: "6.99",
    total: "27",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Apple Cloud",
    designation: "2.99",
    total: "18",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "Apple Music",
    designation: "9.99",
    total: "23",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Amazon Music Unlimited",
    designation: "9.99",
    total: "7",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Youtube Premium",
    designation: "11.99",
    total: "19",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Google Drive",
    designation: "1.99",
    total: "12",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "OneDrive",
    designation: "1.99",
    total: "16",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Sling TV Orange",
    designation: "35",
    total: "24",
    gender: "male",
    teamName: "TeamD"
  }]);

  let totalCount = 0;
  function handleAccountSelectionChange(event){
    console.log(event.target.value);
    setAccount(event.target.value);
  }

  function handleServiceCardClick(event){
    const transformedServices = cards.map((card) => card.id === parseInt(event.currentTarget.id)
                                         ?(card.teamName === selectedAccount)?
      {...card, teamName:''}:{...card, teamName: selectedTeam}:card);
    setCards(transformedCards);
  }

  function totalAmountTrack(amount){
    totalCount+=amount
  }
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        {/*<div class="col-6">
          <select className="form-select form-select-lg" value={selectedAccount} onChange={handleAccountSelectionChange}>
            <option value="Account1">Account1</option>
            <option value="Account2">Account2</option>
            <option value="Account3">Account3</option>
            <option value="Account4">Account4</option>
          </select>
        </div>*/}
        <div className="col-8">
          <div class="card-collection">
          {
            cards.map((card) => (
              <div id={card.id} className={(card.teamName === selectedAccount?'card m-2 standout':'card m-2')} style={{cursor:"pointer"}}>
                <img src={gear} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title text-center">Service: {card.fullName}</h5>
                  <p className="card-text text-center"><b>$ Per Month:</b> ${card.designation}</p>
                  <p className="card-text text-center"><b>$ Lifetime:</b> ${Math.round(card.designation*card.total)}</p>
                  {totalAmountTrack(Math.round(card.designation*card.total))}
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="text-center border rounded">
          <p className="text-large">Total Amount Spent All Time: <b>${totalCount}</b></p>
        </div>
      </div>
    </main>
  )
}

export default Cards;