import './App.css';
import Profile from './profile/Profile.js';


function App() {

  const handleName =(x) =>{alert(x);}
  const profiles = [ 
    {
  img:"https://image.emojipng.com/144/10446144.jpg",
  fullName:"Majdi Mokhtar",
  bio:"I am learning fullstack-web",
  profession:"Aeronauticalengineer"
},
{
  img:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
  fullName:"Mr X",
  bio:"I am learning fullstack-web",
  profession:"Mecanical"
},
{
  img:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
  fullName:"Mr Y",
  bio:"I am learning fullstack-web",
  profession:"electrical"
}
];
  return (
    <div className="App">
    <header className="App-header">

      {profiles.map((el)=> (<Profile profile= {el} handleName ={handleName } />))}
      







      </header>
    </div>
  );
}

export default App;
