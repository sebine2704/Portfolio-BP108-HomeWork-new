
document.querySelector('#searchBtn')
searchBtn.addEventListener('click', function() {
    let username = document.querySelector('#username').value.trim();
    if (username == '') {
      alert('Please enter a GitHub username');
      return;
    }
    fetch('https://api.github.com/users/' + username)
      .then(res => {
        return res.json();
      })
      .then(data => {
        displayUser(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Welcome');
      });
  });
  
const cards=document.querySelector(".cards")
function displayUser(user) {
let resultsDiv = document.getElementById('results');
card=document.createElement("div")
card.classList.add("card")
card.style.background="white"
card.style.height="500px"
card.style.width="67%"
card.style.borderRadius="15px"


const box=document.createElement("div")
box.classList.add("box")
box.style.display="flex"
const image=document.createElement("img")
image.classList.add("image")
image.src = user.avatar_url;
image.alt = 'Avatar';
image.style.height="150px"
image.style.width="150px"

     
const textBox=document.createElement("div")
textBox.classList.add("textBox")

const DateN=document.createElement("div")
DateN.style.display="flex"
DateN.style.justifyContent="space-around"
DateN.style.alignItems="center"
DateN.style.marginTop="50px"
DateN.style.width="610px"

const NameTitle=document.createElement("h1")
NameTitle.innerText=user.login

const Datetext=document.createElement("p")
Datetext.innerText=user.created_at

const mail=document.createElement("h3")
mail.style.marginLeft="80px"
mail.innerText=user.name

const Bio=document.createElement("p")
Bio.innerText=user.bio
Bio.style.marginLeft="80px"
Bio.style.marginTop="30px"
Bio.style.fontSize="20px"

const FollowBox=document.createElement("div")
FollowBox.style.width="500px"
FollowBox.style.background="white"
FollowBox.style.height="100px"
FollowBox.style.marginLeft="80px"
FollowBox.style.borderRadius="11px"
FollowBox.style.marginTop="40px"

const FollowTitle=document.createElement("div")
FollowTitle.style.display="flex"
FollowTitle.style.justifyContent="space-around"

const Repos=document.createElement("h5")
Repos.innerText="Repos"
Repos.style.color="black"
const Followers=document.createElement("h5")
Followers.innerText="Followers"
Followers.style.color="black"
const Following=document.createElement("h5")
Following.innerText="Following"
Following.style.color="black"

const FollowBody=document.createElement("div")
FollowBody.style.display="flex"
FollowBody.style.justifyContent="space-around"
const ReposText=document.createElement("h4")
ReposText.innerText=user.public_repos
ReposText.style.color="black"
const FollowersText=document.createElement("h4")
FollowersText.innerText=user.followers
FollowersText.style.color="black"
const FollowingText=document.createElement("h4")
FollowingText.innerText=user.following
FollowingText.style.color="black"

const Info=document.createElement("div")
Info.style.display="flex"
Info.style.gap="50px"
Info.style.marginTop="30px"

const Info1=document.createElement("div")
const Map=document.createElement("p")
Map.innerText=user.location
Map.style.fontSize="18px"

const Blog=document.createElement("p")
Blog.innerText=user.blog
Blog.style.fontSize="18px"

const Info2=document.createElement("div")
const Twit=document.createElement("p")
Twit.innerText=user.twitter_username
Twit.style.fontSize="22px"

const GitHub=document.createElement("a")
GitHub.innerText=user.html_url
GitHub.style.fontSize="18px"

Info.append(Info1,Info2)
Info2.append(Twit,GitHub)
Info1.append(Map,Blog)
FollowBox.append(FollowTitle,FollowBody)
FollowBody.append(ReposText,FollowersText,FollowingText)
FollowTitle.append(Repos,Followers,Following)
DateN.append(NameTitle,Datetext)
box.append(image,textBox)
textBox.append(DateN,mail,Bio,FollowBox,Info)
card.append(box)
cards.append(card)
card.appendChild(avatarImg);
card.appendChild(usernameHeading);
card.appendChild(followersPara);
card.appendChild(followingPara);
card.appendChild(reposPara);
card.appendChild(profileLink);
resultsDiv.innerHTML = ''; 
resultsDiv.appendChild(card);
}


