import Image from "/assets/harrypotter.jpg";

import COC from "../../public/assets/Logos/9.png";
import hack from "../../public/assets/Logos/11.png";
import battle from "../../public/assets/Logos/8.png";
import quiz from "../../public/assets/Logos/10.png";
import biwiz from "../../public/assets/Logos/7.png";
import manuscript from "../../public/assets/Logos/13.png";
import socery from "../../public/assets/Logos/12.png";
import TechTug from "../../public/assets/Logos/14.png";

const eventDetails = [
  {
    name: "The Chamber of Clues",
    image: COC,
    id: "COC",
    number: "2-4",
    venue: "I22",
    time: "9:30 am - 12:30 pm",
    description: (
      <>
        <li id="coc">
          Prepare to embark on a thrilling adventure as you navigate your way
          through the Chamber of Secrets in the "Enigmatic Quest."{" "}
        </li>
        <li id="coc">
          The teams have to decipher the clues provided, employing various
          cipher techniques provided. Upon successfully decrypting a clue, teams
          gain the location of the next clue and a secret passcode.This passcode
          must be shown to the witch/wizard stationed at venue in the clue
        </li>
        <li id="coc">
          In the finale, teams will confront an encrypted file. The first team
          to successfully decrypt the file shall the victor of this
          extraordinary quest
        </li>
        <li id="coc">
          The time limit will be the first three players to complete the event
          or 1 hour 30 minutes.
        </li>
      </>
    ),
    rules: (
      <>
        <li id="coc">Internet is allowed in deciphering clues</li>
        <li id="coc">
          Teams must always report to return event venue at start and conclusion
          of event
        </li>
        <li id="coc">
          Viloation of rules/damage to property/cheating results in immediate
          disqualification.
        </li>
      </>
    ),
  },
  {
    name: "Hackwarts",
    image: hack,
    id: "hackwarts",
    number: "1-4",
    venue: "COE and I13",
    time: "8:30 am - 3:00 pm",
    description: (
      <>
        <li>
          The problem statements will be announced at the start of the event.
        </li>
        <li>
          Within the end of the day the participants should have developed the
          ideas into prototypes.
        </li>
        <li>
          Prototypes should be pitched before the judges by the end of the day
        </li>
      </>
    ),
    rules: (
      <>
        <li> The judge's decision is final.</li>
        <li>
          Participants should bring their laptops for the hackathon otherwise
          not eligible for participation and usage of the internet is permitted.
        </li>
      </>
    ),
  },
  {
    name: "Hogwarts TechTug",
    image: TechTug,
    id: "techtug",
    number: "1",
    venue: "I24",
    time: "9:30 am - 12:30 pm",
    description: (
      <>
        <li>Techtug is a technical extempore.</li>
        <li>
          As per the topic chosen by participants, they are expected to talk for
          the topic for 1.30 mins and against the topic for 1.30 mins .
        </li>
      </>
    ),
    rules: (
      <>
        <li>It is an Individual event.</li>
        <li>
          Participants are supposed to choose a lot with the topic written
          inside .
        </li>
        <li>20 mins preparation time will be given</li>
        <li>
          Usage of mobile phones in any course of the event is strictly
          prohibited.
        </li>
        <li>Discussions with other participants are also not allowed.</li>
        <li>Political trends are discouraged</li>
      </>
    ),
  },
  {
    name: "Nanocode Sorcery",
    image: socery,
    id: "nano",
    number: "2",
    venue: "A12",
    time: "1:30 pm - 3:00 pm",
    description: (
      <>
        <li>
          The goal is to provide the shortest source code that solves the given
          puzzle or the problem statement,
        </li>
        <li>The event will be conducted on the site:code golf</li>
        <li>
          {" "}
          Everyone will link with their github account and follow our main
          pages' account to keep track of the leaderboard.
        </li>
        <li>
          There will be 4 golf holes to pocket: The 1st hole consists of puzzles
          to solve and the remaining rounds will be Code Crafting.
        </li>
        <li>
          The level of difficulty and the scoring will gradually increase in
          each hole.
        </li>
      </>
    ),
    rules: (
      <>
        <li>Stick to the timer to solve every puzzle</li>
      </>
    ),
  },
  {
    name: "Biwizard Tournament",
    image: biwiz,
    id: "Tour",
    number: "2",
    venue: "H22, I23",
    time: "9:30 pm - 12:30 pm",
    description: (
      <>
        <li>
          Each team is composed of 2 members who will take turns coding and
          participating in surprise activities.
        </li>
        <li>
          In the initial round, each buddy will have five minutes to tackle a
          given coding challenge.
        </li>
        <li>
          In the second round, Each buddy will have 15 minutes to conquer a more
          complex coding challenge.
        </li>
        <li>
          The team that completes the second round in the least amount of time
          will emerge victorious and be crowned as the "Biwizard Tournament"
          champions
        </li>
      </>
    ),
    rules: (
      <>
        <li>Each team with exactly 2 members</li>
        <li>Participants must bring their own laptops</li>
        <li>Evaluators decision will be final</li>
      </>
    ),
  },
  {
    name: "Bugcrux Battle",
    image: battle,
    id: "battle",
    number: "1-2",
    venue: "H22 and I23",
    time: "1:30 am - 3:00 pm",
    description: (
      <>
        <li>
          This event revolves around identifying, diagnosing and rectifying bugs
          or errors in provided segments of code.
        </li>
        <li>
          The choice of programming languages may include Python, Java, C and
          C++
        </li>
        <li>Clues can be provided but with a catch!</li>
      </>
    ),
    rules: (
      <>
        <li>
          {" "}
          There are a total of three rounds present. Each of 30 mins duration.
        </li>
        <li>
          The winners for round 1 will be decided based on the number of
          questions solved .
        </li>
        <li>
          The winners for round 2 and 3 will be based on the time (One who finds
          the error and solves in the shortest time).
        </li>
      </>
    ),
  },
  {
    name: "Magical Manuscripts",
    image: manuscript,
    id: "manuscript",
    number: "1-3",
    venue: "I21",
    time: "8:30 am - 1:30 pm",
    description: (
      <>
        <li>
          This is is a showcase of cutting-edge ideas and discoveries in the
          field of computer science.
        </li>
        <li>
          The teams will get 7 minutes for presentation and followed by question
          and answer.
        </li>
        <li>Each session is for 3 mins</li>
        <li>
          Judging Criteria: ➢ Content and Research (40 points) ➢ Technical
          Excellence (30 points): ➢ Presentation and Communication (20 points) ➢
          Q&A Interaction (10 points)
        </li>
        <li>
          The top 2 teams will be shortlisted to compete with selected teams
          from other departments. Finally, 3 teams will be awarded prizes.
        </li>
      </>
    ),
    rules: (
      <>
        <li>Only Engineering college students are allowed.</li>
        <li>Paper should have minimum of 6 pages </li>
        <li>
          Bring your Bonafide certificate and college ID-Card on event day.
        </li>
        <li>
          The registration with submissions should contain: ID of the authors
        </li>
      </>
    ),
  },
  {
    name: "Quizzitch",
    image: quiz,
    id: "quiz",
    number: "1-2",
    venue: "I24",
    time: "1:30 pm - 3:00 pm",
    description: (
      <>
        Tambola, also known as Bingo or Housie, a classic numbers game. But with
        a twist in the usual game.
        <li>Participants will be given tickets and a rough sheet</li>
        <li>Questions are asked randomly (technical)</li>
        <li>
          {" "}
          If participants locate the answer in their sheets, they are to mark it
          with the question number
        </li>
        <li>
          For every 5 questions a random participant is selected for the bonus
          round
        </li>
      </>
    ),
    rules: (
      <>
        <li>Participants are allowed to view their neighbor’s sheet.</li>
        <li>
          Winners will be declared based on the winning pattern after
          verification
        </li>
      </>
    ),
  },
];

export default eventDetails;
