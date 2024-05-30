
document.addEventListener('DOMContentLoaded', () => {
  const apiURL = 'https://api.example.com/social-media-stats'; // Replace with your actual API URL

  fetch(apiURL)
      .then(response => response.json())
      .then(data => updateDashboard(data))
      .catch(error => console.error('Error fetching data:', error));
  
  const updateDashboard = (data) => {
      // Update total followers
      document.getElementById('total-followers').textContent = data.totalFollowers;

      // Update main cards
      document.querySelector('#facebook .followers').textContent = data.facebook.followers;
      document.querySelector('#facebook .today').textContent = `${data.facebook.today} Today`;
      
      document.querySelector('#twitter .followers').textContent = data.twitter.followers;
      document.querySelector('#twitter .today').textContent = `${data.twitter.today} Today`;
      
      document.querySelector('#instagram .followers').textContent = data.instagram.followers;
      document.querySelector('#instagram .today').textContent = `${data.instagram.today} Today`;
      
      document.querySelector('#youtube .subscribers').textContent = data.youtube.subscribers;
      document.querySelector('#youtube .today').textContent = `${data.youtube.today} Today`;

      // Update overview cards
      document.querySelector('#facebook-page-views p:nth-child(2)').textContent = data.facebook.pageViews;
      document.querySelector('#facebook-page-views p:nth-child(3)').textContent = `${data.facebook.pageViewsChange}%`;

      document.querySelector('#facebook-likes p:nth-child(2)').textContent = data.facebook.likes;
      document.querySelector('#facebook-likes p:nth-child(3)').textContent = `${data.facebook.likesChange}%`;

      document.querySelector('#instagram-likes p:nth-child(2)').textContent = data.instagram.likes;
      document.querySelector('#instagram-likes p:nth-child(3)').textContent = `${data.instagram.likesChange}%`;

      document.querySelector('#instagram-profile-views p:nth-child(2)').textContent = data.instagram.profileViews;
      document.querySelector('#instagram-profile-views p:nth-child(3)').textContent = `${data.instagram.profileViewsChange}%`;

      document.querySelector('#twitter-retweets p:nth-child(2)').textContent = data.twitter.retweets;
      document.querySelector('#twitter-retweets p:nth-child(3)').textContent = `${data.twitter.retweetsChange}%`;

      document.querySelector('#twitter-likes p:nth-child(2)').textContent = data.twitter.likes;
      document.querySelector('#twitter-likes p:nth-child(3)').textContent = `${data.twitter.likesChange}%`;

      document.querySelector('#youtube-likes p:nth-child(2)').textContent = data.youtube.likes;
      document.querySelector('#youtube-likes p:nth-child(3)').textContent = `${data.youtube.likesChange}%`;

      document.querySelector('#youtube-total-views p:nth-child(2)').textContent = data.youtube.totalViews;
      document.querySelector('#youtube-total-views p:nth-child(3)').textContent = `${data.youtube.totalViewsChange}%`;
  };
  const dark = document.getElementById(dark-mode);
  function toggle(){
      dark.innerHTML=''    
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  };
toggle()
//   document.getElementById('dark-mode').addEventListener('change', toggleDarkMode);

//   themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';


});
