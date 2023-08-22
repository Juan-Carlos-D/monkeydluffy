var user1 = {
    userName: '@mugiwara',
    displayName: 'Monkey D. Luffy',
    description: 'In search of the One Piece so I can be the King of the Pirates',
    location: 'Wano',
    joinedDate: 'July 2023',
    followingCount: 1072,
    followerCount: 98900000,
    avatarURL: 'Luffy.jpg',
    coverPhotoURL: 'Mugiwaras.jpg',
    tweets: [
        {
            text: 'GEAR 5 IS AWESOME',
            timestamp: '8/06/2023 19:51:39'
        },
        {
            text: 'GRRRRRRRR',
            timestamp: '8/01/2023 04:55:36'
        },
        {
            text: 'Waiting for foooood',
            timestamp: '7/08/2023 10:11:42'
        },
        {
            text: 'Making progress',
            timestamp: '7/07/2023 13:29:40'
        },
        {
            text: 'Who will be the next King of the Pirates?? <br> Like for Luffy, Retweet for Shanks, Comment for Buggy',
            timestamp: '7/06/2023 20:38:32'
        },
        {
            text: 'I\'m starvingggg',
            timestamp: '7/05/2023 18:27:45'
        },
        {
            text: 'YOHOHOHOHOHOHOHOHOHOHOHOH',
            timestamp: '7/05/2023 11:33:56'
        },
        {
            text: 'Usopp ate the last bit of food we had, I sweeaaarr',
            timestamp: '7/04/2023 08:41:06'
        },
        {
            text: 'MEEEEEAAAAAATTTTTTTTTT',
            timestamp: '7/03/2023 23:29:37'
        },
        {
            text: 'I\'m so hunggryyy',
            timestamp: '7/03/2023 23:11:51'
        }
    ]
};


function followersSimplified(num) {
  if (num > 10000000) {
    var numSimple = (num / 1000000).toFixed(1);
    return numSimple + "M";
  }
}
//Main Container
const mainContainer = document.getElementById('mainContainer');
mainContainer.classList.add('mainContainer');

//Header Container
const headerContainer = document.getElementById('headerContainer');
headerContainer.classList.add('headerContainer');
headerContainer.innerHTML = `
    <div class="left-arrow">
        <a href="#"><img src="arrow-left.png"/></a>
    </div>

    <div class='twitterName'>
        <p class='tName'>${user1['displayName']} ☠️</p>
        <p class='numOfTweets'>9.5B Tweets</p>
    </div>
`;

mainContainer.appendChild(headerContainer);

//Photo Container
const photoContainer = document.getElementById('photoContainer');
photoContainer.classList.add('photoContainer');
photoContainer.innerHTML = `
    <div class='coverPhoto'></div>
`;

mainContainer.appendChild(photoContainer);

//Profile Container

const profileContainer = document.getElementById('profileContainer');
profileContainer.classList.add('profileContainer');
profileContainer.innerHTML = `
    <div class='profile'>
        <div class='profilePic'></div>
        <div class='followBtn'>
            <button type="button"><span>Following</span></button>
        </div>
        <div class='profileInfo'>
            <div class='mainName'>
                <h2>☠️ ${user1.displayName} ☠️</h2>
            </div>
            <p class='gray'>${user1['userName']}</p>
            <div class='description'>
                <p>🏴‍☠️ ${user1.description} 🏴‍☠️</p>
            </div>
            <div class='calendar'>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${user1['location']}</p>
                <p>${'📅 ' + 'Joined ' + user1['joinedDate']}</p>
            </div>
        </div>
        <div class='followers'>
            <p class='numbers'>${user1['followingCount']}</p>
            <p class='gray'>Following</p>
            <p class='numbers'>${followersSimplified(user1['followerCount'])}</p>
            <p class='gray'>Followers</p>
        </div>
        <div class='tabs'>
            <div class='background-tab-main'>
                <p>Tweets</p>
            </div>
            <div class='background-tab'>
                <p>Tweets & Replies</p>
            </div>
            <div class='background-tab'>
                <p>Media</p>
            </div>
            <div class='background-tab'>
                <p>Likes</p>
            </div>
        </div>
    </div>
`;

mainContainer.appendChild(profileContainer);

//Tweets Container
var tweetsContainer = document.getElementById('tweetsContainer');
tweetsContainer.classList.add('tweetsContainer');
mainContainer.appendChild(tweetsContainer);

for (var i=0, l = user1.tweets.length; i < l; i++){
    var tweet = user1.tweets[i];
    var tweetValues = Object.values(tweet);
    var tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweetDiv');
    tweetDiv.innerHTML = `
        <div class='pp'></div>
        <div class='noPP'>
            <div class='nameAndTime'>
                <p class='displayName'>${user1.displayName}</p>
                <p class='marginP'>${user1.userName}</p>
                <p class='marginP'>${tweetValues[1]}</p>
            </div>
            <div class='actualTweet'>
                <p>${tweetValues[0]}</p>
            </div>
            <div class='tweetIcons'>
                <div class='icon-background' id='comment-icon'>
                    <i class='fa fa-comment'></i>
                </div>
                <div class='icon-background-2' id='retweet-icon'>
                    <i class='fa fa-retweet'></i>
                </div>
                <div class='icon-background-3' id='heart-icon'>
                    <i class='fa fa-heart'></i>
                </div>
                <div class='icon-background' id='upload-icon'>
                    <i class='fa fa-upload'></i>
                </div>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
}



//Side Menu
var sideContainer = document.getElementById('sideContainer');
sideContainer.classList.add('sideContainer');

sideContainer.innerHTML = `
    <div class="menu-item menu-twitter"><a href="#"><i class="fa fa-twitter"></i></a></div>
    <div class="menu-item menu-home"><a href="#"><i class="fa fa-home"></i></a></div>
    <div class="menu-item menu-search"><a href="#"><i class="fa fa-search"></i></a></div>
    <div class="menu-item menu-notify"><a href="#"><i class="fa fa-bell"></i></a></div>
    <div class="menu-item menu-message"><a href="#"><i class="fa fa-envelope"></i></a></div>
    <div class="menu-item menu-bookmark"><a href="#"><i class="fa fa-bookmark"></i></a></div>
    <div class="menu-item menu-list"><a href="#"><i class="fa fa-list"></i></a></div>
    <div class="menu-item menu-user"><a href="#"><i class="fa fa-user"></i></a></div>
    <div class="menu-item menu-more">
        <a href="#">
            <span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-ellipsis-h fa-stack-1x"></i>
            </span>
        </a>
    </div>
    `;

    var rightContainer = document.getElementById('rightMenuContainer');
    rightContainer.classList.add('rightMenuContainer');

    rightContainer.innerHTML = `
        <div class='searchBar'>
            <input type="search" id="tweetSearch" placeholder="Search Twitter">  
            <span class="searchIcon"><i class="fa fa-search"></i></span>
        </div>

        <div class='gallery'>
            <a href="#"><img src="crew.png" class="images top-left"></a>
            <a href="#"><img src="jollyroger.png" class="images"></a>
            <a href="#"><img src="shanks.png" class="images top-right"></a>
            <a href="#"><img src="strawhats.png" class="images bottom-left"></a>
            <a href="#"><img src="law.png" class="images"></a>
            <a href="#"><img src="goingmerry.png" class="images bottom-right"></a>
        </div>
        
        <div class="recommended">
            <h2 class='might-like'>You might like</h2>
            <div class='all-new-pp'>
                <div class='newPP-1'>
                    <div class='pp2'><img src="zoroprof.png" class="ppform images"></div>
                        <div class='nPP'>
                            <p class='displayName1'>Roronoa Zoro ⚔️</p>
                            <p class='marginP1'>@kingofhell</p>
                        </div>
                    <div class='followBtn'>
                        <button type="button" class="button1"><span>Follow</span></button>
                    </div>
                </div>
                <div class='newPP-2'>
                    <div class='pp2'><img src="trafalgar-law.png" class="ppform images"></div>
                    <div class='nPP'>
                        <p class='displayName2'>Trafalgar Law ⚠️</p>
                        <p class='marginP2'>@beposdad</p>
                    </div>
                    <div class='followBtn'>
                        <button type="button" class="button1"><span>Follow</span></button>
                    </div>
                </div>
                <div class='newPP-3'>
                    <div class='pp2'><img src="shanks.png" class="ppform images"></div>
                    <div class='nPP'>
                        <p class='displayName3'>Shanks 📛</p>
                        <p class='marginP3'>@redhaircap</p>
                    </div>
                    <div class='followBtn'>
                        <button type="button" class="button1"><span>Follow</span></button>
                    </div>
                </div>
                <div class='newPP-4'>
                    <h5 class='show-more'>Show More</h5>
                </div>
            </div>
        </div>

        <div class="recommended2">
            <h2 class="might-like">What's happening?</h2>
            <div class="all-new-pp">
                <div class='newPP-5'>
                    <div class='nPP'>
                        <p class='marginP2 trend'>MLB·LIVE</p>
                        <p class='displayName2'>Reds at Brewers</p>
                        <p class='marginP2 trend'>6291 Tweets</p>
                    </div>
                    <div class='pp2'><img src="brewers.png" class="ppform images brewers"></div>
                </div>
            
                <div class='newPP-5'>
                    <div class='nPP'>
                        <p class='marginP2 trend'>Trending</p>
                        <p class='displayName2'>Gear 5</p>
                        <p class='marginP2 trend'>7290 Tweets</p>
                    </div>
                    <div class="ellipses">...</div>
                </div>
                <div class='newPP-5'>
                    <div class='nPP'>
                        <p class='marginP2 trend'>Trending</p>
                        <p class='displayName2'>#PokemonGO</p>
                        <p class='marginP2 trend'>3898 Tweets</p>
                    </div>
                    <div class="ellipses">...</div>
                </div>

                <div class='newPP-5'>
                    <div class='nPP'>
                        <p class='marginP2 trend'>Trending</p>
                        <p class='displayName2'>Tik Tok</p>
                        <p class='marginP2 trend'>5329 Tweets</p>
                    </div>
                    <div class="ellipses">...</div>
                </div>
                <div class='newPP-5'>
                    <div class='nPP'>
                        <p class='marginP2 trend'>Trending</p>
                        <p class='displayName2'>One Piece</p>
                        <p class='marginP2 trend'>9237 Tweets</p>
                    </div>
                    <div class="ellipses">...</div>
                </div>
                <div class='newPP-4'>
                    <h5 class='show-more'>Show More</h5>
                </div>
            </div>
        </div>
    `;