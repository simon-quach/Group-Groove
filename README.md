# Group-Groove

A web application that allows users to create/join rooms and suggest songs. Group Groove is essentially a music queue determined by the crowd.

**The purpose of this project is to practice concepts related to:**
> - MERN Stack
> - Building a REST API
> - Using a non-relational database
> - Full-stack application

**Tools used:**
> - ReactJS
> - TailwindCSS
> - Node.js
> - Express
> - MongoDB
> - iTunes API

**Some issues present in the application:**
> - Upvote feature is currently not stored in database, rather on client side
> - React useEffect is rendering in an infinite loop; 

**Things to learn:**
> - Need to implement a better system for real-time updates
> - Improve the backend Express server (ex: organizing the routes, using proper names)

## Setup

### Client
1. Go into the client folder
```sh
cd client
```

2. Install dependencies
```sh
npm install
```

### Server
1. Go into the server folder
```sh
cd server
```

2. Install dependencies
```sh
npm install
```

# Hackathon Information

### Inspiration
Making decisions that can please a large group of people can be a challenging task for any individual, especially when it comes to choosing music for social gatherings. The pressure is even greater when the person responsible for selecting the tunes is seen as the one in charge. The task of choosing music for a social gathering is not one to be taken lightly, as it can have a significant impact on the overall mood and atmosphere of the event. It's important to consider everyone's taste and ensure that the music selection appeals to a wide range of people. This can be a delicate balancing act, as it's possible that some attendees may have conflicting musical preferences.

### What it does
Group Groove is a cutting-edge web application that transforms the way music is chosen and played at social events. With our app, everyone at the gathering becomes a part of the decision-making process. Gone are the days of the one designated DJ having to shoulder the responsibility of choosing music for the entire crowd. With Group Groove, users can easily view the current song and make song requests with just a few clicks. The app also allows users to upvote other requests, making it easier for the Group DJ to see which songs are the most popular among the crowd. This creates a more inclusive and engaging experience, where everyone has a say in the music being played. The Group DJ has complete control over the music queue and can choose to accept or deny song requests at any time. This ensures that the DJ remains in control of the event, while also giving attendees the opportunity to influence the musical selections. Group Groove strikes the perfect balance between crowd control and DJ control, resulting in a seamless and enjoyable musical experience for everyone.

### How we built it
Group Groove was built using a combination of technologies to provide a wonderful experience for the crowd. The frontend of the app was built using Vite, a lightweight development server, ReactJS, a powerful JavaScript framework, and Tailwind CSS, a utility-first CSS framework, providing a sleek and intuitive interface. The backend was built using Express.js, a Node.js framework, allowing for efficient handling of data and communication between the frontend and the model. The server is also tied to our non-relational database, MongoDB.

### Challenges we ran into
Our team faced several challenges during our project, as we were all first-timers in this setting. One of the major challenges we faced was the switch from using Flask to Express.js, which was a time-consuming process and was necessary due to difficulties in connecting Flask with our front end. Additionally, many of us were unfamiliar with using Git in a team setting, which posed another obstacle and required us to spend time learning and familiarizing ourselves with the version control system. Despite these challenges, our team was able to persevere and complete the project.

### Accomplishments that we're proud of
As a team, we are extremely proud of what we were able to accomplish. Despite being first-timers in this setting, we successfully built a simple full-stack application using a tech stack of our own choosing. Integrating the front-end, back-end, and database was no easy feat, but with hard work and collaboration, we were able to overcome this obstacle. Our ability to handpick the tech stack and make it all come together was a testament to our team's expertise and determination. The experience was both challenging and rewarding, and we are grateful for the opportunity to showcase our skills and work together as a team.

### What we learned
We have learned a lot during the development of Group Groove. Some of the key things we have learned include:
- The importance of creating a user-friendly interface and easy-to-use application for users
- The importance of collaboration and communication within a team in order to achieve a common goal.
- How to integrate front-end with back-end
- Using RESTful APIs

### What's next for Group Groove
Possible features we have thought about implementing:
- Using Spotify's API to have the ability to add, queue, and play songs
- Adding an authentication system to better improve the current ID system
- Refactoring the routes in the back-end for best practices
