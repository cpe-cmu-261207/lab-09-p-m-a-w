import { useEffect, useRef, useState } from "react";
import { Template } from "../components/Template";

export default function Home() {
    const _card = useRef();
    useEffect(() => {
        if (_card.current == null) return;
        const cards = [_card.current];

        function injectStylesheet(url) {
            let node = document.createElement("link");
            node.setAttribute("rel", "stylesheet");
            node.setAttribute("href", url);
            document.body.appendChild(node);
        }

        injectStylesheet(
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        );

        for (let card of cards) {
            let repo = card.getAttribute("data-repo");
            let url = "https://api.github.com/repos/" + repo;

            fetch(url, { method: "GET" })
                .then((resp) => {
                    return resp.json();
                })
                .then((json) => {
                    card.innerHTML = `
              <img class="gh" src="${card.getAttribute("data-image") || json.owner.avatar_url
                        }">
              <div class="gh container">
                <h4 class="gh">
                  <a class="gh" href="${json.html_url}">
                    ${json.full_name}
                  </a>
                </h4>
                <p class="gh">${json.description}</p>
                <a class="gh" href="${json.html_url}/network">
                  <i class="fa fa-fw fa-code-fork" aria-hidden="true"></i> ${json.forks_count
                        }
                <a class="gh" href="${json.html_url}/stargazers">
                  <i class="fa fa-fw fa-star" aria-hidden="true"></i> ${json.stargazers_count
                        }
                </a>
              </div>
            `;
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [_card])
    return <Template>
        <img
            className="rounded-circle mb-2"
            width="100"
            height="100"
            src="images/profile.jpg"
        />
        <h1>Perapol Pamoonchaer</h1>
        <p>This is project that I had involve with...</p>
        <div ref={_card} className="gh-card gh-medium mb-4" data-repo="p-m-a-w/boxblock"></div>
    </Template>
}
