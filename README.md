Tweet Cards. Test project.

User cards are implemented according to the layout. When you click on the Follow
button, the text changes to Following. The color of the button also changes. And
1 follower is added to the number of followers. When the button is clicked
again, its text and color change to their original state, and the number of
followers also changes. It decreases by 1.

Pagination done. 3 tweets are displayed on one pagination page, the rest are
loaded when you click Load More (maximum 15 users). Routing is created. If the
user entered using a non-existent route, he was redirected to the home page. '/'
– Home, home page. '/tweets' - Tweets, page displaying tweets. The Tweets page
has a Back button that takes you to the main page. How it's done The work is
done on React. The personal backend for development was created using the
mockapi.io UI service (users resource). The axios library is used to query the
backend. React Router is used for routing.
