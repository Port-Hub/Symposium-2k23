import Image from "../assets/harrypotter.0.jpg";

const eventDetails = [
  {
    name: "Code Golfing",
    image: Image,
    id: "golfing",
    number: "1",
    venue: "A12",
    time: "2:00 pm - 3:30 pm",
    description: (
      <>
        <li>
          Columbus recreational club presents to you “Code Golf” - a playground
          where you show off your excellency in codes.
        </li>
        <li>
          It goes without saying that you win by providing us the shortest
          source code that solves the given puzzle which is very much similar to
          the famous “Golf” game where two players compete with each other and
          the one with the fewest club strokes wins.
        </li>
        <li>
          The event will be conducted on the official code golf site: Code Golf.
        </li>
        <li>
          Everyone will login with their github account and follow our main
          page's account to keep track of the leader board.
        </li>
        <li>
          There will be 5 golf holes. Each hole will contain a puzzle to solve
          in any of their preferred programming language.
        </li>
        <li>
          The difficulty of the puzzle will gradually increase in each hole.
        </li>
        <li>
          At the end the top 3 in the leader board will be declared as winners.
        </li>
      </>
    ),
    rules: (
      <>
        <li>Login to Code Golf using your github account</li>
        <li>
          Stick to the timer to solve every puzzle. Any submission after it
          won't be accepted.
        </li>
        <li>Abide by the final decisions taken by the coordinators.</li>
      </>
    ),
  },
  {
    name: "Hugs & Bugs",
    image: Image,
    id: "hugs",
    number: "2",
    venue: "COE and H22",
    time: "10:30 am - 12:00 pm",
    description: (
      <>
        <li>The game consists of Two Rounds</li>
        <li>
          {" "}
          Here each buddy should code alternatively, First person will code for
          the first few minutes followed by the second person . When the first
          person is coding the second person will be engaged with some surprise
          activity.{" "}
        </li>
        <li>
          {" "}
          The first round is an elimination round. Here each buddy is given five
          minutes to solve the given code. (Difficulty level : Easy, 10 minutes)
        </li>
        <li>
          The second round is the final round where each buddy is given 15 min
          to solve the code.(Difficulty level : Medium to Hard, 30 minutes)
        </li>
        <li>
          The team to complete the second round in least time will be declared
          winners.
        </li>
        <li>
          Any programming language is fine for us. The rest is yours!!.Come on
          buddies, let us code!!!!
        </li>
      </>
    ),
    rules: (
      <>
        <li>2 members per team.</li>
        <li>Mobile phones and internet usage is not permitted</li>
        <li>The decision of the event coordinators will be final</li>
        <li>
          Violating the rules or any kind of cheating leads to disqualification
        </li>
      </>
    ),
  },
  {
    name: "Santa Maria Hunt",
    image: Image,
    id: "santa",
    number: "1 - 3",
    venue: "I22, Final Round : A12",
    time: "10:30 am - 12:20 pm",
    description: (
      <>
        <li>The event consists of 7 sequential rounds.</li>
        <li>
          {" "}
          Each team will be given a unique clue at the beginning of the hunt.
        </li>
        <li>
          {" "}
          The team must decrypt the clue using a cipher technique from the given
          set of cipher techniques.
        </li>
        <li>
          {" "}
          The decrypted message contains the venue of the next clue and a
          passcode.
        </li>
        <li>
          This passcode must be presented to the genie(volunteer) present in the
          venue mentioned in the clue.
        </li>
        <li> The genie will verify the passcode and give the next clue.</li>
        <li>
          The team has to decode the next clue and repeat the previous process
          till the final round.
        </li>
        <li> In the final round, the team must open an encrypted file.</li>
        <li> The first to open the encrypted file will be the winner.</li>
      </>
    ),
    rules: (
      <>
        <li>Internet usage is permitted.</li>
        <li>
          The team who decrypts and finds all the 7 clues to the treasure will
          win the hunt.
        </li>
        <li>
          The teams should report at the event venue at the beginning and end of
          the event.
        </li>
        <li>The decision of the event coordinators will be final.</li>
        <li>
          Violating the rules, property damage or any kind of cheating leads to
          disqualification.
        </li>
      </>
    ),
  },
  {
    name: "Select from Brainz",
    image: Image,
    id: "brainz",
    number: "2 - 3",
    venue: "I24",
    time: "2:00 pm - 3:30 pm",
    description: (
      <>
        <li>25 questions will be asked.</li>
        <li>Bring Your Own Device</li>
        <li> Once every 6 mins a picture-based pop quiz will be conducted</li>
        <li>
          The first three teams that answer the pop quiz correctly will receive
          an advantage
        </li>
        <li>Top three teams based on the leaderboard wins.</li>
      </>
    ),
    rules: (
      <>
        {" "}
        <li>The decorum of the event should be maintained.</li>
        <li>The judge's decision will be final and binding</li>
        <li>
          For the pop quiz only the first three teams which answer correctly
          will be rewarded with marks or an advantage.
        </li>
        <li>
          All questions will circle around programming and computer-based
          concepts
        </li>
        <li>Team of 2-3</li>
      </>
    ),
  },
  {
    name: "Whack-A-Bug",
    image: Image,
    id: "bugs",
    number: "2",
    venue: "H22",
    time: "12:30 pm - 2:00 pm",
    description: (
      <>
        Whack-A-Bug is a scenario based Debugging contest in which the
        participants will be given code snippets that contain one or more bugs
        in it. The participants must identify the bugs and debug the code .
      </>
    ),
    rules: (
      <>
        <li>Each team with exactly 2 members</li>
        <li>
          Results of all rounds are not subjected to discussion and the judge's
          decision is final.
        </li>
        <li>Participants are not allowed to browse the Internet.</li>
        <li>
          Any malpractices will not be tolerated and if found will be
          disqualified.
        </li>
        <li>Participants must strictly abide to the timings</li>
      </>
    ),
  },
  {
    name: "Hack Wheel",
    image: Image,
    id: "wheel",
    number: "4",
    venue: "I13 and COE",
    time: "9:30 am - 3:00 pm",
    description: (
      <>
        <li>
          Hack Wheel is a one day hackathon which will be conducted on 8th
          October.
        </li>
        <li>
          The problem statements will be announced at the start of the event.
        </li>
        <li>
          Within the end of the day the participants should have developed the
          ideas into prototypes.
        </li>
        <li>And should be pitched before the judges by the end of the day.</li>
      </>
    ),
    rules: (
      <>
        <li> Maximum 4 members per team. </li>
        <li> Judges decision is final</li>
        <li>Participants should bring their own laptops.</li>
        <li>Plagiarism should be avoided</li>
      </>
    ),
  },
  {
    name: "Scroll Unveilling",
    image: Image,
    id: "scroll",
    number: "3",
    venue: "I21",
    time: "9:30 am - 12:00 pm",
    description: (
      <>
        <li>
          Scroll Unveiling is an event where the participating teams will be
          presenting their paper.{" "}
        </li>
        <li>
          The judges will be judging based on the way of explanation of their
          respective slides.
        </li>
        <li>
          {" "}
          The teams with clear cut and quality presentations will be awarded
          with respective prizes.
        </li>
      </>
    ),
    rules: (
      <>
        {" "}
        <li> 3 members per team.</li>
        <li> Not more than 5 mins per presentation</li>
      </>
    ),
  },
  {
    name: "Turn Coat",
    image: Image,
    id: "turn",
    number: "1",
    venue: "I24",
    time: "10:30 am - 12:00 pm",
    description: (
      <>
        A game of luck and brains; Tambola with a twist. <br />
        There are 5 Prizes
        <ul className="justify-content-center mx-10 flex list-disc flex-row flex-wrap gap-x-10 gap-y-2">
          <li>Fast 5</li>
          <li>1st row</li>
          <li>2nd row</li>
          <li>3rd row</li>
          <li className="col-span-2">Full House</li>
        </ul>
        Depending on your luck, you might get a chance to help or sabotage your
        competition.
      </>
    ),
    rules: (
      <>
        {" "}
        <li>Participants are given tickets and a rough sheet.</li>
        <li>Questions are asked randomly.</li>
        <li>
          If participants locate the answer on their sheet, they are to mark it
          with the question number.
        </li>
        <li>Participants are allowed to see their neighbour’s sheets.</li>
        <li>
          Every five questions, a random participant is selected for the bonus
          round.
        </li>
        <li>
          If participants answer a question successfully, they can either
          prevent a question from being asked (thereby hindering others) or
          cause a question that is not on their sheet to be asked next (thereby
          helping others).
        </li>
      </>
    ),
  },
];

export default eventDetails;
