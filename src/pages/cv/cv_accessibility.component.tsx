import React, { useLayoutEffect } from "react";
import {
  centerContainer,
  contentContainer,
  quickLinks,
  skills,
} from "./cv.component.style";
import Link from "next/link";

export function CvAccessibility() {
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
              <li>
                <a href="#Personal">Personal</a>
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

        <h2 id="TeckStack">Tech Stack</h2>
        <div css={skills}>
          <ul>
            <li>WCAG 2.2</li>
            <li>Aria</li>
            <li>NVDA</li>
            <li>VoiceOver</li>
            <li>Deque Axe Dev Tools</li>
            <li>Voice Control Software</li>
            <li>Tobii Eye Gaze</li>
            <li>Windows Magnifier</li>
          </ul>
          <ul>
            <li>Accessible HTML</li>

            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Agile</li>
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
            <a href="https://everyonesweb.netlify.app">Website</a> I began
            building to allow people to experience difference inaccessible
            scenarios and practise fixing the issues in the code{" "}
          </li>
        </ul>

        <h2 id="Employment">Employment</h2>

        <h3>
          Contract senior full-stack developer, DXV Rugby ({" "}
          <a href="dreamxvrugby.comp">dreamxvrugby.com</a>), January 2024 -
          present
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
            <strong>
              Researched, chose and tweaked an accessible component library
            </strong>{" "}
            -{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/components.html">
              React Aria Components
            </a>{" "}
            - to build upon. I got everyone happily on board with my top choice
            by demo-ing to coworkers how the libraries they had suggested and
            used before had several components that weren’t accessible and would
            take more time to remedy than build from scratch. This library had
            the least amount of issues (though not zero)! I audited any
            components before using them and added custom code where I wasn’t
            100% happy that it would give a good user experience to all, e.g. I
            tweaked the button component to ensure it was still keyboard and
            screen reader accessible when disabled.
          </li>
          <li>
            Greatly enjoyed creating a project with{" "}
            <strong>
              accessibility at the forefront from the very beginning
            </strong>
            ! I advised the team on any problems I saw in plans like consistent
            navigation, colour contrast issues with core brand colours and
            autoplaying animations.
          </li>
          <li>
            With the help of user feedback, I managed to convince design and
            product owners that{" "}
            <strong>a table was a better option than a carousel</strong> to
            display data since the data is more easily consumed and sorted and
            carousels are notorious for having accessibility issues! However,
            before convincing them to make this change, I did manage to
            previously build an accessible carousel by building on top of nuka
            carousel.
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
          Contract front-end developer, Mahlia Amatina Neurodivergent Art &
          Advocacy, June 2023
        </h3>

        <ul>
          <li>
            <strong>Designed and built an interactive map</strong> using React,
            TypeScript and Leaflet.js to creatively display 80 photos and
            stories that an artist collected from people around the world. I
            researched different mapping libraries which could be used create a
            map and gave my recommendation of Leaflet.js to the client in
            layman&pos;s terms; part of the reasoning was that it was possible
            to add custom code in places to remedy accessibility issues, which
            was still not ideal but better than other mapping libraries which
            also weren&apos;t accessible off the bat and didn&apos;t give you
            the option to add your own code.
          </li>
          <li>
            <strong>
              Reviewed the Leaflet.js mapping tool used against the Web Content
              Accessibility Guidelines (2.1)
            </strong>{" "}
            and wrapped custom code around certain problematic areas. My
            improvements included:
            <ul>
              <li>
                adding functionality for keyboard users to zoom and pan, which
                is a key expected aspect of a mapping tool
              </li>
              <li>
                allowing users to change which keys controlled zooming and
                panning
              </li>
              <li>
                preventing screen readers from reading out every single map
                point in quick succession when the frame of the map was
                focussed, which had been unexpected and off-putting
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Advised the artist on writing personalised descriptions for her
              photos
            </strong>{" "}
            rather than just including alt text to pass a guideline
          </li>
          <li>
            <strong>
              Made the web app as accessible as possible to the neurodiverse
              community
            </strong>
            , e.g. by limiting transitions and animations, which was especially
            important to the client
          </li>
        </ul>

        <h3>Senior full-stack developer, OpenMoney, 2019 - 2023</h3>

        <ul>
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
                and noticeable differences in attitudes
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
                catch basic accessibility issues
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
                <strong>
                  created a reusable React hook to ensure screen readers
                  announced the title
                </strong>{" "}
                of a page since React is a single page application and so would
                not do this automatically; every team in the company used this
                hook
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
                </strong>
                using React, .NET Core, Azure and SQL
              </li>
              <li>
                helped set up and maintain a{" "}
                <strong>shared component library</strong>. A developer was
                eventually hired to maintain this library full time, however I
                voluntarily kept in the loop with changes and we worked together
                to ensure changes made to the library didn&apos;t introduce any
                WCAG violations
              </li>
              <li>Mentored an apprentice</li>
            </ul>
          </li>
        </ul>

        <h3>Freelance web developer, 2018 - 2019</h3>

        <ul>
          <li>
            Some interesting machine learning and maths programming projects;
            nothing particularly accessibility related
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
