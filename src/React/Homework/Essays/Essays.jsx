import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays= () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2 What is the difference between Git, Github and Heroku?'>
            <ul>
                <li>Git is a high-quality version control system that allows users to manage their source code history on their local system rather than the cloud. 
            It allows an endless number of workflows which makes it easy to merge, delete, create multiple local branches. Git is a free easy open source, 
            allowing users to have multiple local branches that are independent of one another but can merge, delete and create those lines of development. 
            It has an endless number of workflows.</li>
            
            <li>Github is a cloud-based hosting service that lets you manage git repository hosting services. It is an open source community where one person can 
            build the repository(a location where data is stored and managed) and numerous developers can clone from that repository and build their own independent 
            repositories from there. </li>

            <li>Heroku is a cloud platform service for backend stack availability in collaborating and deploying projects. </li>
            </ul>
                </Essay>
            <Essay q='S3 Explain the difference between HTML, CSS and JS.'>
            <ul>
            <li>HTML stands for HyperText Markup Language, which helps format and structures the web page into paragraphs, sections, headings, navigation bars, etc. 
            HTML is known as the human skeleton. Without HTML, there won’t be CSS and Javascript because HTML serves as the base.
            </li>
            <li>
            CSS stands for Cascading Style Sheets, a design language that helps improve the appearance of a web page such as the look of the typeface, margins, 
            spacing, and padding. CSS is known as the human’s appearance. We can easily change the look of the page using CSS.
            Without CSS, the webpage will look dull with just HTML.
            </li>
            <li>
            JavaScript is the programming language and makes the contents interactive and functional such as button click, security password creation, confirmation 
            boxes, check forms, calls-to-action, interactive games, animations, special effects, and adding new identities to existing information. 
            Javascript is the webpage behavior that engages the users. 
            </li></ul>

                </Essay>
            <Essay q='S4 What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
            <ul>
                <li>Single Page Application(SPAs) works in a single browser without the need to reload such examples are navigation apps, 
            social media platforms, and email providers. SPAs code is dependent on JavaScript frameworks which allow the browsers 
            to load pages while offline and never lose track of the data. JavaScript forms are the backbone of most native applications. 
            SPAs use both HTML and Javascript features which serve as their frontend and a separate framework serves as its functional back end. 
            So if one fails there’s not much of an issue in performance. SPAs use React and Angular to grants server control over rendering content.
            </li>
            <li>
            Multi-page applications or MPAS is a “traditional” way of app development using AJAX (Asynchronous JavaScript and XML). AJAX allows the 
            transfer of large complex data between the servers and browsers and as it gets more complicated, it challenges JavaScript developers. 
            MPAS is the prime choice for SEO optimization and exists through several frameworks, adaptable to multiple types of technologies. It requires 
            frequent reloads from the application to access data for the user. MPAS is slower than SPAS but more secure than SPAs. MPAs have to request 
            data for each page the user access. Whereas SPAs have the advantage of preloading and retrieving the data, requests are faster due to the cache.
            SPAs runs on JavaScript which makes them easier for hacker attacks because it does compile data for security.
            </li>
            
            </ul>
            </Essay>
            <Essay q='S5 What’s the difference between Web Designer, Front End Developer, and Back End Developer?'>
            <ul>
                <li>Web Designer also known as UX designer designs the look and feel of the website, building mock ups and features using program 
                    like Photoshop or Fireworks and never touch code but some web designer also does some coding such as HTML, CSS, and JavaScript 
                    to translate the vision for developers.</li>
                <li>Front End Developer is a client-side rendering that renders the content on your computer and not a remote web server. 
            They can create a site without any back-end development by using HTML, CSS, and JavaScript and client-side frameworks such as 
            Angular, React, Stencil and Vue. They create user experiences such as text, colors, buttons, images, and navigation menus. 
            Front-end developers build the design into something functional using front-end languages.
                </li>
                <li>Back End Developer is a server-side rendering that creates websites and web applications. Back End Developer serves as 
            the backbone of any application and is responsible for storing and organizing data, databased (SQL). It works with software stacks such as operating 
            systems, web servers, frameworks, language, and programming APIs, .NET, Mean, LAMP, C#, JavaScript, Java, Python, Node.js or PHP. 
            The backend communicates with the frontend by sending and receiving information displayed on the browser.
                </li>
                </ul>
            </Essay>
            <Essay q='S6 Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                    <ul>
                        <li><b>Site Relative: Url relates from the root of the website.</b>
                        </li>
                        <li>
                            <b>Document Relative: paths used for local links in websites. Users can use document relative path to link a document in another folder 
                                by specifying the path through the folder hierarchy from the current document to the linked document. (/) forward slash represents moving 
                                down one level in the folder hierarchy. (../) represents moving up one level the folder hierarchy.
                            </b>
                            <li><b>Absolute Paths is a path that describes the location of a file or folder. It helps link a document on another server.
                            </b></li>
                        </li>
                        </ul>

            </Essay>
            <Essay q='S7 What is the difference between jpg, gif, png and SVG images?'>
                <ul>
                    <li><b>Jpeg</b> stands for Joint Photographic Experts Group and is a method of lossy compression for digital images. 
                        It’s a high standard of quality but has a lower quality compared to PNG files. The JPEG size is easy to download. 
                        Jpeg files can be compressed but just lower the resolution of the image and can make for small files at the expense
                        of quality. Jpeg has millions of colors.

                    </li>
                    <li><b>Gif</b> stands for graphics interchange format is an image file and has 256 total colors.
                        Gif can be compressed to be transferred quickly and there is an animated gif which a collection of images played 
                        in a sequence to appear to move. Gift can have greater compression than PNG and has a larger size compared to PNG.
                    </li>
                    <li><b>Png</b> stands for Portable Network Graphics is a bitmap image format on the internet. PNG has millions of colors and
                        indexed color.PNG’s format is designed to be transferring images on the Internet. It doesn’t support animation.
                    </li>
                    <li><b>Scalable Vector Graphics (SVG) </b> are an Extensible Markup Language (XML)-based markup language for describing two-dimensional 
                        based vector graphics. SVG images can be searched, indexed, scripted, and compressed. Therefore, they can be created edited with 
                        any text editor or drawing software. SVG format vector images can be rendered at any size without loss of quality. 
                    </li>
                </ul>
            </Essay>
            <Essay q='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
                <ul>
                    <li> <b>Project Manager</b> manages the process of the work done in a team to achieve all project goals within the given constraints. The primary constraints are scope, 
                    resources, time, and budget.
                    </li>
                    <li><b>Business Analyst</b> help guide businesses in improving processes, products, services, and software through data analysis.

                    </li>
                    <li> <b>Scrum Master</b> is a professional who leads a team using Agile project management through our the project. The difference between a Scrum master and a project manager 
                    is project manager focuses on the project whereas Scrum master focuses on the team by taking steps to ensure the individual team members are able to success.
                    </li>
                    <li><b>User Experience Designer</b> is responsible for user’s overall satisfaction with a product.
                    </li>
                    <li><b>Web Developer/Engineer</b> is a software engineer who works on web based applications. They build functions within a website for instance a form to capture an e-mail or a message to thank a customer for their business. 
                    They are familiar with many software programs and web programming languages such as HTML, JavaScript, Ruby on Rails, and C++.
                    </li>
                    <li><b>Quality Assurance Tester</b> conducts software testing, test and find bugs in the app to resolve issues and ensure guidelines are being adhered to.``
                    </li>
                    <li><b>DevOps</b> is a set of practices that combines software development (Dev) and IT operations (Ops). It is a philosophy that provides better communication and collaboration between teams. DevOps manages hardware and deployment of software.

                    </li>
                </ul>
            </Essay>
            <Essay q='What is considered the right size for an image or video asset?'>
            <p>Videos in HD sizes 720 or 1080px, Image  can be  1280x720 or 1920X 1080</p>
            </Essay>
            <Essay q='What does it mean for a company to be Agile? What are the pros and cons of being agile?'>
            <p>Agile is one of the most popular approaches to project management. The benefit of Agile makes the managers’ job easier and help focuses on both delivering quality and value to the customer and also completing the project within the given project constraints. 
                The pros of Agile model is customers, developers, and testers are constantly interacting with each other so the working software is delivered more frequently. The cons of Agile model is the lack of formal training on Agile which can lead teams in engaging in 
                bad behaviors and lack of predictability.</p>
            </Essay>
            <Essay q= 'What are testing environments? What is the difference between Local, Dev, QA and Production?'>
                <p> A testing environment is: Space developers deploy there work for testing their work.</p>

                <ul>
                    <li><b>Local:</b>Developer's Machine- to build and test your own code on your computer.</li>
                    <li><b>Dev:</b>Dev Testing Server: Dev Paired Code reviews.</li>
                    <li><b>QA:</b>Quality Assurance Testing Server for QA team.</li>
                    <li><b>UAT</b> User Acceptance Testing Server for Customer to test.</li>
                    <li><b>Production: Live website for users to access- public domain.</b></li>
                </ul>
            </Essay>
            <Essay q='Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
            <p> HTML img tag linked images to webpages. The img tag has two required attributes: src specifies the path to the image and alt specifies an alternate text of the image. For images to serve as a link then add the a tag and put img tag inside the a tag. 
                For CSS to come in the picture, users use CSS width and height properties to define the size of the image and CSS float property let the image float on the right or left of the text.</p>
            <p>Printable is good in HTML, CSS by default is off- as background image.</p>
            <p>HtmL if image is related to content.</p>
            </Essay>
            <Essay q='What is the difference between IDs, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)'>
                <li id="timbutu"><b>ID:</b>Label: We use pound sign (#) in CSS and JS. Singular- should only label one HTML element on a page. </li>
                <li id="timbukthree"><b>Classes:</b>Label: We use the period (.) in Css and JS. Defines a series; Multiple HTML elements.</li>
                <li id class="my Border secondaryCLass"><b>Tag:</b> Any HTML tag is in the HTML language.</li>
                <li class="myborder"><b>Specificity</b>Determines which selector and rule applies to an elelment.</li>
            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <p> CSS Preprocessors are scripting languages that extend the default capabilities of CSS by letting people generate CSS fro mthe preprocessor’s own unique syntax. Most CSS preprocessors will add some features that don’t exist in CSS, 
                    such as mixing, nesting selector, inheritance selector. To use a CSS CSS Preprocessor you must install a CSS compiler on your web server. Popular CSS preprocessors: Sass, LESS, Stylus, PostCSS
                    Styled-components is a library build for React and React Native developers. Styled Components leverage a mixture of JavaScript and CSS using a technique called CSS-in-JS. Styled-compenets has full CSS functionality, use of tagged 
                    template literals, automatic vendor prefixing, dynamic rendering during run-time, and server-side rendering support. With styled-compenents, developers can have the flexibility of reusing their CSS code from one project to another 
                    and no need to map your created components to external CSS styles. The advantages of using styled-components are every stylings are tied to a specific components which make it easier to know which CSS is applied, and makes it easier 
                    to delete unused components styles; it provide unique class names for your styles which help eliminate problems with class names duplications, misspellings and overlaps; global themes are supported in style-components which made it 
                    simple without manually managing dozens of classes; with styled-components you can import your styles into other project areas regardless of the size of your codebase. 
                    <b>How do Styled Components violate separation of concerns</b> : Separation of concerns is when code is grouped together based on relationship rather than an arbitrary requirement. With styled-components, there’s not need for global 
                    CSS in changing default colors or sizes because we can use a component and co-locate the style within it.
                    </p>
            </Essay>
            <Essay q="Who is the client? (e.g. Me, a friend of mine starting a business, Coffee Bean, Made Up Widget Company) What is it's purpose? (e.g. an online brochure for a coffee shop, to promote my portfolio work) Why did you choose this subject?">
                <p>In my other class, I’m working on a project about a home improvement app so I’ll be the client. For my final project, I would like to make an online website to promote this app. People can first visit this website to get an idea prior to downloading. 
                The purpose of this home improvement online website is to provide a brief introduction and show how easy and reliable services will be on the app. </p>
                <p>I choose this subject because I want to provide a platform where people who share similar interests can post 
                and blog about their experiences. Also, a platform where people can request taskers to help them fix or redecorate their places. Getting a simple task done with just simple clicks would be the purpose of this app.</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;