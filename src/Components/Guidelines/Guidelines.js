import React from "react";
import style from "./Guideline.module.css";
import Points from "./Points";

const Guideline = () => {
  return (
    <div className={style.majorContainer}>
      <div className={style.guideline}>
        <h1>Guidelines</h1>
        <p>
          Social Media <br />
          <ul>
            <li>
              Like, follow, and subscribe to our official handle of Aaruush,
              SRMIST on Instagram, Facebook, Twitter, LinkedIn, and Youtube so
              that your shares can be tracked.
            </li>
            <li>To earn Points,</li>
          </ul>
          <div className={style.table}>
            <table border="5">
              <tr>
                <th>WhatsApp</th>
                <th>Facebook</th>
                <th>Instagram</th>
                <th>LinkedIn</th>
                <th>Twitter</th>
              </tr>
              {/* <tr>
                                <td>Update your Whatsapp number on the My Profile page</td>
                                <td>Update your Facebook ID on the My Profile page</td>
                                <td>Update your Instagram ID in the My Profile Page</td>
                                <td>Update your LinkedIn ID on the My Profile page.</td>
                                <td>Update your Twitter ID on the My Profile page.</td>
                            </tr> */}
              <tr>
                <td></td>
                <td>
                  With the Facebook Profile you gave in profile setup, follow
                  Aaruush on its Facebook account
                </td>
                <td>
                  With the Instagram Profile you gave in profile setup, follow
                  Aaruush on its Instagram account
                </td>
                <td>
                  With the LinkedIn Profile you gave in profile setup, follow
                  Aaruush on its LinkedIn account
                </td>
                <td>
                  With the Twitter Profile you gave in profile setup ,follow
                  Aaruush on its Twitter handle{" "}
                </td>
              </tr>
              {/* <tr>
                  <td></td>
                  <td>
                    With the above account, follow Aaruush on its Facebook
                    account
                  </td>
                  <td>
                    With the above account, follow Aaruush on its Instagram
                    account
                  </td>
                  <td>
                    With the above account, follow Aaruush on its LinkedIn
                    account
                  </td>
                  <td>
                    With the above account follow Aaruush on its Twitter handle{" "}
                  </td>
                </tr> */}
              <tr>
                <td>
                  Within the first 24 hours of a new post, share the post and
                  message on your Whatsapp story to earn more points
                </td>
                <td>
                  Within the first 24 hours of a new post, Like, Share, Comment,
                  and Save the post to earn more points
                </td>
                <td>
                  Within the first 24 hours of a new post, Like, Share, Comment,
                  and Save the post to earn more points
                </td>
                <td>
                  Within the first 24 hours of a new post, Like, Share, Comment
                  on the post to earn more points
                </td>
                <td>
                  Within the first 24 hours of a new Tweet, Like, Quote Retweet
                  to earn more points
                </td>
              </tr>
              <tr>
                <td>Share the posts with your friends and Whatsapp groups</td>
                <td>Share the posts with relevant pages and influencers</td>
                <td>Share the posts with relevant pages and influencers</td>
                <td>Send the posts with relevant pages and influencers</td>
                <td>Encourage others to retweet and share as well</td>
              </tr>
            </table>
          </div>
          <ul>
            <li>
              clanS-
              <br />
              <ul>
                <li>Campus Ambassadors will be divided into clans.</li>
                <li>
                  Clan points will be awarded based on the sum of all individual
                  points earned by the CAs of that clan.
                </li>
                <li>
                  The clan leaderboard will be updated weekly and the members of
                  the clan who tops the board will earn 20 points each.
                </li>
              </ul>
              {/* Campus Ambassadors will also be shuffled into clans on WhatsApp
                groups and Clan points will be decided from the sum of individual CAP points of all members of clan.
                At the End of every Week the clan which have maximum points, its members will get a bonus of 20 points each. */}
            </li>
            {/* <li>
                Campus Ambassadors will also be shuffled into clans on WhatsApp
                groups and given tasks that carry incentives of their own. Upon
                completion of tasks, points will be earned and the top clan
                will also receive points individually.
              </li> */}
            {/* <li>
                If found to be involved in any invalid activity, then Team
                Aaruush’s decision would be final in that case.
              </li> */}
            <li>
              Deleting the reshared post, in any case, will lead to your
              disqualification
            </li>
            {/* <li>
                Like, Share, Comment, Retweet all posts within 24 hours of their
                going up on our pages.
              </li> */}
          </ul>
          <br />
          <b>
            {" "}
            Find detailed below an insight into the Campus Ambassador website,
            its features, and points to be noted:
          </b>
          <ul>
            <br />
            <li>
              The Dashboard provides an insight into your statistics, tasks, and
              weekly questions.
            </li>
            <li>
              The Tasks page has detailed information about your tasks and their
              respective points
            </li>
            <li>
              The Leaderboard is the hub for all the rankings, the clans as well
              as the individual points.
            </li>
            {/* <li>
                The My Profile page keeps detail of all your registered social
                media handles and contact details, the completion of which will
                earn you points
              </li> */}
            <li>
              The My Profile page stores detail of all your registered social
              media handles and contacts.
            </li>
            <li>
              The Guidelines tab will provide information on the points system
              as well as the rules and regulations you must observe as you work
              as a Campus Ambassador
            </li>
            <li>
              Answer weekly questions to earn points and remember to keep your
              answers short and creative
            </li>
            {/* <li>
                Like, Share, Comment, Retweet all posts within 24 hours of their
                going up on our pages
              </li> */}
          </ul>
        </p>
      </div>
      <Points />
    </div>
  );
};

export default Guideline;
