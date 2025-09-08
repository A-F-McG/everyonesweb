import React, { useLayoutEffect } from "react";
import {
  centerContainer,
  contentContainer,
  quickLinks,
  skills,
} from "./cv.component.style";
import Link from "next/link";

export function CvDev() {
  useLayoutEffect(() => {
    const footerElement = document.querySelector("footer") as HTMLElement;

    if (footerElement) {
      footerElement.style.display = "none";
    }
  }, []);

  return (
    <div css={centerContainer}>
      <div css={contentContainer}>
        <h1>Alice McGregor&apos;s CV</h1>

        <div css={quickLinks}>
          <div>
            <p>On this page:</p>
            <ul>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#TechStack">Tech Stack</a>
              </li>
              <li>
                <a href="#BeyondWork">Beyond work</a>
              </li>
              <li>
                <a href="#Employment">Employment</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
            </ul>
          </div>
        </div>

        <h2 id="Contact">Contact</h2>
        <a href="mailto:alicefrancesmcgregor@gmail.com">
          alicefrancesmcgregor@gmail.com (preferred contact method)
        </a>
        <br />
        <br />
        <a href="tel:+447871632310">+44 7388 494 034</a>

        <h2 id="TechStack">Some Tech Stack Favourites</h2>
        <div css={skills}>
          <ul>
            <li>NextJS</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Accessible HTML</li>
            <li>Tailwind</li>
            <li>CSS</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>WCAG 2.2 and accessibility software</li>
          </ul>
        </div>

        <h2 id="BeyondWork">Beyond Work</h2>
        <ul>
          <li>
            {" "}
            <a href="https://everyonesweb.netlify.app/poster">Poster</a> I
            created as a visual quick reference representation of the web
            content accessibility guidelines
          </li>
          <li>
            <a href="https://everyonesweb.netlify.app/experienceAnInaccessibleWeb">
              Website
            </a>{" "}
            I began building to allow people to experience difference
            inaccessible scenarios and practise fixing the issues in the code{" "}
          </li>
        </ul>

        <h2 id="Employment">Employment</h2>

        <h3>
          Contract senior full-stack developer, DXV Rugby ({" "}
          <a href="dreamxvrugby.comp">dreamxvrugby.com</a>), half a year full
          time in 2024, presently continuing to make updates part time
        </h3>

        <ul>
          <li>
            <strong>Sole front-end developer</strong> (with occasional input
            from a coworker), building a fantasy rugby website from scratch
            using React, TypeScript, and Tailwind CSS. Delivered a successful
            trial launch with ~200 active users, with strong growth potential in
            its first year.
          </li>
          <li>
            <strong>Collaborated on the Node.js and PostgreSQL backend,</strong>{" "}
            later taking over sole responsibility for that too
          </li>
          <li>
            <strong>
              Researched, chose and tweaked an accessible component library
            </strong>{" "}
            -{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/components.html">
              React Aria Components
            </a>{" "}
            - to build upon, tweaking components where necessary to ensure the
            most accessible user experience
          </li>

          <li>
            A brief overview of some of the core features:
            <ul>
              <li>
                <strong>Live game updates:</strong> worked with a third party
                API to receive in game player scores. Quickly deployed fixes
                during live rounds when data didn&apos;t come through as
                expected
              </li>
              <li>
                <strong>Team selection:</strong> viewing, selecting, deleting
                and swapping players within a budget cap
              </li>
              <li>
                <strong>Subscription tiers:</strong> implemented access
                restrictions for trial, round, monthly, and season users
              </li>
              <li>
                <strong>Scoring logic & leagues:</strong> built dynamic player
                scoring logic, including supersub and captain bonuses, with
                real-time updates in league tables during matches
              </li>
              <li>
                <strong>Admin tools:</strong> created controls for syncing data,
                managing users, and selecting round winners
              </li>
            </ul>
          </li>
        </ul>

        <h3>
          Contract accessibility specialist, Ayoa - neuro-inclusive mindmaps, a
          couple of months in early 2024
        </h3>
        <ul>
          <li>
            Reached out to a company and successfully gained their interest in
            improving the accessibility of their product
          </li>
          <li>
            Assessed their mind map web app and brochure website against the{" "}
            <strong>WCAG 2.2</strong>
          </li>
          <li>
            <strong>Issued digital reports</strong> with specific guidance on
            how to tweak the code to remediate issues
          </li>
          <li>
            Worked closely with the development team to iteratively improve on
            accessibility
          </li>
        </ul>

        <h3>
          Contract full stack developer, Rebalance Earth, MicroSoft Hackathon,
          July 2023
        </h3>
        <ul>
          <li>
            Researched, explained and set up suitable{" "}
            <strong>Azure architecture</strong> for an MVP of an ecosystem
            prediction model which would be scalable and performant
          </li>
          <li>
            Created a{" "}
            <strong>serverless API in the form of Azure functions</strong> for
            clients to upload geospatial data to a Cosmos database
          </li>
          <li>
            <strong>
              Integrated Power BI, ArcGIS maps and Azure Fabric data
            </strong>{" "}
            to create a dashboard where users could select rivers to restore and
            view the result on the ecosystem
          </li>
        </ul>

        <h3>
          Contract front-end developer, Mahlia Amatina Neurodivergent Art &
          Advocacy, June 2023
        </h3>

        <ul>
          <li>
            <strong>Designed and built an interactive map</strong> using React,
            TypeScript and Leaflet.js to creatively display 80 photos and
            stories that an artist collected from people around the world.
          </li>
          <li>
            Researched different mapping libraries and tools which could be used
            create that map, and gave my recommendation to the client in
            <strong>layman&apos;s terms</strong> Set up GitHub and a{" "}
            <strong>CI/CD pipeline</strong> using Netlify for the client so
            that:
            <ol>
              <li>
                The setup was simple enough that the client could make changes
                themselves in future and{" "}
              </li>
              <li>
                I could push frequent updates and tweak the product based off
                her feedback and ideas
              </li>
            </ol>
          </li>
        </ul>

        <h3>Contract full-stack developer, Crover, June 2023</h3>
        <ul>
          <li>
            <strong>Fixed 2d and 3d Plotly graphs</strong> which were showing
            nonsensical temperature and moisture data by tweaking the data
            retrieved from an API into a more suitable format
          </li>
          <li>
            <strong>Identified a large security issue</strong> in the form of
            unprotected URLs and endpoints and subsequently hid these behind
            authorisation requirements
          </li>
          <li>
            Advised the company&apos;s permanent developer on how to better
            architect a large project by favouring reusable code to{" "}
            <strong>
              improve maintainability, readability and reduce bugs
            </strong>
          </li>
        </ul>

        <h3>Senior full-stack developer, OpenMoney, 2019 - 2023</h3>

        <ul>
          <li>
            Led a front-end project
            <ul>
              <li>
                <strong>created a dashboard</strong>, using React and
                Typescript, where customers could locate their mortgage and
                investment products
              </li>
              <li>
                <strong>
                  was the go-to for any quirky accessibility issues
                </strong>
                , such as why screen readers were failing to announce aria-live
                regions which were being conditionally rendered in React
              </li>
              <li>
                gathered data by calling internal Rest APIs built using a{" "}
                <strong>microservices architecture</strong> to build out
                customer profile pages
              </li>
              <li>
                <strong>
                  guided colleagues who were unfamiliar with React
                </strong>{" "}
                and explained concepts like two-way data binding and state
                management via pair programming, having in depth conversations
                on PRs and discussing the team&apos;s progress in Agile
                retrospective meetings
              </li>
            </ul>
          </li>

          <li>
            Worked as a full stack developer in several teams
            <ul>
              <li>
                <strong>
                  built an online mortgage application and two onboarding
                  journeys
                </strong>{" "}
                using React, .NET Core, Azure and SQL
              </li>
              <li>
                researched and coded a <strong>mathematical algorithm</strong>{" "}
                which was a key feature in recommending mortgage products
              </li>
              <li>
                helped set up and maintain a{" "}
                <strong>shared component library</strong>. A developer was
                eventually hired to maintain this library full time, however I
                voluntarily kept in the loop with changes and we worked together
                to ensure changes made to the library didn&apos;t introduce any
                WCAG violations
              </li>
              <li>
                used <strong>third party APIs</strong> to retrieve personalised
                mortgage recommendations from a variety of lenders
              </li>
              <li>Mentored an apprentice</li>
              <li>
                created a{" "}
                <strong>restricted area for financial advisors</strong> to
                manage applications
              </li>
              <li>
                pair programmed with other developers to tackle errors caught in{" "}
                <strong>Azure application insights</strong> and develop complex
                features
              </li>
              <li>
                <strong>planned new features</strong> along with other
                developers, designers, testers and product owners
              </li>
            </ul>
          </li>

          <li>
            Successfully advocated for improved accessibility
            <ul>
              <li>
                <strong>
                  presented a very well-received pitch entitled &apos;Are we
                  accessible?&apos;
                </strong>{" "}
                to all members of the company about the importance of
                accessibility, which led to tangible changes within the company
              </li>
              <li>
                audited several of our projects against the{" "}
                <strong>WCAG 2.1 Level A and Level AA</strong>
              </li>
              <li>
                <strong>
                  documented new accessibility acceptance criteria
                </strong>{" "}
                for pull requests and the QA team going forward
              </li>
              <li>
                proposed a plan to{" "}
                <strong>retroactively improve the accessibility</strong> of
                existing projects
              </li>
              <li>
                <strong>
                  held sessions showing how to manually test a website
                </strong>
                , including testing keyboard accessibility and the basics of how
                to use a screen reader on a desktop and a phone
              </li>
              <li>
                <strong>created a Wiki</strong> to share knowledge across the
                teams
              </li>
              <li>
                <strong>integrated Axe DevTools</strong> automated testing into
                the daily workflow of developers and testers
              </li>
              <li>
                used an <strong>eslint plugin</strong> to a front-end project to
                catch basic accessibility issues during development
              </li>
              <li>
                worked with designers on beginning to implement an{" "}
                <strong>accessibility annotation kit</strong> in Figma to shift
                some of the responsibility left, with the intention of reducing
                accessibility issues being created in the first place and hence
                saving time on fixes
              </li>
            </ul>
          </li>
        </ul>

        <h3>Freelance web developer, 2018 - 2019</h3>

        <ul>
          <li>
            Programmed an interactive graph using the <strong>Plotly</strong>{" "}
            library in the form of a{" "}
            <strong>silo using mathematical equations</strong>
          </li>
          <li>
            Used the Google Sheets API to{" "}
            <strong>extract and manipulate housing data</strong> and created a
            user-friendly interface to run a machine learning recommendation
            algorithm on said data
          </li>
        </ul>

        <h2 id="Education">Education</h2>

        <ul>
          <li>Mathematics BSc, Newcastle University, 1st</li>
          <li>
            Informatics MSc (machine learning programming and theory),
            University of Edinburgh, 2:1
          </li>
        </ul>
      </div>
    </div>
  );
}
