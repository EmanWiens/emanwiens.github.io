// import logo from './logo.svg';
import './App.css';
// import projects from './projects.json';
import React from 'react'

// import rert_img from './RERT.gif'


// function make_post(index) {
//   return (
//     <div class="pannelItem">
//         <p>{projects["projects"][index]["description"]}</p>
//       </div>

//       <div class="itemLeft">
//         <img src={rert_img} class="pannelItem" />
//       </div>
//     </div>
//   ); 
// }


function make_banner() {
  return (
    <div class="banner">
      <div class="buttonHolder">
        <a href="/About"><button type="button" class="headerBtn">About</button></a>
        <a href="/Projects"><button type="button" class="headerBtn">Projects</button></a>
        <a href="/Home"><button type="button" class="headerBtn">Home</button></a>
        <a href="/Home"><h1 class="name">Emanuel Wiens</h1></a>
      </div>
    </div>
  );
}



function make_projects() {
  return (
    <div class="contentPannel">
    

            
            <div class="pannelItem">
                <div class="itemRight">
                    <img src="proj1.gif" class="pannelItem" alt="" /> 
                </div>
                <h2>Welcome!</h2>
                <hr></hr>
                <div>
                    <p>Over the years I have worked on many projects including personal projects, university projects, and event projects. Given the nature of certain projects, I may not be allowed to go into            
            
            
            
            
            
            
            
            
            
 certain details. However, there are many projects that I am proud to show off and there are always some more to add. If the code is public a link will be presented.</p>
                </div>
            </div> 



            <div class="pannelItem">
                <div class="itemRight">
                    {/* <embed type="text/html" src="Grav_2D/main.html" style="width:100%; height: 50%; overflow:hidden; "> */}
                </div>
    
                <div class="itemLeft">
                    <h2>Grav_2D, Fall 2024, Personal Project</h2>
                    <hr></hr>
                    <p>I always wanted to make a gravity simulation, where the stellar bodies actually move around based on gravity. I've also always wanted to do something with Javascript. So, I combined the two and wrote this gravity simulation in Javascript. There are a wide variety of calculations that I had to use and it was really not as simple as I thought it would be. However, it was really fun to do and I really enjoy watching it go. Currently, is has the sun and the first 4 planets in our solar system.<a href="https://github.com/EmanWiens/Grav_2D">Github</a>.</p>
                </div>
            </div> 
    
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <h2>Rapid Exploring Random Trees, Fall 2021, Personal Project</h2>
                    <hr></hr>
                    <p>Rapid Exploring Random Trees is a method of exploring a terrain. The idea is that you place a target in a random location on the screen, which is not drawn, then find the closest point of the path already travelled and take a step into the direction of the random point. Continue this until you reach the goal. I learned about this a while back in a course and have now re-implemented it mostly for amusement, I just love watching it explore. It's interesting that even though it takes a random step, it still finds the goal even in really tough spots. See the code on <a href="https://github.com/EmanWiens/Rapidly_Exploring_Random_Trees">Github</a>.</p>
                </div>
    
                <div class="itemLeft">
                    <img src="RERT.gif" class="pannelItem" alt="Rapid Exploring Random Trees gif" />
                </div>
            </div> 
    
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <img src="ACO.gif" class="pannelItem" alt="Ant Colony Optimization gif" />
                </div>
    
                <div class="itemLeft">
                    <h2>Ant Colony Optimization (ACO), Fall 2021, Personal Project</h2>
                    <hr></hr>
                    <p>ACO is a meta-heuristic for combinatorial optimization problems, which is a fancy way of saying routing problem. The most basic instance of a routing problem is the famous <a href="https://www.jstor.org/stable/167517">"Travelling-salesman problem" introduced by Merrill M. Flood in 1955</a>. The basic idea is for a single salesman to visit every city with the shortest possible distance. The reason this is a combinatorial problem is because for n cities there are n! different solutions. For example, if there are 10 cities then there are 3628800 different combinations of possible routes, where one route will be the shortest. Since finding the optimal solution when n is large is not possible within a reasonable amount of time, better methods need to be developed. In ACO, the variation is that there are many ants and they make choices based on probability which is based on the distance. Meaning, a given ant can see all the cities and each city will have a probability of being visited based on the distance. So, the closest will have the highest probability and the furthest the least. Additionally, when an ant travels down a path is lays pheromones which can be seen by other ants. In which case the probability will be based on both the distance and the pheromone strength. I implemented this as a visual reprentation to see how the algorithm works based on a tutorial by <a href="https://bsantosa.files.wordpress.com/2015/03/aco-tutorial-english2.pdf">Budi Santosa (2015)</a>. See the code on <a href="https://github.com/EmanWiens/ACO">Github</a>.</p>
                </div>
            </div> 
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <h2>Least square regression, Winter 2021, Personal Project</h2>
                    <hr></hr>
                    <p>Least square regression simply tries to minimize the distance to all points. Ridge regression takes the error into account and tries to minimize error by giving points a weight that indicates how much this point should contribute to the model. For example, an outlier is not desirable so giving it a small weight means that it will be less likely to make the model incorrect. Additionally, once you can also use more advanced methods like nonlinear solutions. For now, I implemented the simplest version of the algorithm. <br /><br />See the code on <a href="https://github.com/EmanWiens/Least_Squares_Regression">Github</a>.</p>
                </div>
    
                <div class="itemLeft">
                    <img src="LeastSquareRegression.png" class="pannelItem" alt="Least square regression gif"/>
                </div>
            </div> 
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <img src="savingyourbacon.png" class="pannelItem" alt=""/>
                </div>
    
                <div class="itemLeft">
                    <h2>Save Your Bacon, Fall 2019, Event Project</h2>
                    <hr></hr>
                    <p> As part of being on the Executive Team for the Computer Science Students' Association we hosted a Game Jam. After all the event planning done by the other members and myself, we managed to make a mini game. This is a three day project that the four of us finished. 
                    
                        <br /><br />Game description: Your pig just won first prize at the county fair. The other farmers are angry that you won and start throwing rocks at your pig. The pig is defenceless against getting hit by a rock and will die immediately. Luckly, you are a skilled rock catcher so it is up to you to catch the rocks. While dodging and catching rocks, you find coins on the ground that you can use to buy protection for your pig.<br /><br />See the code on <a href="https://github.com/EmanWiens/FlakySuperpower">Github</a>.</p>
                </div>
            </div> 
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <h2>Honours Project, Fall 2019, University Project</h2>
                    <hr></hr>
                    <p> In my last year I did an honours project focusing on Quantum Computing and Quantum Information processing. This started by first looking into what a Quantum Processor is and why it is different and such a hot topic. Once I learned more about how to manage state and the underlying math behind it, I worked on writing simple quantum algorithms on IBM Q. Throughout this project I made us of technologies such as <a href="https://qiskit.org/">Qiskit</a> and <a href="https://quantum-computing.ibm.com/">IBM Q Experience</a>.
                        <br /><br />Image Retrieved from <a href="https://en.wikipedia.org/wiki/Qubit">https://en.wikipedia.org/wiki/Qubit</a></p>
                </div>
    
                <div class="itemLeft">
                    <img src="Bloch_sphere.svg" class="pannelItem" alt="" />
                </div>
            </div> 
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <img src="planetColonizer.gif" class="pannelItem" alt="" />
                </div>
    
                <div class="itemLeft">
                    <h2>Planet Colonizer, Summer 2018, Personal Project</h2>
                    <hr></hr>
                    <p>This is a personal project that I worked on through the summer. It's a simulation that "populates" the planets and its moons. There are calculations based on real population growth and decay, as well as a max population that can be supported on a given planet. And, of course these numbers are based on real statistics. Otherwise, where's the fun? As of now it only includes our solar system (not all pictured). 
                    </p>
                </div>
            </div> 
    
    
            
    
    
    
    
    
    
            <div class="pannelItem">
                <div class="itemRight">
                    <h2>Hackmaster, Spring 2018, University Project</h2>
                    <hr></hr>
                    <p>This is the project that I worked on for my Software engineering course. The five of us worked diligently to complete  this game. There were many bumps in the road, but with proper communication and a lot of patience we all pulled together as a team to make this entertaining mini game. <br /><br />See the code on <a href="https://github.com/EmanWiens/hackmaster">Github</a>.</p>
                </div>
    
                <div class="itemLeft">
                    <img src="hackmaster.jpg" class="pannelItem" alt="" />
                </div>
            </div> 
    
    
    
    
            
            <div class="pannelItem">
                <div class="itemRight">
                    <img src="particleSystem.gif" class="pannelItem" alt="" />
                </div>
    
                <div class="itemLeft">
                    <h2>Particle System, Fall 2018, University Project</h2>
                    <hr></hr>
                        <p>This is a particle system that I did for an assignment and then later slightly modified. It's a rather simple program, but it was fun to make. I also like the idea of using small particles to simulate things like smoke and fire.<br /><br />
    
                        The particles have mass and slightly change color on every collision, which is only noticeable when the program runs for a few seconds.
                        <br /><br />See the code on <a href="https://github.com/EmanWiens/ParticleSystem">Github</a>.
                    </p>
                </div>
            </div> 
    
    
    
            
    
            <div class="pannelItem">
                <div class="itemRight">
                    <h2>Environmental Engine, Summer 2016, Personal Project</h2>
                    <hr></hr>
                        <p>Another personal project that simulates growing grass using particles. This whole program is procedurally generated. Each 'root' is made up of several blades of grass and each blade of grass is made up of several particles. The grass can grow and be mowed. I also worked on making it sway in the wind which was a challenge. <br /><br />
    
                        I have since learned more about optimizing code and different strategies that I could have used to accomplish similar things, but I enjoyed writing it. When I wrote this program I didn't know that this is technically a particle system, I just had the idea and wanted to try it.
    
                    </p>
                </div>
    
                <div class="itemLeft">
                    <img src="environEngine.gif" class="pannelItem" alt="" />
                </div>
            </div>
          </div> 

  );
}


function make_home() {
  return (
    <div class="contentPannel">
    
      <div class="pannelItem">
        <h2>Welcome to my Personal website</h2>
        <hr></hr>
        <p>I am currently working on switching the backend to a <a href="https://react.dev/">React App</a>. This means that many parts of the website are not going to be working right at this time or may look funky until I fix them. While I am redesigning my site, I will use the opportunity to improve my project writeups. 
        <br />
        <br />
        Current road map: <br />
        1. Switch over to React (move data over as is)<br />
        2. Update navigation bar using React libraries/techniques <br />
        3. Add projects in one by one <br />
        </p>
      </div> 


      <div class="pannelItem">
        <p>July 19, 2023: I finally got the <a href="https://emanuelwiens.notion.site/Iteration-2-RC-tank-22e060e6c186417fa05de60e3e6ac7d9?pvs=4">second iteration of my RC tank running</a>! I was having some issues figuring out the new motor control board as well as some wiring issues. Now that the power supply issue is fixed and the motors are running I will be cleaning up the wiring as well as  update some of the software which will be a wrapup for iteration 2. Some of the features, like the live feed camera, will be moved to iteration 3.</p>
      </div> 


      <div class="pannelItem">
        <p>June 10, 2023: Lately, I have been learning more about <a href="https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#">CUDA programming</a> which is a c-like programming language meant to be run on a Nvidia graphics card. Learning more about CUDA has been something I have been interested in a while as I am very interested in parallel and distributed computing. In terms of parallel programming this is an amazingly strong resource to have. Even consumer level GPUs have a LOT of memory and CUDA cores that range in the thousands or even ten thousands. These cards are capabale of running a lot of parallel calculations making them excellent for solving many different types of mathematical problems. I am currently learning more about how the memory model of the cards work which is divided into global and shared memory. The computation is divided into what are called blocks and shared memory on a given block is only accessible on that block, whereas global memory is accessible to all blocks.</p>
      </div>  


      <div class="pannelItem">
        <p>May 5, 2023: Over the last year I have been getting really into carnivorous plants. My grandma came to visit and she bought me a <a href="https://en.wikipedia.org/wiki/Sarracenia">sarracenia</a>. These plants are really picky about their environment and despite that I managed to keep it alive all year! It grew amazingly. Even though they grow in warmer climates they like to go into <a href="https://www.sarracenia.com/faq/faq2380.html#:~:text=Refrigerator%3A%20Put%20the%20plant%20in,plant%20out%20of%20the%20refrigerator.">hibernation</a>, one of the methods to simulate that is to put them in the fridge. In the coming days I will be taking the plant out of the fridge and hopefully it will be ready to grow. With the success last year, I bought more carnivorous plants this year including my dream plant, a <a href="https://en.wikipedia.org/wiki/Nepenthes">Nepenthes</a>. So far, the nepenthes is growing really well, the new leaves and pitchters are more than twice the size of the older ones.</p>
      </div>  



      <div class="pannelItem">
        <p>Oct 13, 2022: I was really ambitious about how many in-door activities I would have time for during the summer. I ended up going out more and I'll leave the in-door activities for the winter. It snowed today, looks like winter might come early this year.</p>
      </div>  




      <div class="pannelItem">
        <p>Jan 10, 2022: I have been wanting to make a real-time strategy game for a little while now but I couldn't decide what I wanted to use to make it. Recently, a friend recommended <a href="https://godotengine.org/">Godot</a>. I decided to do a <a href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/your_first_game.html#overview">tutorial</a> and I found it really intuitive to use! The UI is well designed and provides a lot of transparency in terms of game object hierarchies. I have decided to use this to make a real-time strategy game.</p>
      </div>  



             <div class="pannelItem">
                <p>Dec 30, 2021: Over the course of this year I attempted to do more personal projects and document them well. Some went well and some not so much. There are some fun projects that I wanted to publish yet but I have not gotten around to cleaning them up. I started publishing my projects on <a href="https://www.notion.so/">Notion.so</a> and you can see my <a href="https://emanuelwiens.notion.site/Published-Pages-c2c9a752f63a4078adb719daeb959b64">published pages</a> there. The RC tank project from below has been published there. Additionally, I have been interested in making visualizations of machine learning algorithms. I noticed that there are some that are just conceptually tough to grasp, but once I saw what it is that they do it was really easy to determine what they are doing. You can see them on the Notion.so page as well as on my <a href="projects.html">projects page</a>. Currently I am attempting to see if I can create a simple visualization of Bayesian inference and if it turns out the way I want it to, I will likely publish it or at least talk about it on the projects page.</p>
            </div>  




            <div class="pannelItem">
                <p>Nov 8, 2021: One of the larger projects I have been working on is making my own R.C. car that I can control using my <a href="https://www.raspberrypi.com/products/raspberry-pi-3-model-b/">Raspberry Pi 3 Model B</a>. There has been a lot of learning to do for that project. First, I connected a <a href="https://www.amazon.ca/gp/product/B076MPL9P1/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">Raspberry PI camera module</a> for a <a href="https://picamera.readthedocs.io/en/latest/recipes2.html#web-streaming">live feed</a>. I inadvertently got an infrared camera so I also got the <a href="https://www.amazon.ca/gp/product/B07JKJQN4S/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">night vision module</a> shortly after. Additionally, I had to learn how to use a control board like the <a href="https://www.amazon.ca/gp/product/B07GC26TVK/ref=ppx_yo_dt_b_asin_title_o05_s02?ie=UTF8&psc=1">L298N module</a> to control the motors. Doing so required me to get a basic understanding of how batteries work such as putting them in <a href="https://www.power-sonic.com/blog/how-to-connect-batteries-in-series-and-parallel/">parallel or in series</a>. I ran into an issue when I connected the tank motors to the Raspberry PI as it was not getting enough power to the motors. I think I used wires that cannot carry the right amount of amps. If I can get that working I have been looking into <a href="https://www.amazon.ca/gp/product/B083DMWHBL/ref=ox_sc_saved_image_1?smid=A30Y6WWS77DGEW&psc=1">radio transceivers</a> as a potential alternative to Wi-Fi or Bluetooth controller, like an <a href="https://howchoo.com/pi/xbox-controller-raspberry-pi">Xbox One controller</a>, and live video feed. Currently, I am working on documenting everything that I have done to make a guide on how you can do these things yourself.</p>
            </div> 


            <div class="pannelItem">
                <p>1 Nov, 2021: It's been a while since I updated this page, which is not to say that I have not been working on personal projects. I will take the time to discuss the various projects I worked on soon. For now, I want to say that the last year has been a tough one and I appreciate all the lovely people in my life as we all stood together to face this hardship. </p>
            </div> 

             <div class="pannelItem">
                <p>21 Feb, 2021: Over the last few weeks I have been working on an assignment for a course. In this assignment we are to conduct an experiment to test which is faster for tablet input, the index finger or the thumb. The measurement used to determine which has higher throughput is <a href="https://en.wikipedia.org/wiki/Fitts%27s_law">Fitts's law</a>. Simply put, this is a measure that is said to be able to predict how fast a person can move from one target to another with a disance A and a target of size W. Aside from learning what Fitts's law is, I also learned about react native which is the environment my partner and I used to implement this experiment. It has been amazing learning the ins and outs of react native even though I feel I have only scratched the surface. Further, I learned that the index finger has higher throughput than the thumb on tablets through our experiment.</p>
            </div> 

             <div class="pannelItem">
                <p>16 Feb, 2021: I have learned a couple things this week but I am a bit behind during this busy season, so I am hoping that I can catch up over this week as I have the reading week break. To discuss one thing, for one of my courses I had to pick a teaching technology and write about how it works from the student and the teacher perspectives. The technology I chose to explore was <a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html">Data Structure Visualizations</a> because I love Visualizations of complex data structures and algorithms. From the student perspective, I have used this to get a better image of how some algorithms work and have used these kinds of tools as a way to work through what I think the algorithm will do in a given situation with a given input. For the teachers, the creator Dr. David Gallas made the code available to be extended. I implemented a simple sorting algorithm to understand the framework he has created, which I learned runs almost entirely on JS. As a person with limited JS experience, it was amazing to program JS in an environment that has visual feedback for the algorithms being implemented as I am a visual thinker. This was not in the report I wrote for the course but it feels worth discussing here. </p>
            </div> 

             <div class="pannelItem">
                <p>7 Feb, 2021: This week I read a paper about <a href="https://www.researchgate.net/publication/221192597_A_Particle_Swarm_Optimization-Based_Heuristic_for_Scheduling_Workflow_Applications_in_Cloud_Computing_Environments">Particle swarm optimization</a>. The concept is to have many particles that are given properties of the problem to solve and each one goes off on their own to attempt to solve the problem. A given particle compares how well it did with its own best attempt as well as the global best attempt. The context of this article was cloud computing resources and attempting to optimize some aspect of it, like least possible execution time. I tried to understand all the math but some of it went over my head, but I am interested to do some more reading. This idea came from ants, since they each perform their own tasks yet are known to be very efficient creatures. According to the paper, this type of optimization algorithm is accurate yet efficient at finding solutions and has been applied to solving other NP-Hard problems.</p>
            </div> 



            <div class="pannelItem">
                <p>31 Jan, 2021 (edited: 7 Feb, 2021): I recently got a new amp as a gift! I love how it sounds. I noticed that because my amp was broken and I was not able to play properly, it deterred me from wanting to learn new songs since they always sounded bad when I played them on my amp. Now that I have a new amp, I noticed how bad the state of my old amp was and I am noticing that I am wanting to play again and that I want to learn more about music. <br /><br /> 
                    
                Over the years I have taught myself to play the guitar. Since I learned it myself, I have noticed that my learning does not always follow a structure and I learn things out of order. Or, as with chords, I learned them so long ago and have forgotten many of them since my style is rock and metal music which do not often use chords. <br /><br /> 
                    
                Yesterday was the first time that I jammed with a friend, he plays drums. We played a few songs that we both like, we are both fans of System of a down, and though it requires more practice I think we sounded good. One thing that I started reading into more in the last few days are scales. I had heard of scales in music many times before and had some idea of what they are but never learned what they are formally and what they are for guitar. My basic understanding is that there are preset combinations of strings and frets (i.e. the vertical bars on the neck of the guitar) that sound nice and I think scales are also used to make chords. I hope that learning scales will give me the ability to improvise more when playing, which I notice is not something that I am particularly good at yet.</p>
            </div> 

            <div class="pannelItem">
                <p>20 Jan, 2021: I have great interest in machine learning and took a few courses that taught me more about them. I really loved learning the concepts but have since forgotten some of the things that I have learned. As I was refreshing my knowledge I had the sudden urge to program <a href="https://towardsdatascience.com/ridge-regression-for-better-usage-2f19b3a202db">Ridge Regression</a> on a live setting where the user can add points and see how well the line fits them. I planned to do Ridge regression but for now only Linear Regression is implemented. The thing that is missing is the error. I have made the <a href="https://github.com/EmanWiens/Ridge_Regression">code</a> I wrote public, it's not the cleanest but it demonstrates some of the key points of the model.</p>
            </div> 

            <div class="pannelItem">
                <p>8 Jan, 2021: I have attempted using Unity before for making games a year or so ago but the first time I touched it I did not get far. For this reason, I stopped the project for the time and started some tutorials. A friend of mine sent me the <a href="https://studentgamedev.blogspot.com/2013/08/unity-voxel-tutorial-part-1-generating.html">Unity Voxel Tutorial</a>. The tutorial goes over how to generate a gameobjects mesh and how to shape it after. For example, after creating 2D terrain, it used ray tracing to make caves by casting a line through the map. This was a really fun tutorial to follow and very informative. Since then, I have started a project with another friend in unity. There has been good progress in the project and my friend is very patient as I take longer on simple tasks than he does.</p>
            </div> 
    
            <div class="pannelItem">
                <p>6 Jan, 2021: For one of my courses I had to implement topic modelling using the <a href="https://pypi.org/project/gensim/">Gensim</a> library. There is a generative statistical model called Latent Dirichlet allocation (LDA). The project was based on a paper called <a href="https://research.cs.queensu.ca/home/sthomas/data/Barua_2012_EMSE.pdf">What are developers talking about? An analysis of topics and trends in Stack Overflow</a>. As the title suggests, the point of the article is to analyze what topics developers are talking about and how those trends change over the time spanning from July 2008 to September 2010, which involved around 3.5 million posts. They were able to find significant trends. In our project we were only able to sample 50,000 posts from 3 million ranging from February 2020 to September 2020. However, insignificant, the results we found were interesting and I thoroughly enjoyed learning to use this new modelling tool. Due to this being made for a course, I am not sure if I am allowed to make this code public. Given this limitation, I may write a similar code again and fix the things I did not like the first time and republish the code. This might be a large undertaking and I am currently working on other projects which limits my time. I will, however, be discussing my other projects in later blog entries. </p>
            </div> 
    
            <div class="pannelItem">
                <p>5 Jan, 2021 (edited: 7, Feb 2021): First entry. I am excited to start a blog. I have wanted to start a blog for some time where I can discuss the projects I have worked on in the past and present, as well as future projects that I hope to tackle. Given the nature of some of my projects, there might be limited things I can discuss, but I still look forward to discussing what I can. Further, I may also discuss various things about new things that are being introduced in the computer science world. Lastly, I will discuss things that I have learned on my own or for other reasons like work or school. Since I have various interests including plants, animals, playing guitar, computers and gaming, amongst other things that strike my interest.</p>
            </div> 
        </div>
  );
}


// function make_projects() {

// }


// funciton make_about() {

// }


function App() {
  return (
    <html>
      <head>
        <title>E. Wiens</title>
      </head>
      <body bgcolor="#555">
        {make_banner(0)}
        {make_home(0)}
      
      </body>
    </html>
  );
}

export default App;
