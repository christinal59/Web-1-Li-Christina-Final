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
            <Essay q='S5 '>
            Answer 
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;