import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

export default [
  {
    id: "1",
    label: "5 Emaily Credits",
    name: "five",
    price: 5,
    category: "credits",
    description: (
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Single User
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          5GB Storage
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Unlimited Public Projects
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Community Access
        </li>
        <li className="text-muted">
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faTimes} />
          </span>
          Unlimited Private Projects
        </li>
        <li className="text-muted">
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faTimes} />
          </span>
          Dedicated Phone Support
        </li>
        <li className="text-muted">
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faTimes} />
          </span>
          Free Subdomain
        </li>
        <li className="text-muted">
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faTimes} />
          </span>
          Monthly Status Reports
        </li>
      </ul>
    )
  },
  {
    id: "2",
    label: "10 Emaily Credits",
    name: "ten",
    price: 10,
    category: "credits",
    description: (
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          <strong>5 Users</strong>
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          50GB Storage
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Unlimited Public Projects
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Community Access
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Unlimited Private Projects
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Dedicated Phone Support
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Free Subdomain
        </li>
        <li className="text-muted">
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faTimes} />
          </span>
          Monthly Status Reports
        </li>
      </ul>
    )
  },
  {
    id: "3",
    label: "20 Emaily Credits",
    name: "twenty",
    price: 20,
    category: "credits",
    description: (
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          <strong>Unlimited Users</strong>
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          150GB Storage
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Unlimited Public Projects
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Community Access
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Unlimited Private Projects
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Dedicated Phone Support
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          <strong>Unlimited</strong> Free Subdomains
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          Monthly Status Reports
        </li>
      </ul>
    )
  }
];
