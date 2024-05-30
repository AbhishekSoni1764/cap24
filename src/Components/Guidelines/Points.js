import React from "react";
import style from "./Guideline.module.css";

const Points = () => {
  return (
    <div className={style.guideline2}>
      <h1>Points</h1>
      <p>
        <ul>
          {/* <li>
                        Update your profile: 20 Points
                    </li> */}
          <li>
            Follow social media handles as mentioned above and subscribe to our
            YouTube channel: 50 Points (Facebook, Instagram, LinkedIn, Twitter,
            YouTube)
          </li>
        </ul>
        <div className={style.table}>
          <table border="5">
            <tr>
              <th>Event Category</th>
              <th>Points</th>
              <th>Instagram (Follow, Like, Story)</th>
              <th>WhatsApp (Story and Forward in at least 2 groups)</th>
              <th>Facebook (Like and Share Post)</th>
              <th>LinkedIn (Like, Comment, Share)/ Twitter (Like, Retweet)</th>
            </tr>
            <tr>
              <td>Highlights</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Webinars</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Flagship Events</td>
              <td>70</td>
              <td>20</td>
              <td>20</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Workshops</td>
              <td>70</td>
              <td>20</td>
              <td>20</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Challenges and Championships</td>
              <td>70</td>
              <td>20</td>
              <td>20</td>
              <td>15</td>
              <td>15</td>
            </tr>
          </table>
        </div>
        <ul>
          <li>
            If a Campus Ambassador brings in another recruit from the same
            college they shall receive 20 points, however for recruits from
            different colleges the CA shall receive 30 points
          </li>
          <li>
            10 points will be awarded to you by answering each weekly question.
          </li>
          <li>
            A leaderboard will be maintained and kept track of using the Point
            System.
          </li>
          <li>
            To unlock incentives it is crucial that candidates earn points:
            <ul>
              <li>First Incentive Unlocked: At Bronze badge</li>
              <li>Second Incentive Unlocked: At Silver badge</li>
              <li>Third Incentive Unlocked: At Gold badge</li>
            </ul>
          </li>
        </ul>
        <br />
        <b>BADGE SYSTEM:</b>
        <ul>
          <br />
          <li>
            The BADGE System is as follows:
            <br />
            <ul>
              <li>Rank #1 to #5 : Gold Badge </li>
              <li>Rank #6 to #15 : Silver Badge</li>
              <li>Rank #16 to #25 : Bronze Badge</li>
            </ul>
          </li>
          {/* <li>
              These ranks will be displayed on the leaderboard and Campus
              Ambassadors can use it to refer their own ranks and then earn
              points to get higher rankings
            </li> */}
          {/* <li>
            The Clan System is as follows: The individual points of each member
            of the clan will add up to the cumulative points of the entire
            clan and further instructions will then be communicated via
            WhatsApp
          </li> */}
        </ul>
      </p>
    </div>
  );
};

export default Points;
