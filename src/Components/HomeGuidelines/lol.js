import React from "react";
import style from "./HomeGuidelines.module.css";
import Navbar from "./Navbar/Navbar";
import Footer from "../Home/Components/Footer/Footer";
// import Points from "./Points";

const Guideline = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={style.majorContainer}>
        <div className={style.guideline}>
          <h1>Guidelines</h1>
          <p>
            The Campus Ambassadors will be assigned different ranks on the basis
            of their points. Rank system is only applicable to Campus
            Ambassadors with points more than 499, i.e. Campus Ambassadors
            eligible for participation certificate and other incentives. Campus
            Ambassadors can climb up the ranks by stacking points and obtaining
            +50 bonus points that comes along with rank upgrades.Campus
            Ambassadors will get sorted into 6 clans to effectively manage their
            workflow and to improve their interaction.
          </p>
          <div className={style.table}>
            <table border="5">
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div>
            <h1>Point System</h1>
            <p>
              The Campus Ambassadors will gain points on the basis of the
              following criterias:
            </p>
          </div>
          <div className={style.table}>
            <table border="5">
              <tr>
                <th>Task</th>
                <th>Points</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Competitions</td>
                <td>
                  1st - 100
                  <br />
                  2nd - 75
                  <br />
                  3rd - 50
                </td>
              </tr>
              <tr>
                <td>Top the Clan Leader board</td>
                <td>
                  Knights- 100
                  <br />
                  Lords- 75
                  <br />
                  Kings- 50
                </td>
              </tr>
              <tr>
                <td>Attend Meet Your Clan and Meet the Geek sessions</td>
                <td>60/event</td>
              </tr>
            </table>
          </div>
          <div>
            <h2>Table 1.2 - Social Media Drills</h2>
            <div className={style.table}>
              <table border="5">
                <tr>
                  <th>Event Category</th>
                  <th>Highlights Events</th>
                  <th>Flagship Events</th>
                  <th>Workshops</th>
                  <th>Challenges &amp; Championships</th>
                  <th>Total Points</th>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>1. Save(must) 2. Comment 3. Share 4. Like</td>
                  <td>15</td>
                  <td>15</td>
                  <td>15</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>WhatsApp</td>
                  <td>1. Share as Story 2. Forward to minimum 2 groups.</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>1. Like 2. Share</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>1. Like 2. Share 3. Comment</td>
                  <td>15</td>
                  <td>15</td>
                  <td>15</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>1. Retweet 2. Like 3. Comment</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={style.table}>
            <h2>Table 1.3 - Milestone Bonus Points</h2>
            <table border="5">
              <tr>
                <th>Total Registrations (for both paid and unpaid events)</th>
                <th>Points</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guideline;
